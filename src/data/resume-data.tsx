import {
  ClevertechLogo,
  ConsultlyLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { GlobeIcon } from "lucide-react";


export const RESUME_DATA = {
  cal: "shubhkumar/hire-me",
  name: "Shubham Kumar",
  initials: "SK",
  location: "Koramangala, Bengaluru, India, IST",
  locationLink: "https://maps.app.goo.gl/RtSs9YwiKQv8LiBm8",
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
  skills: {
    "programming language": [
      {
        "href": "https://www.typescriptlang.org/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
        "skill": "TypeScript"
      },
      {
        "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
        "skill": "JavaScript"
      },
      {
        "href": "https://www.purescript.org/",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/6/64/PureScript_Logo.png",
        "skill": "Purescript"
      },
      {
        "href": "https://www.haskell.org/",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg",
        "skill": "Haskell"
      }
    ],
    "databases": [
      {
        "href": "https://www.mongodb.com/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
        "skill": "MongoDB"
      },
      {
        "href": "https://couchdb.apache.org/",
        "icon": "https://couchdb.apache.org/image/couch@2x.png",
        "skill": "CouchDB"
      },
      {
        "href": "https://www.mysql.com/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg",
        "skill": "MySQL"
      },
      {
        "href": "https://www.postgresql.org/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
        "skill": "PostgreSQL"
      },
      {
        "href": "https://redis.io/",
        "icon": "https://redis.io/wp-content/uploads/2024/04/Logotype.svg",
        "skill": "Redis"
      }
    ],
    "framework and runtime": [
      {
        "href": "https://nextjs.org/docs",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg",
        "skill": "NextJs"
      },
      {
        "href": "https://expressjs.com/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg",
        "skill": "Express"
      },
      {
        "href": "https://docs.nestjs.com/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg",
        "skill": "NestJS"
      },
      {
        "href": "https://nodejs.org/en/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
        "skill": "NodeJS"
      },
      {
        "href": "https://bun.sh/",
        "icon": "data:image/svg+xml;base64, PHN2ZyBpZD0iQnVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA3MCI+PHRpdGxlPkJ1biBMb2dvPC90aXRsZT48cGF0aCBpZD0iU2hhZG93IiBkPSJNNzEuMDksMjAuNzRjLS4xNi0uMTctLjMzLS4zNC0uNS0uNXMtLjMzLS4zNC0uNS0uNS0uMzMtLjM0LS41LS41LS4zMy0uMzQtLjUtLjUtLjMzLS4zNC0uNS0uNS0uMzMtLjM0LS41LS41LS4zMy0uMzQtLjUtLjVBMjYuNDYsMjYuNDYsMCwwLDEsNzUuNSwzNS43YzAsMTYuNTctMTYuODIsMzAuMDUtMzcuNSwzMC4wNS0xMS41OCwwLTIxLjk0LTQuMjMtMjguODMtMTAuODZsLjUuNS41LjUuNS41LjUuNS41LjUuNS41LjUuNUMxOS41NSw2NS4zLDMwLjE0LDY5Ljc1LDQyLDY5Ljc1YzIwLjY4LDAsMzcuNS0xMy40OCwzNy41LTMwQzc5LjUsMzIuNjksNzYuNDYsMjYsNzEuMDksMjAuNzRaIi8+PGcgaWQ9IkJvZHkiPjxwYXRoIGlkPSJCYWNrZ3JvdW5kIiBkPSJNNzMsMzUuN2MwLDE1LjIxLTE1LjY3LDI3LjU0LTM1LDI3LjU0UzMsNTAuOTEsMywzNS43QzMsMjYuMjcsOSwxNy45NCwxOC4yMiwxM1MzMy4xOCwzLDM4LDNzOC45NCw0LjEzLDE5Ljc4LDEwQzY3LDE3Ljk0LDczLDI2LjI3LDczLDM1LjdaIiBzdHlsZT0iZmlsbDojZmJmMGRmIi8+PHBhdGggaWQ9IkJvdHRvbV9TaGFkb3ciIGRhdGEtbmFtZT0iQm90dG9tIFNoYWRvdyIgZD0iTTczLDM1LjdhMjEuNjcsMjEuNjcsMCwwLDAtLjgtNS43OGMtMi43MywzMy4zLTQzLjM1LDM0LjktNTkuMzIsMjQuOTRBNDAsNDAsMCwwLDAsMzgsNjMuMjRDNTcuMyw2My4yNCw3Myw1MC44OSw3MywzNS43WiIgc3R5bGU9ImZpbGw6I2Y2ZGVjZSIvPjxwYXRoIGlkPSJMaWdodF9TaGluZSIgZGF0YS1uYW1lPSJMaWdodCBTaGluZSIgZD0iTTI0LjUzLDExLjE3QzI5LDguNDksMzQuOTQsMy40Niw0MC43OCwzLjQ1QTkuMjksOS4yOSwwLDAsMCwzOCwzYy0yLjQyLDAtNSwxLjI1LTguMjUsMy4xMy0xLjEzLjY2LTIuMywxLjM5LTMuNTQsMi4xNS0yLjMzLDEuNDQtNSwzLjA3LTgsNC43QzguNjksMTguMTMsMywyNi42MiwzLDM1LjdjMCwuNCwwLC44LDAsMS4xOUM5LjA2LDE1LjQ4LDIwLjA3LDEzLjg1LDI0LjUzLDExLjE3WiIgc3R5bGU9ImZpbGw6I2ZmZmVmYyIvPjxwYXRoIGlkPSJUb3AiIGQ9Ik0zNS4xMiw1LjUzQTE2LjQxLDE2LjQxLDAsMCwxLDI5LjQ5LDE4Yy0uMjguMjUtLjA2LjczLjMuNTksMy4zNy0xLjMxLDcuOTItNS4yMyw2LTEzLjE0QzM1LjcxLDUsMzUuMTIsNS4xMiwzNS4xMiw1LjUzWm0yLjI3LDBBMTYuMjQsMTYuMjQsMCwwLDEsMzksMTljLS4xMi4zNS4zMS42NS41NS4zNkM0MS43NCwxNi41Niw0My42NSwxMSwzNy45Myw1LDM3LjY0LDQuNzQsMzcuMTksNS4xNCwzNy4zOSw1LjQ5Wm0yLjc2LS4xN0ExNi40MiwxNi40MiwwLDAsMSw0NywxNy4xMmEuMzMuMzMsMCwwLDAsLjY1LjExYy45Mi0zLjQ5LjQtOS40NC03LjE3LTEyLjUzQzQwLjA4LDQuNTQsMzkuODIsNS4wOCw0MC4xNSw1LjMyWk0yMS42OSwxNS43NmExNi45NCwxNi45NCwwLDAsMCwxMC40Ny05Yy4xOC0uMzYuNzUtLjIyLjY2LjE4LTEuNzMsOC03LjUyLDkuNjctMTEuMTIsOS40NUMyMS4zMiwxNi40LDIxLjMzLDE1Ljg3LDIxLjY5LDE1Ljc2WiIgc3R5bGU9ImZpbGw6I2NjYmVhNztmaWxsLXJ1bGU6ZXZlbm9kZCIvPjxwYXRoIGlkPSJPdXRsaW5lIiBkPSJNMzgsNjUuNzVDMTcuMzIsNjUuNzUuNSw1Mi4yNy41LDM1LjdjMC0xMCw2LjE4LTE5LjMzLDE2LjUzLTI0LjkyLDMtMS42LDUuNTctMy4yMSw3Ljg2LTQuNjIsMS4yNi0uNzgsMi40NS0xLjUxLDMuNi0yLjE5QzMyLDEuODksMzUsLjUsMzgsLjVzNS42MiwxLjIsOC45LDMuMTRjMSwuNTcsMiwxLjE5LDMuMDcsMS44NywyLjQ5LDEuNTQsNS4zLDMuMjgsOSw1LjI3QzY5LjMyLDE2LjM3LDc1LjUsMjUuNjksNzUuNSwzNS43LDc1LjUsNTIuMjcsNTguNjgsNjUuNzUsMzgsNjUuNzVaTTM4LDNjLTIuNDIsMC01LDEuMjUtOC4yNSwzLjEzLTEuMTMuNjYtMi4zLDEuMzktMy41NCwyLjE1LTIuMzMsMS40NC01LDMuMDctOCw0LjdDOC42OSwxOC4xMywzLDI2LjYyLDMsMzUuNywzLDUwLjg5LDE4LjcsNjMuMjUsMzgsNjMuMjVTNzMsNTAuODksNzMsMzUuN0M3MywyNi42Miw2Ny4zMSwxOC4xMyw1Ny43OCwxMyw1NCwxMSw1MS4wNSw5LjEyLDQ4LjY2LDcuNjRjLTEuMDktLjY3LTIuMDktMS4yOS0zLTEuODRDNDIuNjMsNCw0MC40MiwzLDM4LDNaIi8+PC9nPjxnIGlkPSJNb3V0aCI+PGcgaWQ9IkJhY2tncm91bmQtMiIgZGF0YS1uYW1lPSJCYWNrZ3JvdW5kIj48cGF0aCBkPSJNNDUuMDUsNDNhOC45Myw4LjkzLDAsMCwxLTIuOTIsNC43MSw2LjgxLDYuODEsMCwwLDEtNCwxLjg4QTYuODQsNi44NCwwLDAsMSwzNCw0Ny43MSw4LjkzLDguOTMsMCwwLDEsMzEuMTIsNDNhLjcyLjcyLDAsMCwxLC44LS44MUg0NC4yNkEuNzIuNzIsMCwwLDEsNDUuMDUsNDNaIiBzdHlsZT0iZmlsbDojYjcxNDIyIi8+PC9nPjxnIGlkPSJUb25ndWUiPjxwYXRoIGlkPSJCYWNrZ3JvdW5kLTMiIGRhdGEtbmFtZT0iQmFja2dyb3VuZCIgZD0iTTM0LDQ3Ljc5YTYuOTEsNi45MSwwLDAsMCw0LjEyLDEuOSw2LjkxLDYuOTEsMCwwLDAsNC4xMS0xLjksMTAuNjMsMTAuNjMsMCwwLDAsMS0xLjA3LDYuODMsNi44MywwLDAsMC00LjktMi4zMSw2LjE1LDYuMTUsMCwwLDAtNSwyLjc4QzMzLjU2LDQ3LjQsMzMuNzYsNDcuNiwzNCw0Ny43OVoiIHN0eWxlPSJmaWxsOiNmZjYxNjQiLz48cGF0aCBpZD0iT3V0bGluZS0yIiBkYXRhLW5hbWU9Ik91dGxpbmUiIGQ9Ik0zNC4xNiw0N2E1LjM2LDUuMzYsMCwwLDEsNC4xOS0yLjA4LDYsNiwwLDAsMSw0LDEuNjljLjIzLS4yNS40NS0uNTEuNjYtLjc3YTcsNywwLDAsMC00LjcxLTEuOTMsNi4zNiw2LjM2LDAsMCwwLTQuODksMi4zNkE5LjUzLDkuNTMsMCwwLDAsMzQuMTYsNDdaIi8+PC9nPjxwYXRoIGlkPSJPdXRsaW5lLTMiIGRhdGEtbmFtZT0iT3V0bGluZSIgZD0iTTM4LjA5LDUwLjE5YTcuNDIsNy40MiwwLDAsMS00LjQ1LTIsOS41Miw5LjUyLDAsMCwxLTMuMTEtNS4wNSwxLjIsMS4yLDAsMCwxLC4yNi0xLDEuNDEsMS40MSwwLDAsMSwxLjEzLS41MUg0NC4yNmExLjQ0LDEuNDQsMCwwLDEsMS4xMy41MSwxLjE5LDEuMTksMCwwLDEsLjI1LDFoMGE5LjUyLDkuNTIsMCwwLDEtMy4xMSw1LjA1QTcuNDIsNy40MiwwLDAsMSwzOC4wOSw1MC4xOVptLTYuMTctNy40Yy0uMTYsMC0uMi4wNy0uMjEuMDlhOC4yOSw4LjI5LDAsMCwwLDIuNzMsNC4zN0E2LjIzLDYuMjMsMCwwLDAsMzguMDksNDlhNi4yOCw2LjI4LDAsMCwwLDMuNjUtMS43Myw4LjMsOC4zLDAsMCwwLDIuNzItNC4zNy4yMS4yMSwwLDAsMC0uMi0uMDlaIi8+PC9nPjxnIGlkPSJGYWNlIj48ZWxsaXBzZSBpZD0iUmlnaHRfQmx1c2giIGRhdGEtbmFtZT0iUmlnaHQgQmx1c2giIGN4PSI1My4yMiIgY3k9IjQwLjE4IiByeD0iNS44NSIgcnk9IjMuNDQiIHN0eWxlPSJmaWxsOiNmZWJiZDAiLz48ZWxsaXBzZSBpZD0iTGVmdF9CbHVjaCIgZGF0YS1uYW1lPSJMZWZ0IEJsdWNoIiBjeD0iMjIuOTUiIGN5PSI0MC4xOCIgcng9IjUuODUiIHJ5PSIzLjQ0IiBzdHlsZT0iZmlsbDojZmViYmQwIi8+PHBhdGggaWQ9IkV5ZXMiIGQ9Ik0yNS43LDM4LjhhNS41MSw1LjUxLDAsMSwwLTUuNS01LjUxQTUuNTEsNS41MSwwLDAsMCwyNS43LDM4LjhabTI0Ljc3LDBBNS41MSw1LjUxLDAsMSwwLDQ1LDMzLjI5LDUuNSw1LjUsMCwwLDAsNTAuNDcsMzguOFoiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZCIvPjxwYXRoIGlkPSJJcmlzIiBkPSJNMjQsMzMuNjRhMi4wNywyLjA3LDAsMSwwLTIuMDYtMi4wN0EyLjA3LDIuMDcsMCwwLDAsMjQsMzMuNjRabTI0Ljc3LDBhMi4wNywyLjA3LDAsMSwwLTIuMDYtMi4wN0EyLjA3LDIuMDcsMCwwLDAsNDguNzUsMzMuNjRaIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVsZTpldmVub2RkIi8+PC9nPjwvc3ZnPg==",
        "skill": "Bun"
      }
    ],
    "tools": [
      {
        "href": "https://git-scm.com/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
        "skill": "Git"
      },
      {
        "href": "https://www.gnu.org/software/bash/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gnubash-colored.svg",
        "skill": "GNU Bash"
      },
      {
        "href": "https://www.zsh.org/",
        "icon": "https://raw.githubusercontent.com/Zsh-art/logo/main/svg/color_vertical_icon.svg",
        "skill": "ZSH"
      },
      {
        "href": "https://neovim.io/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/neovim-colored.svg",
        "skill": "Neovim"
      },
      {
        "href": "https://code.visualstudio.com/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode-colored.svg",
        "skill": "VS Code"
      },
      {
        "href": "https://tailwindcss.com/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
        "skill": "TailwindCSS"
      },
      {
        "href": "https://supabase.io/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg",
        "skill": "Supabase"
      },
      {
        "href": "https://www.docker.com/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg",
        "skill": "Docker"
      },
      {
        "href": "https://kubernetes.io/",
        "icon": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/kubernetes-icon.png",
        "skill": "Kubernetes"
      },
      {
        "href": "https://www.linux.org",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg",
        "skill": "Linux"
      },
      {
        "href": "https://apple.com",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/macos-colored.svg",
        "skill": "MacOS"
      },
      {
        "href": "https://www.heroku.com/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg",
        "skill": "Heroku"
      },
      {
        "href": "https://render.com/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/render-colored.svg",
        "skill": "Render"
      },
      {
        "href": "https://cloud.google.com/",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg",
        "skill": "Google Cloud"
      },
      {
        "href": "https://aws.amazon.com",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aws-colored.svg",
        "skill": "Amazon Web Services"
      },
      {
        "href": "https://www.digitalocean.com",
        "icon": "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/digitalocean-colored.svg",
        "skill": "Digital Ocean"
      },
      {
        "href": "https://www.fly.io",
        "icon": "https://fly.io/static/images/brand/brandmark-light.svg",
        "skill": "FlyIO"
      },
      {
        "href": "https://www.netlify.com/",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo_%282%29.svg/1024px-Netlify_logo_%282%29.svg.png?20230307164604",
        "skill": "Netlify"
      }
    ]
  },
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
