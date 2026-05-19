import type { TopicContent } from "./types";

export const intellectualProperty: TopicContent = {
  slug: "intellectual-property",
  hero:
    "Intellectual property (IP) is creative or intellectual work that the law protects as a form of ownership. This module covers copyright, licences, open source, plagiarism and DRM.",
  tags: ["COPYRIGHT", "LICENCES", "OPEN SOURCE", "PLAGIARISM", "DRM"],
  sections: [
    {
      id: "copyright",
      code: "01",
      title: "Copyright",
      explanation:
        "Copyright protects original works — text, music, art, software — automatically from the moment they are created. It gives the creator exclusive rights over how their work is used.",
      bullets: [
        "Applies to text, art, music, video, software, and more.",
        "Automatic — no registration needed.",
        "Creator controls copying, distribution and adaptation.",
        "Lasts decades (usually creator's lifetime + 70 years).",
        "Using copyrighted work without permission is infringement.",
      ],
      paragraphs: [
        "Copying a song into your own video without permission is infringement, even if you don't make money. Free-use exceptions exist (criticism, education) but they're narrow.",
        "Infringement can lead to takedowns, fines and lawsuits. Platforms like YouTube use automatic detection to enforce it at scale.",
      ],
      quiz: [
        { q: "Copyright protection begins when…", options: ["You register it", "The work is created", "You pay a fee", "It is published in a book"], answer: 1, why: "Automatic on creation." },
        { q: "Which is NOT typically covered by copyright?", options: ["Music", "Software", "Photos", "Ideas in your head"], answer: 3, why: "Ideas themselves aren't protected — expressions are." },
        { q: "Copyright lasts (usually)…", options: ["1 year", "10 years", "Lifetime + 70 years", "Forever"], answer: 2, why: "Typical duration in many countries." },
        { q: "Using a song in your video without permission is…", options: ["Always legal", "Often infringement", "Always free use", "Encryption"], answer: 1, why: "Infringement unless permitted." },
        { q: "True/False: copyright is automatic.", options: ["True", "False"], answer: 0, why: "No registration required." },
        { q: "Which exception may apply to copyright?", options: ["Criticism or education (limited)", "Anything personal", "All school projects", "All TikToks"], answer: 0, why: "Narrow exceptions exist." },
        { q: "Copyright gives the creator the right to…", options: ["Control copying and distribution", "Tax the public", "Fly drones", "Make laws"], answer: 0, why: "Exclusive rights over use." },
        { q: "Which is an example of copyright infringement?", options: ["Uploading someone else's film without permission", "Quoting one short line with credit (often allowed)", "Watching a film you bought", "Writing your own song"], answer: 0, why: "Re-uploading is infringement." },
        { q: "Platforms enforce copyright via…", options: ["Automatic detection systems", "Manual fans only", "Random scans of streets", "Walkie-talkies"], answer: 0, why: "E.g. Content ID." },
        { q: "Infringement can lead to…", options: ["Takedowns, fines, lawsuits", "Free credits", "Better Wi-Fi", "Faster phones"], answer: 0, why: "Real legal penalties." },
      ],
    },
    {
      id: "licences",
      code: "02",
      title: "Software Licences",
      explanation:
        "Software licences set the legal terms under which software can be used, copied or modified. Different licences give very different rights.",
      bullets: [
        "Proprietary licence — use only, no changes allowed.",
        "Freeware — free to use but source code is hidden.",
        "Shareware — free trial, pay to keep using.",
        "Open-source — source code available, often free to modify.",
        "Permissive vs copyleft licences impose different obligations.",
      ],
      paragraphs: [
        "Reading the licence matters. 'Free to use' doesn't mean 'free to copy and resell'. Many proprietary licences restrict how many devices you can install on.",
        "Copyleft licences (like GPL) require you to share your modifications under the same licence. Permissive licences (like MIT) let you do almost anything, including using the code in proprietary products.",
      ],
      quiz: [
        { q: "Proprietary licences typically…", options: ["Hide source code and restrict use", "Are always free", "Force you to share changes", "Require government approval"], answer: 0, why: "Closed, restrictive." },
        { q: "Freeware is…", options: ["Free to use, source hidden", "Open source", "Always shareware", "Always malware"], answer: 0, why: "Definition." },
        { q: "Shareware is…", options: ["Free trial, pay to continue", "Permanent freeware", "Open source", "Adware"], answer: 0, why: "Trial-based monetisation." },
        { q: "Open source means…", options: ["Source code is available", "Always free of charge", "Always copyleft", "Always proprietary"], answer: 0, why: "Source is open; other terms vary." },
        { q: "GPL is an example of…", options: ["Copyleft licence", "Permissive licence", "Freeware-only", "Proprietary"], answer: 0, why: "Share-alike requirement." },
        { q: "MIT is an example of…", options: ["Permissive licence", "Copyleft licence", "Closed source", "Shareware"], answer: 0, why: "Almost no obligations." },
        { q: "True/False: 'free to use' always means 'free to resell'.", options: ["True", "False"], answer: 1, why: "Licences vary widely." },
        { q: "Why read the licence?", options: ["To know exactly what you can and can't do", "It's required by Wi-Fi", "For fun", "To get free apps"], answer: 0, why: "Legal obligations vary." },
        { q: "Which is NOT a licence type listed?", options: ["Proprietary", "Freeware", "Shareware", "Sportsware"], answer: 3, why: "Not a real licence." },
        { q: "Modifying code under a copyleft licence usually requires…", options: ["Sharing modifications under the same licence", "Hiding the source forever", "Paying royalties", "Nothing"], answer: 0, why: "Copyleft principle." },
      ],
    },
    {
      id: "plagiarism",
      code: "03",
      title: "Plagiarism & DRM",
      explanation:
        "Plagiarism is presenting someone else's work as your own. DRM (Digital Rights Management) is a technical system used to prevent unauthorised copying and use.",
      bullets: [
        "Plagiarism = copying without credit, even with paraphrasing.",
        "Consequences include failed work, expulsion, lost jobs.",
        "DRM controls how digital media can be played, copied or shared.",
        "Examples: streaming services, copy-protected games, e-books.",
      ],
      paragraphs: [
        "Citing sources is the cure for plagiarism. Even AI-generated content needs careful sourcing to avoid passing off others' work as your own.",
        "DRM is controversial — it protects creators but can also stop legitimate uses, like making a backup of media you own, or playing it on different devices.",
      ],
      quiz: [
        { q: "Plagiarism is…", options: ["Presenting others' work as your own", "Legitimate research", "Paraphrasing with citation", "Creative writing"], answer: 0, why: "Uncredited use of others' work." },
        { q: "A way to avoid plagiarism…", options: ["Cite sources clearly", "Copy faster", "Use synonyms only", "Delete the source"], answer: 0, why: "Proper attribution is the fix." },
        { q: "DRM stands for…", options: ["Digital Rights Management", "Data Removal Method", "Disc Repair Mode", "Dynamic Random Memory"], answer: 0, why: "Standard expansion." },
        { q: "DRM is used by…", options: ["Streaming services, games, e-books", "Postal workers", "Only one website", "Cookies only"], answer: 0, why: "Common across digital media." },
        { q: "A DRM downside is…", options: ["Blocks legitimate uses such as backups", "Faster Wi-Fi", "Cheaper devices", "Free electricity"], answer: 0, why: "Restricts even legal uses." },
        { q: "True/False: paraphrasing without citation can still be plagiarism.", options: ["True", "False"], answer: 0, why: "Source still needed." },
        { q: "Consequence of plagiarism at school?", options: ["Marks lost, possible expulsion", "Free WiFi", "A medal", "Promotion"], answer: 0, why: "Serious academic penalty." },
        { q: "DRM tries to prevent…", options: ["Unauthorised copying and sharing", "Server downtime", "Battery drain", "Software bugs"], answer: 0, why: "Anti-piracy purpose." },
        { q: "Which is NOT an example of DRM?", options: ["A safe-cracker", "Streaming licence checks", "Copy-protected games", "E-book restrictions"], answer: 0, why: "Self-evident." },
        { q: "Ethical concern with DRM…", options: ["Restricts user freedom over content they paid for", "Improves battery", "Makes phones faster", "Reduces e-waste"], answer: 0, why: "Limits legitimate user rights." },
      ],
    },
  ],
  flashcards: [
    { category: "COPYRIGHT", front: "Copyright", back: "Automatic legal protection for original work; gives creator exclusive rights for ~lifetime+70 years." },
    { category: "COPYRIGHT", front: "Infringement", back: "Using copyrighted work without permission — can lead to takedowns, fines, lawsuits." },
    { category: "LICENCES", front: "Licence types", back: "Proprietary, freeware, shareware, open source (permissive vs copyleft)." },
    { category: "LICENCES", front: "Copyleft vs permissive", back: "Copyleft (GPL) forces sharing of changes; permissive (MIT) imposes almost no restrictions." },
    { category: "PLAGIARISM", front: "Plagiarism", back: "Presenting someone else's work as your own; avoided by clear citation." },
    { category: "DRM", front: "DRM", back: "Digital Rights Management — technical controls over how digital media can be played, copied or shared." },
  ],
};
