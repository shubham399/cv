import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { GlobeIcon } from "lucide-react";


export const RESUME_DATA = {
  name: "Shubham Kumar",
  initials: "SK",
  location: "Bengaluru, India, IST",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Senior Software Engineer | CTF Player | Hacker",
  summary:
    "Experienced Senior Software Engineer specializing in end-to-end development. Proven track record includes optimizing complex systems, revamping payment backends, and enhancing user experiences through innovative solutions.    ",
  avatarUrl: "https://avatars.githubusercontent.com/u/17530162?v=4",
  personalWebsiteUrl: "https://shubhkumar.in",
  contact: {
    email: "hello@shubhkumar.in",
    tel: "+917406879845",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/shubham399",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shubham399/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/shubhkumar01",
        icon: XIcon,
      },
      {
        name: "Connect",
        url: "https://connect.shubhkumar.in/",
        icon: GlobeIcon,
      },
    ],
  },
  education: [
    {
      school: "The Oxford College of Engineering, Bengaluru VTU",
      degree: "Bachelor's of Engineering, Compute Science",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "AirFi",
      link: "https://www.airfi.aero",
      badges: ["Remote"],
      title: "Senior Software Engineer",
      logo: ParabolLogo,
      start: "2021",
      end: "Present",
      description:
        "Experienced Senior Software Developer adept at designing and optimizing complex systems. Specialized in end-to-end development, I've enhanced offline Payments Applications with online verification, developed a versatile Remote Sync Service for content synchronization, and refactored ADS-B Services for seamless event communication. Proficient in ACDC service for remote content syncing, I've also contributed to improving email accessibility via satellite, restricting it to text-only, and significantly boosting Captive portal launch rates from 50% to over 75%."
    },
    {
      company: "Juspay",
      link: "https://juspay.in",
      badges: ["Onsite"],
      title: "Software Developer",
      logo: ClevertechLogo,
      start: "2018",
      end: "2021",
      description:
        "Revamped CRED app's payment backend in PureScript, slashing payout time from 1 minute to 6 seconds, enabling seamless credit card transactions, generic fulfillment for various financial operations, and implemented a RESTful crypto service with secure key storage for encryption and signing.",
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Restful",
    "Haskell",
    "Purescript",
    "Postgres",
    "CouchDB",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "AWS",
  ],
  projects: [
    {
      title: "f3v3r.in",
      techStack: [
        "Side Project",
        "JavaScript",
        "Markdown",
        // "Node.js",
        // "WebSocket",
      ],
      description: "Cybersecurity blog",
      logo: ConsultlyLogo,
      link: {
        label: "https://f3v3r.in/",
        href: "https://f3v3r.in/",
      },
    },
    {
      title: "hexo-twitter-auto-publish",
      techStack: [
        "Side Project",
        "TypeScript",
        "Node.js",
        // "WebSocket",
      ],
      description: "A Hexo bot to auto tweets on Twitter for the blogs published via Hexo",
      logo: ConsultlyLogo,
      link: {
        label: "https://github.com/shubham399/hexo-twitter-auto-publish",
        href: "https://github.com/shubham399/hexo-twitter-auto-publish",
      },
    },
    {
      title: "urlshortner",
      techStack: [
        "Side Project",
        "TypeScript",
        "Node.js",
        // "WebSocket",
      ],
      description: "A URL Shorter service",
      logo: ConsultlyLogo,
      link: {
        label: "https://github.com/shubham399/urlshortner",
        href: "https://github.com/shubham399/urlshortner",
      },
    },
    {
      title: "fly_db_backup",
      techStack: [
        "Side Project",
        "TypeScript",
        "Python3",
      ],
      description: "A tool to backup and restore Postgres database hosted on fly.io to cloudflare R2",
      logo: ConsultlyLogo,
      link: {
        label: "https://github.com/shubham399/fly_db_backup",
        href: "https://github.com/shubham399/fly_db_backup",
      },
    },
    {
      title: "Discord Bot",
      techStack: [
        "Side Project",
        "JavaScript",
        "Node.js",
        "WebSocket",
      ],
      description: "A role management Discord Bot",
      logo: ConsultlyLogo,
      link: {
        label: "https://github.com/shubham399/discord-role-management-htb",
        href: "https://github.com/shubham399/discord-role-management-htb",
      },
    },

  ],
} as const;
