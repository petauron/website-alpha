export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function localizePath(pathname: string, locale: Locale) {
  const path = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const unlocalized = path === "/zh" ? "/" : path.replace(/^\/zh(?=\/|$)/, "") || "/";

  return locale === "zh" ? (unlocalized === "/" ? "/zh" : `/zh${unlocalized}`) : unlocalized;
}

export const translations = {
  en: {
    description:
      "Petauron is an open-source technology organization. Every project is built with AI capabilities, with substantial portions of its code written and reviewed by AI. Vastora is currently our only product: a centralized server management platform built on a Center–Agent architecture.",
    accessibility: {
      home: "Petauron home",
      primaryNavigation: "Primary navigation",
      socialLinks: "Petauron social links",
    },
    navigation: {
      projects: "Product",
      updates: "Updates",
      about: "About",
    },
    language: "Language",
    footer: {
      tagline: "An open-source technology organization building practical software.",
      explore: "Explore",
      elsewhere: "Social",
      contact: "Contact",
      securityTitle: "Security",
      security: "Report a vulnerability",
    },
    home: {
      heroTitle: "An open-source technology organization",
      heroCopy:
        "We build and share practical software with AI involved throughout development.",
      heroProofTitle: "Petauron builds in the open.",
      heroProofCopy:
        "Substantial code across every project is written and reviewed with AI capabilities.",
      exploreProjects: "Explore Vastora",
      viewOnGithub: "View on GitHub",
      inDevelopment: "In development",
      projectDetails: "Product details",
      githubRepository: "GitHub repository",
      projects: "Product",
      currentProject: "Current product",
      structureOverview: "Center–Agent architecture",
      allProjects: "View product",
      latestUpdate: "Latest update",
      readUpdate: "Read update",
      principlesTitle: "How we build.",
      principlesCopy:
        "Our work is guided by openness, clarity, and the practical use of new technology and AI.",
      principles: [
        [
          "Open source by default",
          "Open source makes implementation and design decisions easier to inspect, discuss, and improve.",
        ],
        [
          "Clarity over complexity",
          "We favor clear behavior and configuration over unnecessary complexity.",
        ],
        [
          "Practical new technology",
          "We adopt new technology when it brings practical value to the software we build.",
        ],
        [
          "Built with AI",
          "Every Petauron project uses AI to write and review substantial portions of its code.",
        ],
      ],
    },
    status: {
      planned: "Planned",
      development: "In development",
      preview: "Preview",
      stable: "Stable",
      archived: "Archived",
    },
  },
  zh: {
    description:
      "Petauron 是一个开源技术组织。组织内所有项目均由 AI 能力参与构建，大量代码由 AI 编写和审查。Vastora 是当前唯一产品：一个基于 Center–Agent 架构的集中式服务器管理平台。",
    accessibility: {
      home: "Petauron 首页",
      primaryNavigation: "主导航",
      socialLinks: "Petauron 社交平台链接",
    },
    navigation: {
      projects: "产品",
      updates: "动态",
      about: "关于",
    },
    language: "语言",
    footer: {
      tagline: "一个构建实用软件的开源技术组织。",
      explore: "浏览",
      elsewhere: "社交平台",
      contact: "联系",
      securityTitle: "安全",
      security: "报告安全问题",
    },
    home: {
      heroTitle: "一个开源技术组织",
      heroCopy: "我们构建并分享实用软件，AI 参与整个开发过程。",
      heroProofTitle: "Petauron 坚持开放构建。",
      heroProofCopy: "组织内每个项目的大量代码均由 AI 能力参与编写和审查。",
      exploreProjects: "了解 Vastora",
      viewOnGithub: "在 GitHub 查看",
      inDevelopment: "开发中",
      projectDetails: "产品详情",
      githubRepository: "GitHub 仓库",
      projects: "产品",
      currentProject: "当前产品",
      structureOverview: "Center–Agent 架构",
      allProjects: "查看产品",
      latestUpdate: "最新动态",
      readUpdate: "查看动态",
      principlesTitle: "我们的构建方式。",
      principlesCopy:
        "开放、清晰，以及对新技术与 AI 能力的务实运用，是我们构建软件时坚持的原则。",
      principles: [
        ["默认开源", "开源让实现与设计决策更容易被审查、讨论和改进。"],
        ["清晰胜于复杂", "我们重视清晰的行为与配置，避免不必要的复杂性。"],
        ["务实采用新技术", "当新技术能为软件带来实际价值时，我们会积极采用。"],
        ["以 AI 构建", "Petauron 的每个项目都使用 AI 编写和审查大量代码。"],
      ],
    },
    status: {
      planned: "计划中",
      development: "开发中",
      preview: "预览",
      stable: "稳定",
      archived: "已归档",
    },
  },
} as const;

export type ProjectStatus = keyof (typeof translations)["en"]["status"];
