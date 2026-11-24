/**
 * ALL CONTENT LIVES HERE. Edit this file to customise the site.
 * Profile photo: replace /public/images/profile.jpg (keep the same name, or change `photo` below).
 */
export const site = {
  name: "Eslam Hesuien",
  title: "Cybersecurity Enthusiast | Web Penetration Tester | Bug Bounty Hunter",
  location: "Egypt",
  // Shown in Contact + footer.
  email: "eslamhesuien986173@gmail.com",
  emailIsPlaceholder: false,
  // Set your real site URL after deploying (used for SEO / social cards). Also settable via NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.vercel.app",
  photo: "/images/profile.jpg",
  photoAlt: "Portrait of Eslam Hesuien",
  intro:
    "I find the flaws in web applications before attackers do. Computer science student, CTF competitor and bug bounty hunter focused on web and API security.",
  links: {
    linkedin: "https://www.linkedin.com/in/eslam-hesuien-mr-ehb-129092339/",
    bugcrowd: "https://bugcrowd.com/h/eslamhesuien77a2ca",
    yeswehack: "https://yeswehack.com/user/profile/eslam125",
    github: "https://github.com/eslam239857",
  },
};

export const about = [
  "I am a cybersecurity student drawn to the way web applications break. I enjoy tracing a request from the browser to the database and asking where the trust assumptions fail.",
  "My focus is web application security, ethical hacking and vulnerability research: reconnaissance, API testing, access control and injection flaws, using tools such as Burp Suite and Nmap, and automating the boring parts with Python and Bash.",
  "I learn by doing: capture-the-flag competitions, practical labs, small security tools and bug bounty programs, always within authorised scope and with responsible disclosure.",
];

export const stats = [
  { value: "36th", label: "CSAW CTF 2026, worldwide" },
  { value: "2nd", label: "IEEE Genesis 1.0 CTF, Egyptian universities" },
  { value: "4", label: "security and dev projects built" },
];

export const skillGroups = [
  {
    title: "Offensive security",
    icon: "shield",
    items: [
      "Web Application Penetration Testing",
      "OWASP Top 10",
      "SQL Injection",
      "Cross-Site Scripting (XSS)",
      "Broken Access Control",
      "Server-Side Template Injection (SSTI)",
      "API Security Testing",
      "Web Reconnaissance",
    ],
  },
  { title: "Tools", icon: "wrench", items: ["Burp Suite", "Nmap", "Subfinder", "httpx"] },
  { title: "Systems & networking", icon: "network", items: ["Linux", "Windows", "Networking", "TCP/IP", "Cisco Packet Tracer"] },
  { title: "Scripting & code", icon: "code", items: ["Python", "Bash", "JavaScript", "C++", "Java (basic)"] },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  icon: "scan" | "radar" | "hotel" | "phone" | "flask";
  github: string; // TODO: add repo URL
  demo: string; // optional live URL
  sample?: boolean;
};

export const projects: Project[] = [
  {
    title: "Subdomain Monitor & Discord Alert",
    description:
      "Bash reconnaissance automation that watches authorised domains for new subdomains. Subfinder enumerates, httpx classifies Live / Not Live, and it compares against history so you only get alerted on new assets, in real time via Discord.",
    tech: ["Bash", "Subfinder", "httpx", "Discord"],
    icon: "radar",
    github: "",
    demo: "",
  },
  {
    title: "Web Security Header Scanner",
    description:
      "Python tool that sends HTTP GET requests and flags missing security headers: HSTS, CSP, X-Frame-Options, X-Content-Type-Options and Referrer-Policy.",
    tech: ["Python", "Requests", "HTTP"],
    icon: "scan",
    github: "",
    demo: "",
  },
  {
    title: "Hotel Reservation System",
    description:
      "Team college project for managing hotel operations and reservations, with core booking features and SQLite for local storage. Interfaces in XML, logic in Java.",
    tech: ["Java", "XML", "SQLite"],
    icon: "hotel",
    github: "",
    demo: "",
  },
  {
    title: "Simple Phone Directory",
    description:
      "Java Swing desktop contact manager with full CRUD, built on OOP principles (encapsulation, inheritance, abstraction) with an SQL database behind it.",
    tech: ["Java", "Swing", "OOP", "SQL"],
    icon: "phone",
    github: "",
    demo: "",
  },
  {
    title: "Vulnerability Write-up (Sample)",
    description:
      "SAMPLE PLACEHOLDER. Replace with a real write-up or research project: the target class, the flaw, impact and the fix. Edit it in src/data/site.ts.",
    tech: ["Burp Suite", "Your stack"],
    icon: "flask",
    github: "",
    demo: "",
    sample: true,
  },
];

export const achievements = [
  {
    title: "CSAW CTF 2026",
    team: "X-OR Hunters",
    result: "36th worldwide · 2nd in Egypt · 8th in Africa",
  },
  {
    title: "Kaspersky CTF 2026",
    team: "X-OR Hunters",
    result: "7th in Egypt · 66th in Africa",
  },
  {
    title: "IEEE Genesis 1.0 CTF",
    team: "University teams",
    result: "2nd place among Egyptian university teams",
  },
  { title: "ICPC", team: "Competitive programming", result: "Participated in problem-solving activities" },
];

export const timeline = [
  {
    when: "Aug 2023 - May 2027 (expected)",
    title: "B.Sc. Computer Science, Thebes Academy",
    text: "Cairo, Maadi. Data structures and algorithms (C++), OOP (Java), computer architecture, system analysis and design, linear algebra, number theory.",
  },
  {
    when: "Ongoing",
    title: "Practical security training",
    text: "eJPT v2 (Udemy), TryHackMe Pre Security, eWPTX, CCNA, Bash and Python scripting, C++ problem solving. These are courses and training, not issued certifications.",
  },
  {
    when: "2026",
    title: "CTF competitions",
    text: "CSAW, Kaspersky and IEEE Genesis with the X-OR Hunters team and others.",
  },
  {
    when: "Ongoing",
    title: "Bug bounty",
    text: "Hunting on Bugcrowd and YesWeHack within program scope. Add your own milestones here when you have them.",
  },
  {
    when: "Next",
    title: "Goal: a web application security role",
    text: "Seeking a cybersecurity internship and growing into professional penetration testing and application security. Edit this goal any time.",
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Bounty" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];
