import type { TopicContent } from "./types";

export const legislation: TopicContent = {
  slug: "legislation",
  hero:
    "Three major pieces of UK legislation set the rules of the digital world: the Data Protection Act 2018, the Computer Misuse Act 1990, and the Privacy & Electronic Communications Regulations 2003 (which cover cookies).",
  tags: ["DPA 2018", "CMA 1990", "COOKIES", "PRINCIPLES", "RIGHTS", "OFFENCES"],
  sections: [
    {
      id: "dpa",
      code: "01",
      title: "Data Protection Act 2018",
      explanation:
        "The DPA 2018 governs how organisations must handle personal data. It is based on seven principles and gives data subjects (you) a clear set of rights.",
      bullets: [
        "Lawfulness, fairness and transparency.",
        "Purpose limitation — only for the stated reason.",
        "Data minimisation — collect only what is needed.",
        "Accuracy — keep data correct and up to date.",
        "Storage limitation — don't keep it longer than necessary.",
        "Security — protect against loss or unauthorised access.",
        "Accountability — organisations must prove compliance.",
      ],
      paragraphs: [
        "Data subjects have rights including: to be informed, to access, to correct, to erase, to object to processing, to withdraw consent, to restrict processing, to data portability (reuse) and to complain to the Information Commissioner.",
        "Breaches of the DPA can lead to large fines and reputational damage. Organisations must show how they comply, not just claim it.",
      ],
      quiz: [
        { q: "How many DPA principles are there?", options: ["3", "5", "7", "12"], answer: 2, why: "Seven principles." },
        { q: "Which principle says 'don't keep data longer than needed'?", options: ["Accuracy", "Storage limitation", "Lawfulness", "Accountability"], answer: 1, why: "Storage limitation principle." },
        { q: "Which is NOT a DPA principle?", options: ["Data minimisation", "Purpose limitation", "Maximum collection", "Security"], answer: 2, why: "Opposite of data minimisation." },
        { q: "A data subject has the right to…", options: ["Be informed and access their data", "Hack the controller", "Erase other people's data", "Demand free Wi-Fi"], answer: 0, why: "Both are listed rights." },
        { q: "Accountability means organisations must…", options: ["Prove their compliance", "Hide their records", "Outsource everything", "Refuse audits"], answer: 0, why: "They must demonstrate compliance." },
        { q: "Who can a complaint be made to?", options: ["The Information Commissioner", "Local football club", "Your ISP only", "The Highway Agency"], answer: 0, why: "ICO handles DPA complaints." },
        { q: "Right to portability means…", options: ["Move your data to another provider", "Print 100 copies", "Sell the data yourself", "Hide your name"], answer: 0, why: "Reuse / transfer your data elsewhere." },
        { q: "Right to erase is sometimes called…", options: ["Right to be forgotten", "Right to spam", "Right to encrypt", "Right to download"], answer: 0, why: "Common informal name." },
        { q: "Accuracy principle requires data to be…", options: ["Random", "Correct and up to date", "Locked forever", "Public"], answer: 1, why: "Correct + current." },
        { q: "True/False: you can object to certain types of processing.", options: ["True", "False"], answer: 0, why: "Right to object is included." },
      ],
    },
    {
      id: "cma",
      code: "02",
      title: "Computer Misuse Act 1990",
      explanation:
        "The CMA defines three main computer-related offences. It is the law that makes unauthorised access and damage to computer systems a crime in the UK.",
      bullets: [
        "Offence 1: Unauthorised access to a computer system.",
        "Offence 2: Unauthorised access with intent to commit a further crime.",
        "Offence 3: Unauthorised access to impair or damage systems (e.g. malware).",
        "Examples: logging into someone else's account, stealing card details, planting viruses.",
      ],
      paragraphs: [
        "Even logging into a friend's account 'as a joke' without permission is technically an offence under the CMA. Intent is not required for the first offence — access alone is enough.",
        "Offence 2 covers using unauthorised access to do something worse, such as transferring money or stealing identities. Offence 3 covers actively damaging systems, like deploying ransomware.",
      ],
      quiz: [
        { q: "How many main CMA offences are there?", options: ["2", "3", "5", "10"], answer: 1, why: "Three offences." },
        { q: "Offence 1 is…", options: ["Unauthorised access", "Theft", "Speeding", "Spam"], answer: 0, why: "Basic offence." },
        { q: "Planting malware falls under…", options: ["Offence 1", "Offence 2", "Offence 3", "None"], answer: 2, why: "Impair/damage systems." },
        { q: "Logging into another user's account is…", options: ["Allowed", "Unauthorised access (Offence 1)", "Only illegal at night", "Only illegal with money involved"], answer: 1, why: "Even without intent, it's unauthorised." },
        { q: "Stealing card details after gaining access falls under…", options: ["Offence 2", "Offence 1 only", "Offence 3 only", "Not covered"], answer: 0, why: "Access with intent to commit further crime." },
        { q: "True/False: intent is needed for offence 1.", options: ["True", "False"], answer: 1, why: "Access alone is enough." },
        { q: "Ransomware deployment is typically…", options: ["Offence 3", "Legal", "Offence 1 only", "Not covered"], answer: 0, why: "Damages/impairs systems." },
        { q: "The CMA is from…", options: ["1990", "1998", "2018", "2010"], answer: 0, why: "Year of the Act." },
        { q: "Which is NOT a CMA offence?", options: ["Unauthorised access", "Theft of physical property", "Access with intent for further crime", "Impair/damage systems"], answer: 1, why: "Pure physical theft uses other laws." },
        { q: "CMA mainly protects…", options: ["Computer systems and their data integrity", "Cars", "Books only", "Postal mail"], answer: 0, why: "Digital systems are its scope." },
      ],
    },
    {
      id: "cookies",
      code: "03",
      title: "Cookies & PECR 2003",
      explanation:
        "Cookies are small text files stored on a device by websites to recognise users and store preferences. Their use is regulated by the Privacy and Electronic Communications Regulations 2003.",
      bullets: [
        "Cookies = small text files stored on your device by websites.",
        "They recognise returning users and store preferences.",
        "PECR 2003 governs their use.",
        "Websites must inform users about cookies.",
        "Consent is required before non-essential cookies are set.",
        "Users may opt out of cookies.",
      ],
      paragraphs: [
        "There are essential cookies (login session, shopping cart) and non-essential cookies (analytics, advertising). PECR requires explicit consent for non-essential ones.",
        "This is why every website you visit shows a cookie banner. The banner is the legal mechanism for informing and obtaining consent.",
      ],
      quiz: [
        { q: "What is a cookie?", options: ["A virus", "A small text file stored by a website", "A browser plugin", "An OS"], answer: 1, why: "Definition." },
        { q: "Cookies are regulated in the UK by…", options: ["CMA 1990", "PECR 2003", "DPA 2018 only", "WEEE"], answer: 1, why: "Privacy and Electronic Communications Regulations." },
        { q: "Before setting non-essential cookies, websites need…", options: ["Permission from Google", "User consent", "Nothing", "A cookie license"], answer: 1, why: "PECR requires consent." },
        { q: "Cookies can store…", options: ["Preferences and session info", "Your DNA", "Cake recipes only", "Bluetooth signals"], answer: 0, why: "Preferences and user state." },
        { q: "Essential cookies include…", options: ["Login session, shopping cart", "Advertising trackers", "Spyware", "Adware only"], answer: 0, why: "Required for the site to function." },
        { q: "Users can…", options: ["Opt out of non-essential cookies", "Never block cookies", "Use only by phone", "Only delete on Tuesday"], answer: 0, why: "Opt-out is allowed." },
        { q: "Why do you see cookie banners everywhere?", options: ["Legal requirement to inform and request consent", "Adverts", "Free cookies", "Decoration"], answer: 0, why: "Compliance mechanism." },
        { q: "True/False: cookies can identify returning users.", options: ["True", "False"], answer: 0, why: "Yes — that's a core purpose." },
        { q: "Cookies are stored…", options: ["On the user's device", "On the server only", "On the Moon", "Inside the keyboard"], answer: 0, why: "Client-side." },
        { q: "Which is NOT typically a cookie purpose?", options: ["Remembering preferences", "Tracking analytics", "Booting the OS", "Targeted advertising"], answer: 2, why: "Cookies don't boot operating systems." },
      ],
    },
  ],
  flashcards: [
    { category: "DPA", front: "Seven DPA principles", back: "Lawfulness/fairness/transparency, purpose limitation, data minimisation, accuracy, storage limitation, security, accountability." },
    { category: "DPA", front: "Data subject rights (key list)", back: "Be informed, access, correct, erase, object, withdraw consent, restrict, portability (reuse), complain to the ICO." },
    { category: "CMA", front: "Three CMA offences", back: "Unauthorised access; access with intent for further crime; access to impair/damage systems." },
    { category: "CMA", front: "Example for each CMA offence", back: "Logging into another's account; stealing card details after access; planting malware." },
    { category: "COOKIES", front: "What is a cookie?", back: "Small text file stored by a website on the user's device, used to recognise users and store preferences." },
    { category: "COOKIES", front: "Cookie law (UK)", back: "Privacy and Electronic Communications Regulations 2003 — requires user info, consent for non-essential cookies, and opt-out." },
  ],
};
