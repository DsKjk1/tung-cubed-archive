export interface Question {
  q: string;
  options: string[];
  answer: number; // index
  why: string;
  topic: string;
}

export const questions: Question[] = [
  // Environmental
  { topic: "env", q: "Which is the BIGGEST energy user in a data center?", options: ["Keyboards", "Servers + cooling", "WiFi router", "Coffee machine"], answer: 1, why: "Servers run 24/7 and need constant cooling — together they dominate." },
  { topic: "env", q: "What does 'planned obsolescence' mean?", options: ["Devices designed to last forever", "Devices designed to fail or feel slow", "Free software updates", "A type of recycling"], answer: 1, why: "It's the practice of designing devices to become outdated quickly." },
  { topic: "env", q: "Which material is NOT typically recovered from e-waste?", options: ["Gold", "Copper", "Banana peels", "Aluminium"], answer: 2, why: "E-waste recycling recovers metals — not organic matter." },
  { topic: "env", q: "What is 'phantom power'?", options: ["Wireless electricity", "Energy drawn by devices when 'off'", "A type of battery", "Solar power at night"], answer: 1, why: "Devices and chargers still draw power even when not in active use." },
  { topic: "env", q: "Which has a POSITIVE environmental impact?", options: ["Mining cobalt", "Smart grids optimising renewables", "Landfilling phones", "Streaming 4K all day"], answer: 1, why: "Smart grids balance supply and demand to maximise clean energy use." },
  { topic: "env", q: "Why is illegal e-waste dumping dangerous?", options: ["It's loud", "Toxic metals leak into soil & water", "It blocks roads", "It uses too much wifi"], answer: 1, why: "Lead, mercury and cadmium poison ecosystems and groundwater." },
  { topic: "env", q: "Which best reduces a laptop's energy use today?", options: ["Buy a bigger screen", "Lower brightness + sleep mode", "Leave it on overnight", "Run more browser tabs"], answer: 1, why: "Screens are huge power draws; sleep suspends most components." },
  { topic: "env", q: "Rare earth metals are...", options: ["Renewable", "Finite & destructive to mine", "Found in plastic", "Made in factories"], answer: 1, why: "They're finite, and mining them damages habitats heavily." },
  { topic: "env", q: "What does 'e-waste' stand for?", options: ["Easy waste", "Electronic waste", "Energy waste", "Empty waste"], answer: 1, why: "Discarded electronic devices — over 60Mt produced globally each year." },
  { topic: "env", q: "Why do data centers need cooling?", options: ["Servers run hot", "To freeze data", "To save WiFi", "To make ice"], answer: 0, why: "Servers generate huge heat; cooling stops them from melting/throttling." },

  // Personal data
  { topic: "data", q: "Which is personal data?", options: ["Average UK rainfall", "Your home address", "The colour of grass", "A public bus timetable"], answer: 1, why: "Personal data identifies a specific living person." },
  { topic: "data", q: "What is a 'cookie' on the web?", options: ["A snack", "A small file storing user data", "A virus", "A backup"], answer: 1, why: "Cookies are small files websites store to remember you." },
  { topic: "data", q: "Best protection against data theft?", options: ["Reuse one password", "Strong unique passwords + 2FA", "Public WiFi only", "Tell friends your PIN"], answer: 1, why: "Unique passwords plus a second factor stops most attacks." },

  // Legislation
  { topic: "law", q: "The Computer Misuse Act makes which illegal?", options: ["Buying a laptop", "Unauthorised access to systems", "Using passwords", "Watching YouTube"], answer: 1, why: "It criminalises hacking and unauthorised access to computer material." },
  { topic: "law", q: "GDPR mainly protects...", options: ["Companies' profits", "People's personal data", "Software bugs", "Operating systems"], answer: 1, why: "GDPR is the EU framework for personal data protection." },

  // AI
  { topic: "ai", q: "Machine learning is...", options: ["Hand-coded rules", "Computers learning patterns from data", "A new CPU", "A type of monitor"], answer: 1, why: "ML algorithms find patterns in data without explicit rules." },
  { topic: "ai", q: "AI 'bias' usually comes from...", options: ["Faulty wires", "Biased training data", "Cold rooms", "Dim screens"], answer: 1, why: "Models reflect the biases present in their training data." },

  // IP
  { topic: "ip", q: "Copyright protects...", options: ["Hardware shapes", "Original creative works", "Database servers", "Trademarks only"], answer: 1, why: "Copyright covers original works like writing, music, code." },
  { topic: "ip", q: "Open-source software is...", options: ["Always free of cost", "Source code that can be viewed/modified per licence", "Illegal to use", "Only for hackers"], answer: 1, why: "Open-source means licensed source access — terms vary." },

  // Threats
  { topic: "threat", q: "Phishing is...", options: ["A network protocol", "Tricking users into giving info", "A backup method", "Cooling tech"], answer: 1, why: "Phishing uses fake messages to steal credentials or data." },
  { topic: "threat", q: "A brute-force attack tries to...", options: ["Smash the device", "Guess passwords by trying many combos", "Cool the CPU", "Unplug routers"], answer: 1, why: "It systematically tests password combinations." },

  // Protection
  { topic: "prot", q: "A firewall mainly does what?", options: ["Cools servers", "Filters network traffic", "Stores passwords", "Backs up data"], answer: 1, why: "Firewalls control which network traffic is allowed in/out." },
  { topic: "prot", q: "Two-factor authentication adds...", options: ["A second login step", "More cookies", "Bigger storage", "Faster WiFi"], answer: 0, why: "2FA requires a second proof of identity beyond the password." },
];

export function pickQuestion(topic?: string): Question {
  const pool = topic ? questions.filter((q) => q.topic === topic) : questions;
  const list = pool.length ? pool : questions;
  return list[Math.floor(Math.random() * list.length)];
}

export function pickQuestions(n: number, topic?: string): Question[] {
  const pool = [...(topic ? questions.filter((q) => q.topic === topic) : questions)];
  const out: Question[] = [];
  while (out.length < n && pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  // Fallback: repeat from full bank if not enough
  while (out.length < n) out.push(pickQuestion(topic));
  return out;
}
