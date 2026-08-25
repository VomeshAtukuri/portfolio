import { Briefcase, Code2, Download, FolderGit2, Mail, User } from "lucide-react";
import { resume } from "./data/resume";
import { Experience } from "./components/Experience";
import { Skill } from "./components/Skill";
import { ProjectCard } from "./components/ProjectCard";
import { TerminalSnippet } from "./components/TerminalSnippet";
import { FadeIn } from "./components/FadeIn";

function SectionHeading({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight font-[family-name:var(--font-heading)]">{title}</h2>
      </div>
      <p className="text-muted-foreground text-sm pl-12">{subtitle}</p>
    </div>
  );
}

export default function Home() {
  const experience = resume.experience;
  const skills = resume.skills;

  return (
    <main className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="relative">
              <TerminalSnippet />
            </div>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-lg md:text-xl font-medium text-muted-foreground mb-3 font-[family-name:var(--font-heading)]">
                Building scalable software with code &amp; AI
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
                Hi, I&apos;m <span className="gradient-text">Vomesh Atukuri</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-2">
                A Software Developer focused on building modern, scalable web applications and AI-powered products.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">
                I work across the stack with <span className="text-foreground font-medium">React, Next.js, TypeScript, Node.js, Java, SQL, and AI/LLM technologies</span> — turning ideas into clean, reliable, production-ready experiences.
              </p>
              <p className="text-primary font-semibold tracking-wide">
                Building. Learning. Solving. Shipping.
              </p>
              <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  View Projects
                </a>
                <a
                  href="https://raw.githubusercontent.com/vomeshatukuri/resume/main/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors inline-flex items-center gap-2"
                >
                  Resume <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionHeading
              icon={Code2}
              title="Technical Skills"
              subtitle="Technologies and tools I work with daily"
            />
          </FadeIn>
          <FadeIn delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {skills.map((item, index) => (
                <Skill key={index} name={item.name} icon={item.icon} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionHeading
              icon={Briefcase}
              title="Experience"
              subtitle="My professional journey and key contributions"
            />
          </FadeIn>
          <div className="space-y-6">
            {experience.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Experience data={item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionHeading
              icon={User}
              title="About Me"
              subtitle="A little more about who I am"
            />
          </FadeIn>
          <FadeIn delay={150}>
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a Software Developer who enjoys turning complex problems into simple, scalable solutions. My experience spans <span className="text-foreground font-medium">full-stack development, AI-powered applications, APIs, databases, and modern web technologies</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I work primarily with <span className="text-foreground font-medium">React, Next.js, TypeScript, Node.js, Java, and SQL</span>, while also exploring <span className="text-foreground font-medium">LLMs, RAG systems, vector databases, and AI-driven developer tools</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;ve worked on products ranging from enterprise applications to AI tools that improve developer productivity and automate complex workflows. I enjoy understanding how systems work end-to-end — from designing the UI and APIs to working with databases, authentication, performance, and deployment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond writing code, I&apos;m constantly learning and experimenting with new technologies.<br />
              My goal is simple: <span className="text-foreground font-medium">build useful software, write better code, and keep getting better at solving difficult problems.</span>
            </p>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionHeading
              icon={FolderGit2}
              title="Projects"
              subtitle="Selected work that showcases my capabilities"
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resume.projects.map((item, index) => (
              <FadeIn key={index} delay={index * 150}>
                <ProjectCard project={item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
                  Let&apos;s work together
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Got an idea, a project, or just want to say hi? I&apos;m always open to discussing new opportunities and collaborations.
                </p>
                <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>vomeshatukuri02@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:vomeshatukuri02@gmail.com"
                  className="w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-3 text-base"
                >
                  <Mail className="w-5 h-5" />
                  Send an Email
                </a>
                <a
                  href="https://linkedin.com/in/vomeshatukuri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-4 rounded-xl border border-border font-medium hover:bg-secondary transition-colors inline-flex items-center justify-center gap-3 text-base"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn Profile
                </a>
                <a
                  href="https://github.com/vomeshatukuri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-4 rounded-xl border border-border font-medium hover:bg-secondary transition-colors inline-flex items-center justify-center gap-3 text-base"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Vomesh Atukuri. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}
