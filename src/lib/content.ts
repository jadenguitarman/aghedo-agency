import {
  Cable,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Headphones,
  Laptop,
  Mail,
  Monitor,
  Network,
  Settings,
  ShieldCheck,
  UserCheck,
  Wrench,
} from "lucide-react";

export const CONTACT_EMAIL = "norman@aghedo.agency";
export const SITE_URL = "https://aghedo.agency";

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
];

export const services = [
  {
    id: "remote-it-support",
    icon: Headphones,
    title: "Remote IT Support",
    description:
      "Help over a remote session for Windows issues, Office questions, browser problems, error messages, and basic connectivity trouble.",
    examples: [
      "Windows troubleshooting",
      "Microsoft Office support",
      "Remote desktop assistance",
      "Basic software issue diagnosis",
      "Connectivity troubleshooting",
      "Error-message review",
    ],
    cta: "Request Remote Support",
    href: "/services#remote-it-support",
  },
  {
    id: "computer-setup-configuration",
    icon: Laptop,
    title: "Computer Setup & Configuration",
    description:
      "Setup help for new or existing computers, monitors, docks, printers, user profiles, and the apps people need to get work done.",
    examples: [
      "New computer setup",
      "Windows configuration",
      "Software installation",
      "Printer and peripheral setup",
      "Monitor, dock, keyboard, and mouse setup",
      "User profile setup",
    ],
    href: "/services#computer-setup-configuration",
  },
  {
    id: "help-desk-support",
    icon: ClipboardCheck,
    title: "Help Desk Support for Small Teams",
    description:
      "A practical support contact for small teams that need occasional help with user issues, device questions, and everyday troubleshooting.",
    examples: [
      "Recurring support hours",
      "User issue tracking",
      "Basic onboarding and offboarding support",
      "Internal user support",
      "Vendor coordination when needed",
      "Clear issue communication",
    ],
    href: "/services#help-desk-support",
  },
  {
    id: "account-access-support",
    icon: UserCheck,
    title: "Account & Access Support",
    description:
      "Assistance with authorized account setup, access troubleshooting, password issues, standard permissions, and onboarding checklists.",
    examples: [
      "New user setup support",
      "Standard permission requests",
      "Password and access troubleshooting",
      "Account organization",
      "Basic onboarding/offboarding checklists",
    ],
    href: "/services#account-access-support",
  },
  {
    id: "hardware-peripheral-support",
    icon: Monitor,
    title: "Hardware & Peripheral Support",
    description:
      "Support for the small equipment problems that stop work: printers, monitors, docks, cables, keyboards, mice, and replacement setup.",
    examples: [
      "Printer setup",
      "Monitor and dock troubleshooting",
      "Cable and connectivity checks",
      "Device replacement support",
      "Peripheral installation",
      "Basic equipment recommendations",
    ],
    href: "/services#hardware-peripheral-support",
  },
  {
    id: "technology-training",
    icon: GraduationCap,
    title: "Technology Training",
    description:
      "Plain-language walkthroughs and user training for Microsoft Office, email, SharePoint basics, file organization, remote-work tools, and safer everyday technology habits.",
    examples: [
      "Microsoft Office basics",
      "Email best practices",
      "SharePoint basics",
      "File organization",
      "Remote-work tools",
      "Basic computer confidence",
      "Safe technology habits",
    ],
    href: "/services#technology-training",
  },
  {
    id: "documentation-sharepoint-support",
    icon: FileText,
    title: "Documentation & SharePoint Support",
    description:
      "Help creating clear instructions, internal notes, training materials, SharePoint page updates, and simple knowledge-base documentation so teams do not have to keep rediscovering the same fixes.",
    examples: [
      "Step-by-step user guides",
      "SharePoint page organization",
      "Training material cleanup",
      "Knowledge-base articles",
      "Onboarding documentation",
      "Process notes and handoff docs",
    ],
    href: "/services#documentation-sharepoint-support",
  },
  {
    id: "cybersecurity-basics",
    icon: ShieldCheck,
    title: "Cybersecurity Basics",
    description:
      "Basic guidance to help individuals and small teams improve everyday security habits without presenting advanced security or compliance services.",
    examples: [
      "Multi-factor authentication guidance",
      "Password hygiene",
      "Suspicious email awareness",
      "Basic safe browsing practices",
      "Device update reminders",
      "General cybersecurity fundamentals",
    ],
    href: "/services#cybersecurity-basics",
  },
];

export const values = [
  {
    icon: Mail,
    title: "Clear Communication",
    description:
      "You should not have to decode technical shorthand. Norman explains what is happening, what changed, and what to try next.",
  },
  {
    icon: CheckCircle2,
    title: "Honest Recommendations",
    description:
      "If a simple fix is enough, that is the recommendation. If the issue needs a different specialist, you will hear that clearly.",
  },
  {
    icon: ClipboardCheck,
    title: "Reliable Follow-Through",
    description:
      "Requests are tracked carefully so the problem does not disappear after the first message or remote session.",
  },
  {
    icon: Settings,
    title: "Real Support Experience",
    description:
      "Norman has helped users in healthcare, corporate, accounting, and education environments where details and communication matter.",
  },
  {
    icon: Headphones,
    title: "Patient User Support",
    description:
      "Support stays calm when the computer is slow, the meeting starts soon, or the error message makes no sense.",
  },
];

