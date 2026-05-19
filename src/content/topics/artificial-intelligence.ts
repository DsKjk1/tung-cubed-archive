import type { TopicContent } from "./types";

export const artificialIntelligence: TopicContent = {
  slug: "artificial-intelligence",
  hero:
    "AI is software that can perform tasks normally needing human intelligence. This module covers machine learning, narrow AI, robots, algorithmic bias and the difficult question of who is responsible when AI gets things wrong.",
  tags: ["AI", "ML", "NARROW", "ROBOTS", "BIAS", "RESPONSIBILITY"],
  sections: [
    {
      id: "ml",
      code: "01",
      title: "Machine Learning",
      explanation:
        "Machine learning is a branch of AI where systems learn patterns from data rather than being explicitly programmed for every rule.",
      bullets: [
        "Analyses real-time and historical data.",
        "Detects patterns automatically.",
        "Improves over time as it sees more data.",
        "Does not need a hand-written rule for every case.",
      ],
      paragraphs: [
        "A spam filter trained on millions of emails learns the patterns of spam by itself. A programmer doesn't need to write 'if email contains the word Viagra then mark as spam' — the model figures it out.",
        "Modern ML systems can adapt as new examples arrive, meaning they keep improving while in use. This is powerful but also makes their behaviour harder to predict.",
      ],
      quiz: [
        { q: "Machine learning is best described as…", options: ["Hard-coded rules only", "Software that learns patterns from data", "Random outputs", "A type of hardware"], answer: 1, why: "Core ML definition." },
        { q: "ML systems improve by…", options: ["Being unplugged", "Seeing more data", "Resetting daily", "Slowing down"], answer: 1, why: "More data → better patterns." },
        { q: "ML requires…", options: ["A rule for every possible input", "Data to learn from", "No data at all", "Only one example"], answer: 1, why: "Training data is essential." },
        { q: "An example of ML in everyday use…", options: ["Spam filtering", "Calculator addition", "Plain HTML rendering", "USB drivers"], answer: 0, why: "Common ML use case." },
        { q: "True/False: ML always behaves predictably.", options: ["True", "False"], answer: 1, why: "Behaviour can drift with new data." },
        { q: "Real-time data analysis means…", options: ["Analysing yesterday only", "Processing data as it arrives", "Ignoring all data", "Offline only"], answer: 1, why: "Streaming / live processing." },
        { q: "ML is a subset of…", options: ["AI", "HTML", "DPA", "WEEE"], answer: 0, why: "ML sits under AI." },
        { q: "ML differs from traditional programming because…", options: ["Rules are learned, not coded", "It uses no logic", "It needs no hardware", "It avoids electricity"], answer: 0, why: "Rules emerge from data." },
        { q: "Which is NOT a typical ML strength?", options: ["Pattern detection", "Adapting to new data", "Producing zero bias", "Improving over time"], answer: 2, why: "Bias is a known weakness." },
        { q: "A common ML risk is…", options: ["Unexpected behaviour from biased data", "Better Wi-Fi", "Cleaner hardware", "Free electricity"], answer: 0, why: "Bias in data produces biased models." },
      ],
    },
    {
      id: "narrow",
      code: "02",
      title: "Narrow AI",
      explanation:
        "Narrow AI is designed to do one specific task very well. It does not have general human-like intelligence and fails outside its trained problem.",
      bullets: [
        "Spam filters, social media monitoring, facial recognition.",
        "Fingerprint recognition, voice assistants, recommendation systems.",
        "Self-driving cars, lethal autonomous weapons.",
        "Performs one task well — fails outside that task.",
      ],
      paragraphs: [
        "A facial recognition system can identify faces but can't translate languages. A chess engine can crush grandmasters but can't drive a car. Narrow AI is exactly that — narrow.",
        "Despite the limitation, narrow AI is what powers nearly every 'AI' product you see today. True general AI (matching human flexibility) does not yet exist.",
      ],
      quiz: [
        { q: "Narrow AI is…", options: ["General human-like intelligence", "AI for one specific task", "A type of CPU", "A virus"], answer: 1, why: "Single-task specialisation." },
        { q: "Outside its trained task, narrow AI usually…", options: ["Performs perfectly", "Fails or behaves oddly", "Becomes general AI", "Repairs itself"], answer: 1, why: "Brittle beyond its domain." },
        { q: "Which is NOT narrow AI?", options: ["Spam filter", "Facial recognition", "Self-driving car", "A human cleaner"], answer: 3, why: "Humans aren't AI." },
        { q: "Voice assistants are an example of…", options: ["General AI", "Narrow AI", "WEEE", "DPA"], answer: 1, why: "Specialised to voice tasks." },
        { q: "Recommendation systems are used by…", options: ["Streaming platforms and shops", "Postal workers", "The weather only", "Cars only"], answer: 0, why: "Drives content and product recs." },
        { q: "Self-driving cars rely on…", options: ["Only GPS", "Multiple narrow-AI systems (vision, control, planning)", "Magic", "Only Wi-Fi"], answer: 1, why: "Stack of specialised models." },
        { q: "Lethal autonomous weapons raise concerns about…", options: ["Battery life", "Ethics and accountability", "Wi-Fi range", "Cricket scores"], answer: 1, why: "Major ethical issues." },
        { q: "Fingerprint recognition is…", options: ["Narrow AI", "General AI", "Spyware", "Adware"], answer: 0, why: "Single specialised task." },
        { q: "True/False: today's products are mostly narrow AI.", options: ["True", "False"], answer: 0, why: "General AI doesn't yet exist." },
        { q: "Best definition of narrow AI…", options: ["Excellent at one designed task, brittle elsewhere", "Better than any human at everything", "Unable to learn", "A virus"], answer: 0, why: "Specialised but brittle." },
      ],
    },
    {
      id: "bias",
      code: "03",
      title: "Algorithmic Bias",
      explanation:
        "AI systems can make unfair, discriminatory decisions because of biases in their data, algorithms or developers.",
      bullets: [
        "Biased training data → biased predictions.",
        "Flawed algorithms can amplify existing inequalities.",
        "Developer prejudice can creep into design choices.",
        "Result: systems that discriminate unfairly.",
      ],
      paragraphs: [
        "If a hiring AI is trained mostly on past male hires, it may down-rank female candidates. The model doesn't 'choose' to discriminate — it reflects the bias in its data.",
        "Algorithmic bias is hard to spot because AI decisions can feel 'objective'. The numbers look neutral but the outcome isn't.",
      ],
      quiz: [
        { q: "Algorithmic bias comes from…", options: ["Biased data, flawed algorithms, developer prejudice", "Only the hardware", "Only the users", "Random noise"], answer: 0, why: "Three classic sources." },
        { q: "Why is AI bias dangerous?", options: ["It feels objective but isn't", "It is loud", "It is always obvious", "It only affects one person"], answer: 0, why: "Hidden bias scales widely." },
        { q: "A hiring AI trained mainly on past male hires may…", options: ["Become neutral magically", "Discriminate against female candidates", "Refuse all hires", "Hire only based on weather"], answer: 1, why: "Reflects skewed training data." },
        { q: "True/False: algorithms can be racist or sexist if their data is.", options: ["True", "False"], answer: 0, why: "Bias mirrors training data." },
        { q: "Developer prejudice can appear as…", options: ["Design choices that exclude groups", "Better Wi-Fi", "Faster GPUs", "Cleaner UIs"], answer: 0, why: "Choices encode values." },
        { q: "Bias is hardest to spot when…", options: ["Outputs look neutral", "Outputs are obviously wrong", "Inputs are random", "Hardware is new"], answer: 0, why: "Disguised by apparent objectivity." },
        { q: "Which is NOT a cause of algorithmic bias?", options: ["Biased data", "Flawed algorithm", "Developer prejudice", "RAM speed"], answer: 3, why: "Hardware speed doesn't cause bias." },
        { q: "Mitigating bias involves…", options: ["Better data, auditing, diverse teams", "Hiding outputs", "More data of the same kind", "Ignoring users"], answer: 0, why: "Quality, oversight, diversity." },
        { q: "Discrimination from AI is concerning because…", options: ["It can affect jobs, loans, justice", "It is funny", "It speeds up Wi-Fi", "Nobody cares"], answer: 0, why: "Real-world impact." },
        { q: "Bias can be amplified when…", options: ["Models reuse their own outputs as training data", "Models are turned off", "Datasets are smaller", "Networks are slower"], answer: 0, why: "Feedback loops worsen bias." },
      ],
    },
    {
      id: "responsibility",
      code: "04",
      title: "Responsibility & Black-Box Systems",
      explanation:
        "When AI makes a harmful decision, who is to blame? The creator, the data supplier, the operator, the user? Accountability is one of the hardest AI problems.",
      bullets: [
        "Creators are responsible for design choices.",
        "Training-data suppliers are responsible for their data's quality.",
        "Users are responsible for how they use AI outputs.",
        "Black-box systems make explanations very difficult.",
      ],
      paragraphs: [
        "Many modern AI systems are 'black boxes' — even the engineers who built them can't fully explain why they produce a specific output. This makes accountability extremely hard.",
        "Self-driving cars sharpen this question: if the car causes an accident, is the manufacturer, the software supplier or the driver liable?",
      ],
      quiz: [
        { q: "A 'black-box' AI is one where…", options: ["Outputs can't easily be explained", "Hardware is dark", "It runs without electricity", "It only works at night"], answer: 0, why: "Internal logic isn't transparent." },
        { q: "Responsibility for AI may fall on…", options: ["Creators, data suppliers, users", "Only the user", "Only the AI", "Nobody"], answer: 0, why: "Multiple parties share responsibility." },
        { q: "Accountability is hard because…", options: ["Black-box systems lack explainability", "AI is always wrong", "Hardware is too cheap", "Users never use AI"], answer: 0, why: "Opaque decision-making." },
        { q: "True/False: AI itself can be morally responsible.", options: ["True", "False"], answer: 1, why: "AI is not a moral agent." },
        { q: "Self-driving car accident liability could include…", options: ["Manufacturer, software supplier, driver", "Only the pedestrian", "Only the road", "Only the weather"], answer: 0, why: "Multiple potential responsibilities." },
        { q: "Training-data suppliers are accountable for…", options: ["Data quality and bias", "Server uptime", "Marketing", "Battery life"], answer: 0, why: "Bad data → bad model." },
        { q: "Users are accountable when they…", options: ["Misuse AI outputs", "Read the manual", "Turn the device off", "Ignore the AI completely"], answer: 0, why: "Misuse is on the user." },
        { q: "Why does explainability matter?", options: ["So we can challenge unfair decisions", "To brighten screens", "For longer battery", "For louder speakers"], answer: 0, why: "Justice and trust depend on it." },
        { q: "Which is NOT a common responsibility holder?", options: ["Creator", "Data supplier", "User", "The website font"], answer: 3, why: "Self-evident." },
        { q: "Best response to black-box concerns…", options: ["Demand explainable AI and audits", "Use it blindly", "Ban all computers", "Use only paper"], answer: 0, why: "Explainability + audit." },
      ],
    },
  ],
  flashcards: [
    { category: "ML", front: "Machine learning", back: "AI systems that learn patterns from data instead of using hard-coded rules." },
    { category: "NARROW", front: "Narrow AI", back: "AI designed for one specific task; fails outside that task." },
    { category: "NARROW", front: "Examples of narrow AI", back: "Spam filters, facial recognition, fingerprint recognition, recommendation systems, voice assistants, self-driving cars, autonomous weapons." },
    { category: "BIAS", front: "Three causes of algorithmic bias", back: "Biased training data, flawed algorithms, developer prejudice." },
    { category: "BIAS", front: "Why bias is dangerous", back: "AI decisions feel objective but reflect bias in data, scaling unfair outcomes widely." },
    { category: "RESPONSIBILITY", front: "Who might be responsible for AI harm?", back: "Creators, training-data suppliers, users — and the difficulty of 'black-box' explainability." },
    { category: "RESPONSIBILITY", front: "Black-box system", back: "AI whose internal decision-making cannot easily be explained." },
  ],
};
