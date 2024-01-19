import {
  ClevertechLogo,
  ConsultlyLogo,
  ParabolLogo,
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
    "Seasoned software engineer with expertise in end-to-end development cycle. Demonstrated success in optimizing intricate systems, overhauling payment applications, and elevating user experiences through inventive solutions.",
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
      skip: false,
      end: null,
      description: [
        "Proficiency in designing and optimizing intricate systems.",
        "Augmented offline Payments Applications with online verification capabilities in the presence of internet connectivity.",
        "Noteworthy increase in Captive portal launch rates, from 50% to over 75%.",
        "Developed a versatile Remote Sync Service for content synchronization.",
        "Executed comprehensive refactoring of ADS-B Services for seamless event communication.",
        "Pivotal role in enhancing email accessibility via satellite.",
        "Implementation of restrictions to text-only formats for improved email accessibility."
      ]
    },
    {
      company: "Juspay",
      link: "https://juspay.in",
      badges: ["Onsite"],
      title: "Software Developer",
      logo: ClevertechLogo,
      skip: false,
      start: "2018",
      end: "2021",
      description:
        [
          "Core Member of the team, responsible for designing and implementing the payout system",
          "Revamped CRED app's payment backend in PureScript, slashing payout time from 1 minute to 6 seconds",
          "Enabling seamless credit card transactions",
          "Generic fulfillment for various financial operations",
          "Implemented BillPayment Service for HPGas on Google Pay."
        ]

    },
    {
      company: "Juspay",
      link: "https://juspay.in",
      badges: ["Onsite"],
      title: "Software Developer Intern",
      logo: ClevertechLogo,
      start: "2017",
      skip: true,
      end: "2018",
      description:
        [
          "Implemented a RESTful crypto service with secure key storage for encryption and signing"
        ]

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
  certifications: [
    {
      title: "Google Cybersecurity",
      description: "Google Cybersecurity Professional Certifications",
      tags: [],
      link: {
        href: "https://www.coursera.org/account/accomplishments/specialization/9FYU7RQDJGJ5"
      }
    },
    {
      title: "Understanding CouchDB 3",
      description: "Understanding CouchDB 3: Learn Basic & Advanced NoSQL Skills",
      tags: [],
      link: {
        href: "https://ude.my/UC-3e1c81c6-5f18-47a8-b801-61f298f02731"
      }
    },
    {
      title: "Bash Scripting",
      description: "Bash Scripting and Shell Programming (Linux Command Line)",
      tags: [],
      link: {
        href: "https://ude.my/UC-80a8dd92-3c5e-4bdb-ab53-215d1e220f49"
      }
    }
  ]
} as const;
