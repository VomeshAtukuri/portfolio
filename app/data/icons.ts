// icons.ts
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaJava, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiNestjs, SiLangchain, SiRedis, SiOpenai } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { TbBrandNextjs, TbApi, TbBrain } from "react-icons/tb";

export const skillIcons: Record<string, React.ComponentType> = {
  react: FaReact,
  node: FaNodeJs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  java: FaJava,
  tailwind: SiTailwindcss,
  redux: SiRedux,
  nextjs: TbBrandNextjs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  docker: FaDocker,
  git: FaGitAlt,
  nestjs: SiNestjs,
  azure: VscAzure,
  azureopenai: SiOpenai,
  langchain: SiLangchain,
  redis: SiRedis,
  restapi: TbApi,
  rag: TbBrain,
  vectordb: FaDatabase,
};