export const trustItems = [
  "Windows and Microsoft Office help",
  "SharePoint and documentation support",
  "Remote troubleshooting",
  "Training and patient user support",
];

export const commonProblems = [
  "A new laptop needs to be set up before Monday.",
  "Microsoft Office, email, or Teams is slowing down the workday.",
  "A SharePoint page, checklist, or training guide needs to be cleaned up.",
  "A printer, monitor, dock, or keyboard will not cooperate.",
  "A user needs help with access, passwords, or basic onboarding.",
  "Files, apps, and updates need to be cleaned up and organized.",
];

export const jobs = [
  {
    company: "LA Care Health Plan",
    role: "Help Desk Specialist II",
    dates: "June 2024 - June 2025",
    bullets: [
      "Tracked, assigned, and resolved help desk tickets while communicating clearly with users.",
      "Provided first-tier support for routine hardware, software, and system-related issues.",
      "Created and managed user accounts, including standard permissions.",
      "Helped maintain computer-related supplies and support readiness.",
    ],
    skills: ["Help Desk", "Tickets", "User Accounts", "Hardware Support", "Software Support"],
  },
  {
    company: "CoolSys Inc.",
    role: "Help Desk Specialist",
    dates: "December 2022 - June 2024",
    bullets: [
      "Provided technical support through phone, Microsoft Teams, and remote desktop tools.",
      "Collaborated with technicians and stakeholders to resolve issues promptly.",
      "Supported users through clear communication and practical troubleshooting.",
    ],
    skills: ["Remote Support", "Microsoft Teams", "Troubleshooting", "User Support"],
  },
  {
    company: "Horne LLP",
    role: "Help Desk Support Specialist, Tier II",
    dates: "January 2022 - December 2022",
    bullets: [
      "Communicated technical information clearly to end users.",
      "Supported Microsoft Windows PCs and Microsoft Office applications.",
      "Helped users resolve common productivity and system issues.",
    ],
    skills: ["Tier II Support", "Windows", "Microsoft Office", "End-User Support"],
  },
  {
    company: "Yucaipa-Calimesa Unified School District",
    role: "Computer Resources Assistant",
    dates: "February 2021 - January 2022",
    bullets: [
      "Reimaged Windows and Chrome OS devices.",
      "Installed and replaced hardware and software.",
      "Provided remote desktop support.",
    ],
    skills: ["Device Imaging", "Chrome OS", "Windows", "Hardware Replacement", "Remote Support"],
  },
  {
    company: "Watchtower Bible and Tract Society",
    role: "Project Manager / Team Lead",
    dates: "",
    bullets: [
      "Onboarded and mentored new volunteers.",
      "Developed and delivered technical training materials.",
      "Created documentation and guided users through repeatable technical processes.",
      "Led technical project teams to completion.",
    ],
    skills: ["Training", "Documentation", "Team Leadership", "Project Coordination", "Mentoring"],
  },
];

export const education = [
  "Associate Degree in Communications - Chaffey College",
  "Associate Degree in Social and Behavioral Science - Chaffey College",
  "High School Diploma - Etiwanda High School",
];

export const certifications = [
  "Computer Proficiency Certificate - Chaffey College",
  "Project Management Certificate - Chaffey College",
  "Coursework in Computer Networking, Cybersecurity, and Windows Administration",
];

export const packages = [
  {
    icon: Wrench,
    title: "One-Time Support",
    description: "For people who need help with a specific technical issue.",
    bestFor: ["Individuals", "Remote workers", "Small businesses with one immediate problem"],
  },
  {
    icon: Network,
    title: "Small Team Support",
    description: "For small businesses or organizations that need recurring support.",
    bestFor: [
      "Teams without dedicated IT",
      "Organizations with occasional support needs",
      "Teams onboarding new users or devices",
    ],
  },
  {
    icon: Cable,
    title: "Tech Cleanup Session",
    description: "A focused session to clean up and organize a device or workflow.",
    bestFor: [
      "Slow or cluttered computers",
      "File and app organization",
      "Basic update and security checkups",
      "Users who need a more organized setup",
    ],
  },
  {
    icon: GraduationCap,
    title: "User Training Session",
    description: "A patient walkthrough for users who need help with tools, SharePoint basics, documentation, or workflows.",
    bestFor: [
      "Microsoft Office basics",
      "Email organization",
      "SharePoint walkthroughs",
      "Documentation cleanup",
      "Remote-work tools",
      "Basic computer use",
      "Safe technology habits",
    ],
  },
];
