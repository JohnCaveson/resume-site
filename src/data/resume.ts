export type SkillItem = string | { name: string; ref?: string }

export const resume = {
  name: "Greer Goodman",
  title: "Full Stack Software Engineer",
  phone: "",
  email: "greergoodman6 [at] gmail [dot] com",
  linkedin: "www.linkedin.com/in/greer-g-555820114",
  github: "https://github.com/johncaveson",
  summary: [
    "Full Stack Software Engineer with 8+ years of experience building web applications, APIs, and cloud-native services using C#, .NET, React, and TypeScript.",
    "Led the evaluation and adoption of LaunchDarkly feature management, establishing feature flag governance and enabling engineering teams to safely release software through progressive delivery.",
  ],

  skills: [
    {
      category: "Languages",
      items: [
        { name: "C#", ref: "Vantaca" },
        { name: "TypeScript", ref: "Vantaca" },
        "JavaScript",
        "SQL",
        { name: "Rust", ref: "project:Jira TUI" },
      ],
    },
    {
      category: "Tools",
      items: ["Vim", "Git", "VS Code", { name: "LaunchDarkly", ref: "Vantaca" }],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", ref: "Vantaca" },
        { name: "Angular", ref: "James River Equipment" },
        "Vue.js",
        { name: "MobX", ref: "Owens & Minor" },
        "Axios",
      ],
    },
    {
      category: "Backend",
      items: [
        { name: ".NET Core", ref: "Vantaca" },
        "ASP.NET",
        { name: "REST APIs", ref: "Vantaca" },
        { name: "Minimal APIs", ref: "Vantaca" },
        "Node.js",
        { name: "Microservices", ref: "Owens & Minor" },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        { name: "Kubernetes", ref: "Mapcom Systems" },
        { name: "Terraform", ref: "Mapcom Systems" },
        { name: "Azure", ref: "Owens & Minor" },
        "Azure DevOps",
        "RabbitMQ",
        { name: "Azure Key Vault", ref: "Owens & Minor" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "SQL Server", ref: "Owens & Minor" },
        "Cosmos DB",
      ],
    },
    {
      category: "Development Practices",
      items: [
        "Agile",
        "CI/CD",
        { name: "Event-Driven Architecture", ref: "Mapcom Systems" },
        { name: "Feature Management", ref: "Vantaca" },
        "Spec Driven Development",
      ],
    },
  ],

  experience: [
    {
      company: "Vantaca",
      role: "Full Stack Software Engineer",
      period: "January 2025 – June 2026",
      highlights: [
        "Developed customer-facing portals and backend APIs using React, TypeScript, and .NET, processing transactions for homeowner and management portals.",
        "Enhanced Stripe-based payment workflows by implementing recurring payment onboarding and supporting SOC 2 compliance initiatives.",
        "Led the evaluation and implementation of LaunchDarkly feature management, establishing RBAC-based approval workflows, audit trails, and governance for 10+ flags.",
        "Served as the engineering team's LaunchDarkly SME, mentoring 20+ engineers on feature flag best practices and targeted rollouts.",
      ],
    },
    {
      company: "James River Equipment",
      role: "Full Stack Software Engineer",
      period: "April 2024 – January 2025",
      highlights: [
        "Modernized a legacy application by rebuilding it in Angular with .NET 6 backend for equipment service quoting and maintenance planning.",
        "Developed .NET 6 APIs for equipment tracking, maintenance scheduling, and operational reporting.",
        "Delivered full-stack features in Agile sprints with cross-functional collaboration.",
      ],
    },
    {
      company: "Dominion Energy",
      role: "Full Stack Software Engineer",
      period: "October 2023 – March 2024",
      highlights: [
        "Modernized a legacy PHP application into a React SPA backed by .NET 6 Minimal APIs.",
        "Designed RESTful APIs for crew management and operational reporting.",
        "Transitioned business logic from monolithic to service-oriented architecture, improving maintainability and deployment velocity.",
      ],
    },
    {
      company: "Owens & Minor",
      role: "Software Engineer",
      period: "May 2021 – October 2023",
      highlights: [
        "Co-developed a reusable React component library distributed as a private npm package, improving UI consistency across enterprise applications.",
        "Architected MobX state management for a hospital inventory platform handling real-time data across distributed deployments.",
        "Built an OCR data pipeline transforming handwritten preference cards into structured JSON for downstream processing.",
        "Designed REST APIs and SQL Server-backed services for inventory management at scale.",
        "Implemented .NET microservices with Azure Key Vault and secure REST APIs following distributed systems best practices.",
      ],
    },
    {
      company: "Mapcom Systems",
      role: "Software Engineer",
      period: "November 2019 – March 2021",
      highlights: [
        "Developed microservices and data pipelines within an event-driven architecture for enterprise asset management.",
        "Contributed to Kubernetes deployments and Azure infrastructure automation using Terraform.",
      ],
    },
    {
      company: "Computer Resource Company",
      role: "Junior Developer",
      period: "July 2017 – November 2019",
      highlights: [
        "Maintained and enhanced the UniT platform, a financial trading application supporting ETF, stock option, and equity trades.",
        "Contributed to the evolution of Tradeport, the company's flagship trading platform, through ongoing bug fixes and feature updates.",
      ],
    },
  ],

  education: {
    degree: "Bachelor of Science in Computing",
    school: "East Tennessee State University",
    year: "2018",
    accreditation: "CAC of ABET Accredited",
  },

  projects: [
    {
      name: "Jellyfin",
      description: "Contributed to the Jellyfin open source media server project (jellyfin-web), an MIT-licensed media solution.",
      url: "https://github.com/jellyfin/jellyfin-web",
    },
    {
      name: "Jira TUI",
      description: "Built a terminal user interface for Jira in Rust with agentic assistance from Gemini, exploring async Rust, TUI frameworks, and REST API integration.",
      url: "#",
    },
  ],

  strengths: [
    {
      title: "Full-Stack Versatility",
      description: "Deep experience across the entire stack — from React frontends to .NET microservices to cloud infrastructure — means I can own features end-to-end.",
      icon: "⚡",
    },
    {
      title: "Technical Leadership",
      description: "I don't just write code — I evaluate platforms, establish best practices, and mentor teams. I led LaunchDarkly adoption across a 20+ engineer organization.",
      icon: "🎯",
    },
    {
      title: "Modern Engineering Practices",
      description: "CI/CD, feature flags, event-driven architecture, infrastructure as code — I bring production-tested patterns that reduce risk and increase velocity.",
      icon: "🛠️",
    },
    {
      title: "AI-Augmented Development",
      description: "I leverage AI-assisted workflows to accelerate delivery while maintaining quality, demonstrated through both professional work and personal projects like Jira TUI.",
      icon: "🤖",
    },
    {
      title: "Lifelong Learner",
      description: "I'm actively learning every day — whether it's mastering Vim, exploring Rust through side projects, or keeping up with the latest in cloud architecture. I bring curiosity and drive to everything I build.",
      icon: "📚",
    },
  ],
}
