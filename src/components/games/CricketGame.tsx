import { useCallback, useEffect, useRef, useState } from "react";
import { pickQuestion, type Question } from "@/lib/questions";
import { QuestionGate } from "@/components/games/QuestionGate";
import sahurImg from "@/assets/mr-sahur.png";

type Phase = "question" | "windup" | "pitch" | "result";
type Hit = "miss" | "weak" | "good" | "perfect";

const STRIKE_X = 18; // % from left where bat is
const PERFECT_BAND = 3;
const GOOD_BAND = 7;

export function CricketGame() {
  const [phase, setPhase] = useState<Phase>("question");
  const [question, setQuestion] = useState<Question>(() => pickQuestion("env"));
  const [ballX, setBallX] = useState(110);
  const [ballY, setBallY] = useState(40);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [round, setRound] = useState(1);
  const [hit, setHit] = useState<Hit | null>(null);
  const [distance, setDistance] = useState(0);
  const [shake, setShake] = useState(false);
  const [slowmo, setSlowmo] = useState(false);
  const speedRef = useRef(0.55);
  const rafRef = useRef<number | null>(null);

  const startRound = useCallback(() => {
    setQuestion(pickQuestion("env"));
    setPhase("question");
    setHit(null);
    setBallX(110);
  }, []);

  const onCorrect = () => {
    setPhase("windup");
    setTimeout(() => {
      setBallX(110);
      setBallY(35 + Math.random() * 20);
      setPhase("pitch");
    }, 900);
  };

  // Animate ball
  useEffect(() => {
    if (phase !== "pitch") return;
    const speed = speedRef.current * (slowmo ? 0.25 : 1);
    let x = 110;
    const step = () => {
      x -= speed;
      setBallX(x);
      if (x < -5) {
        setHit("miss");
        setCombo(0);
        setPhase("result");
        return;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [phase, slowmo]);

  const swing = useCallback(() => {
    if (phase !== "pitch") return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const diff = Math.abs(ballX - STRIKE_X);
    let result: Hit = "miss";
    let pts = 0;
    let dist = 0;
    if (diff <= PERFECT_BAND) { result = "perfect"; pts = 100; dist = 95; }
    else if (diff <= GOOD_BAND) { result = "good"; pts = 50; dist = 70; }
    else if (diff <= 14) { result = "weak"; pts = 15; dist = 30; }
    else { result = "miss"; pts = 0; dist = 0; }

    if (result === "perfect") setSlowmo(true);
    setHit(result);
    setDistance(dist);
    if (result === "perfect" || result === "good") {
      const newCombo = combo + 1;
      setCombo(newCombo);
      const mult = 1 + Math.floor(newCombo / 3) * 0.5;
      setScore((s) => s + Math.round(pts * mult));
      setShake(true);
      setTimeout(() => setShake(false), 300);
    } else {
      setCombo(0);
      if (pts > 0) setScore((s) => s + pts);
    }
    setPhase("result");
    setTimeout(() => setSlowmo(false), 800);
    speedRef.current = Math.min(1.6, speedRef.current + 0.07);
  }, [ballX, combo, phase]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space") { e.preventDefault(); swing(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [swing]);

  const next = () => {
    setRound((r) => r + 1);
    startRound();
  };

  return (
    <div className="font-mono">
      {/* HUD */}
      <div className="mb-3 flex flex-wrap items-center gap-3 text-xs">
        <span className="border border-primary px-2 py-1 text-primary glow-border">SCORE {score.toLocaleString()}</span>
        <span className="border px-2 py-1 text-muted-foreground">ROUND {round}</span>
        <span className="border px-2 py-1 text-muted-foreground">COMBO x{combo}</span>
        <span className="border px-2 py-1 text-muted-foreground">SPEED {speedRef.current.toFixed(2)}</span>
        <span className="ml-auto text-[11px] text-muted-foreground">[SPACE] / [CLICK] to swing</span>
      </div>

      {/* Stadium */}
      <div
        onClick={swing}
        className={`relative aspect-[16/8] w-full overflow-hidden border border-primary glow-border bg-grid cursor-crosshair ${shake ? "animate-pulse" : ""}`}
        style={{ background: "radial-gradient(ellipse at center, oklch(0.14 0.03 250) 0%, oklch(0.05 0.01 250) 70%)" }}
      >
        {/* Holographic crowd line */}
        <div className="absolute inset-x-0 top-2 flex justify-around opacity-50">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="h-6 w-3 bg-primary/30 glow-soft" style={{ animation: `flicker ${2 + (i % 3)}s infinite` }} />
          ))}
        </div>
        {/* Scoreboard hologram */}
        <div className="absolute right-3 top-3 ascii-frame bg-background/70 px-2 py-1 text-[10px] text-primary">
          ◆ TUNG³ STADIUM ◆<br />
          PITCH SPEED: {speedRef.current.toFixed(2)} u/f
        </div>

        {/* Pitch line */}
        <div className="absolute bottom-[28%] left-0 right-0 h-px bg-primary/40" />
        {/* Strike zone */}
        <div className="absolute bottom-[15%] flex h-[35%] flex-col items-center" style={{ left: `${STRIKE_X}%`, transform: "translateX(-50%)" }}>
          <div className="h-full w-0.5 bg-primary/60 glow-soft" />
          <div className="mt-1 text-[9px] text-primary">STRIKE</div>
        </div>

        {/* Player (right side flipped to face right? actually batter on left, bowler on right) */}
        <div className="absolute bottom-[10%] left-[6%]">
          <div className="relative">
            <div className={`h-24 w-1.5 origin-bottom bg-primary glow-soft transition-transform duration-150 ${
              phase === "result" && hit && hit !== "miss" ? "-rotate-[110deg]" : "rotate-12"
            }`} />
            <div className="mt-1 text-[10px] text-primary">CYBER_BATTER</div>
          </div>
        </div>

        {/* Bowler (Mr Sahur) */}
        <div className="absolute bottom-[10%] right-[4%] flex flex-col items-center">
          <img src={sahurImg} alt="" className="h-32 w-auto drop-shadow-[0_0_18px_color-mix(in_oklab,var(--glow)_50%,transparent)]" />
          <div className="text-[10px] text-primary">MR_SAHUR.bowler</div>
        </div>

        {/* Ball */}
        {(phase === "pitch" || (phase === "result" && hit !== "miss")) && (
          <div
            className="absolute h-3 w-3 rounded-full bg-primary glow-soft"
            style={{
              left: `${ballX}%`,
              bottom: phase === "result" && hit !== "miss"
                ? `${30 + distance * 0.5}%`
                : `${28 + ballY * 0.3}%`,
              transform: "translate(-50%, 50%)",
              transition: phase === "result" ? "left 0.8s linear, bottom 0.8s ease-out" : "none",
              boxShadow: "0 0 18px var(--glow), 0 0 36px var(--glow)",
            }}
          />
        )}
        {phase === "result" && hit && hit !== "miss" && (
          <div
            className="absolute h-3 w-3 rounded-full bg-primary"
            style={{
              left: `${ballX + (hit === "perfect" ? 110 : hit === "good" ? 80 : 40)}%`,
              bottom: "70%",
              transition: "all 0.8s ease-out",
            }}
          />
        )}
        {phase === "pitch" && ballX > 50 && (
          <div className="absolute bottom-[28%] right-[10%] text-[10px] text-primary glow-text animate-pulse">
            ▸ INCOMING
          </div>
        )}

        {/* Slow-mo overlay */}
        {slowmo && <div className="pointer-events-none absolute inset-0 bg-primary/5 mix-blend-screen" />}

        {/* Result overlay */}
        {phase === "result" && hit && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className={`font-display text-6xl md:text-8xl glow-text ${
              hit === "perfect" ? "text-success animate-bounce" :
              hit === "good" ? "text-primary" :
              hit === "weak" ? "text-muted-foreground" : "text-destructive"
            }`}>
              {hit === "perfect" ? "PERFECT HIT!" : hit === "good" ? "GOOD!" : hit === "weak" ? "WEAK..." : "MISSED!"}
            </div>
          </div>
        )}

        {/* Question modal */}
        {phase === "question" && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/85 backdrop-blur-sm p-4">
            <QuestionGate question={question} onCorrect={onCorrect} mustGetCorrect title={`PRE-PITCH BRIEFING — ROUND ${round}`} />
          </div>
        )}
        {phase === "windup" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-display text-3xl text-primary glow-text animate-pulse">&gt; WIND-UP...</div>
          </div>
        )}
      </div>

      {/* Result actions */}
      <div className="mt-3 flex items-center justify-between text-xs">
        <div className="text-muted-foreground">
          {hit === "perfect" && <span className="text-success">+{Math.round(100 * (1 + Math.floor(combo/3)*0.5))} (combo bonus)</span>}
          {hit === "good" && <span className="text-primary">+{Math.round(50 * (1 + Math.floor(combo/3)*0.5))}</span>}
          {hit === "weak" && <span>+15</span>}
          {hit === "miss" && <span className="text-destructive">missed — combo reset</span>}
        </div>
        {phase === "result" && (
          <button onClick={next} className="border border-primary px-3 py-1 text-primary hover:glow-border">
            ▸ NEXT BALL
          </button>
        )}
      </div>
    </div>
  );
}
