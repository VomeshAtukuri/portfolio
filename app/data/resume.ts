
export const resume = {
  experience: [
    {
      title: "Software Engineer",
      company: "itD Tech",
      logo: "itD",
      logoSrc: "/itD_logo_white.png",
      logoBg: "bg-red-600",
      timeline: "Nov 2024 - Present",
      experience: [
        {
          shortreview:
            "As a Software Engineer, I worked on building scalable full-stack and AI-powered internal tools, collaborating closely with product and engineering teams to deliver high-impact features used across the organization. My key responsibilities included:",
          points: [
            "Designed and developed Aurora-Copilot, an AI-powered assistant using React, TypeScript, and Azure OpenAI to support Khoros → Aurora migration and improve developer productivity",

            "Built an AI-driven Community Monitor leveraging web crawling, vector databases, and semantic search to detect spam and automatically generate FAQs",

            "Implemented background task processing and message queues to handle asynchronous workflows and improve system reliability",

            "Integrated Microsoft OAuth authentication and enforced secure access controls to protect user data and internal tools",

            "Collaborated in Agile sprints, participated in code reviews, and followed Git-based workflows to maintain high code quality and reduce production issues",

            "Worked closely with cross-functional teams to translate requirements into clean, maintainable, and scalable solutions",
          ],
        },
      ],
    },
  ],
  skills: [
    {icon: "javascript", name: "JavaScript"},
    {icon: "typescript", name: "TypeScript"},
    {icon: "java", name: "Java"},
    {icon: "react", name: "React"},
    {icon: "nextjs", name: "Next.js"},
    {icon: "node", name: "Node.js"},
    {icon: "nestjs", name: "NestJS"},
    {icon: "express", name: "Express"},
    {icon: "tailwind", name: "Tailwind CSS"},
    {icon: "redux", name: "Redux"},
    {icon: "postgresql", name: "PostgreSQL"},
    {icon: "mysql", name: "MySQL"},
    {icon: "mongodb", name: "MongoDB"},
    {icon: "redis", name: "Redis"},
    {icon: "restapi", name: "REST APIs"},
    {icon: "docker", name: "Docker"},
    {icon: "git", name: "Git"},
    {icon: "azure", name: "Azure"},
    {icon: "azureopenai", name: "Azure OpenAI"},
    {icon: "langchain", name: "LangChain"},
    {icon: "rag", name: "RAG"},
    {icon: "vectordb", name: "Vector Databases"},
  ],
  projects: [
    {
      title: "Pitch Startup",
      tech: ["React", "Next.js", "Tailwind CSS", "OAuth", "ORM"],
      description:
        "A full-stack platform that connects startup founders with investors. Founders can showcase their pitches while investors explore opportunities through a responsive, mobile-first interface.",
      github: "https://github.com/vomeshatukuri/startup",
      demo: "https://pitchstartupav.vercel.app/",
    },
    {
      title: "InfoBuddy.io",
      tech: ["React", "Node.js", "LLMs", "RAG", "Vector DB"],
      description:
        "An AI-powered Generative AI platform that crawls websites, extracts domain-specific knowledge, and enables real-time natural language querying. Built using RAG and LLMs to process and index web content into vector embeddings, achieving high-accuracy semantic search and transforming unstructured web data into actionable insights.",
      github: "https://github.com/vomeshatukuri/InfoBuddy.io",
      // demo: "https://infobuddy.io/",
    },
  ],
};
