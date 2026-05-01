import { CheckCircle, Terminal, Bug, TestTube, Shield, Database, Globe, GitBranch, Mail, Linkedin, Github, ExternalLink, Code, Cpu, Server, Eye } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import profilePhoto from "@/assets/profile-photo.jpg";

const skills = [
  { name: "Selenium", icon: Globe },
  { name: "Cypress", icon: Cpu },
  { name: "Playwright", icon: Code },
  { name: "API Testing (Postman)", icon: Server },
  { name: "CI/CD Pipelines", icon: GitBranch },
  { name: "SQL & Databases", icon: Database },
  { name: "Security Testing", icon: Shield },
  { name: "Bug Tracking (Jira)", icon: Bug },
  { name: "Performance Testing", icon: TestTube },
  { name: "Test Automation", icon: CheckCircle },
  { name: "Manual Testing", icon: Eye },
];

const experience = [
  {
    role: "SQA Engineer ||",
    company: "Data-Path Limited",
    period: "2025 – Present",
    bullets: [
      "Analyze and validate business requirements and technical designs, identifying gaps and improving requirement clarity.",
      "Develop comprehensive test scenarios and test cases aligned with functional and technical requirements.",
      "Execute test cases, track and report defects in Jira, and collaborate closely with developers to ensure timely resolution.",
      "Re-test resolved defects to verify fixes and maintain product quality.",
      "Perform regression and sanity testing to identify critical defects and ensure stable, high-quality releases.",
      "Conduct API testing using Postman, validating backend functionality and reliability.",
      "Perform database testing using SQL queries to ensure data integrity, accurate data flow, and consistency across tables.",
      "Build and maintain a robust automation framework and develop end-to-end test scripts using Playwright.",
      "Create and maintain automated regression test suites using Cypress, improving efficiency and reducing manual testing effort.",
      "Implemented CI/CD integration with GitHub Actions",
    ],
  },
  {
    role: "SQA Engineer",
    company: "Banglalink Digital Communications Ltd.",
    period: "2023 – 2024",
    bullets: [
      "Conducted detailed Testing on different Banglalink Digital products like MyBL Super App, Banglalink Website, Toffe, Ryze App and Self Retailer App BL Power.",
      "Review and analyze requirements, specifications, and technical design documents, providing timely feedback.",
      "Writing well-structured, detailed, and comprehensive  test cases on core Telco features like Recharge, Buying Product, Loyalty management system, Referral program etc.",
      "Responsible for detailed User Acceptance testing of different partner integration on myBl App like Shadhin Music, Deen Islamic section, Pay Utility Bill, 10 minute School, and DocTime.",
      "Execute test cases, identify and report issues found, and verify that issues are resolved.",
      "Report software defects using bug-tracking tools.",
      "Conduct detailed sanity and regression testing on different versions of app builds.",
      "API testing with Postman, Newman.",
    ],
  },
  {
    role: "QA Intern",
    company: "DevXHub",
    period: "2021 – 2022",
    bullets: [
      "Executed manual test plans across 3 projects",
      "Learned automation fundamentals with Selenium",
      "Reported and tracked 150+ bugs in Jira",
    ],
  },
];

const projects = [
  {
    title: "Cypress E2E Test Framework",
    description: "Built a modular Cypress framework with custom commands, fixtures, and CI/CD integration with GitHub Actions.",
    tags: ["Cypress", "TypeScript", "GitHub Actions"],
    link: "https://github.com/niloytanvir/Luma-Automation", 
  },
  {
    title: "API Test Suite",
    description: "Comprehensive Postman collection with Rest APIs, Different types of API Authorization, Environment variable and Data Driven Testing.",
    tags: ["Postman", "Newman", "REST"],
    link: "https://github.com/niloytanvir/API-Postman-Newman", 
  },
  {
    title: "Performance Testing with Jmeter",
    description: "Load testing, checking concurrent users, Realtime performance of APIs.",
    tags: ["JMeter", "Performance Testing", "Load Testing "],
    //link: "https://github.com/yourusername/jmeter-performance", 
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="section-container flex items-center justify-between h-14">
          <span className="font-semibold text-foreground text-sm">Tanvir Ahmed</span>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors hidden sm:inline">About</a>
            <a href="#skills" className="hover:text-primary transition-colors hidden sm:inline">Skills</a>
            <a href="#experience" className="hover:text-primary transition-colors hidden sm:inline">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors hidden sm:inline">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors hidden sm:inline">Contact</a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 section-container">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 animate-fade-in">
              Tanvir Ahmed
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              QA Engineer · 3 Years Experience
            </h2>
            <p className="max-w-xl text-secondary-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              I break things so users don't have to. Passionate about test automation, 
              CI/CD pipelines, and building quality into every release.
            </p>
            <div className="mt-8 flex gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <a href="#contact" className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
                Get in Touch
              </a>
              <a href="#projects" className="px-5 py-2.5 rounded-md border border-border text-foreground font-medium text-sm hover:border-primary/50 transition-colors">
                View Work
              </a>
            </div>
          </div>
          <div className="shrink-0 animate-fade-in flex items-center justify-center">
            <img
              src={profilePhoto}
              alt="Tanvir Ahmed"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover object-top border-4 border-primary/30 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 border-t border-border">
        <div className="section-container">
          <SectionTitle label="about" />
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4 text-secondary-foreground leading-relaxed">
              <p>
                I'm a detail-oriented QA Engineer with 3 years of experience ensuring 
                software quality across web and mobile platforms. I specialize in building 
                robust automation frameworks and integrating testing into CI/CD workflows.
              </p>
              <p>
                My approach combines strategic thinking with hands-on technical skills — from 
                writing test plans and exploratory testing to building end-to-end automation 
                suites that catch bugs before they reach production.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-5 font-mono text-sm glow-border">
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-destructive/70" />
                <span className="w-3 h-3 rounded-full bg-muted-foreground/70" />
                <span className="w-3 h-3 rounded-full bg-primary/70" />
              </div>
              <div className="space-y-1 text-muted-foreground">
                <p><span className="text-primary">const</span> qaEngineer = {"{"}</p>
                <p className="pl-4">name: <span className="text-accent">"Tanvir Ahmed"</span>,</p>
                <p className="pl-4">experience: <span className="text-primary">3</span>,</p>
                <p className="pl-4">focus: <span className="text-accent">"Automation"</span>,</p>
                <p className="pl-4">bugs_found: <span className="text-primary">1200</span>+,</p>
                <p className="pl-4">tests_written: <span className="text-primary">2500</span>+,</p>
                <p className="pl-4">coffee_consumed: <span className="text-primary">Infinity</span>,</p>
                <p>{"}"};</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 border-t border-border">
        <div className="section-container">
          <SectionTitle label="skills" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 hover:border-primary/40 transition-colors group"
              >
                <skill.icon className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-secondary-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 border-t border-border">
        <div className="section-container">
          <SectionTitle label="experience" />
          <div className="space-y-8">
            {experience.map((job, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <span className="text-muted-foreground text-sm">@ {job.company}</span>
                  <span className="font-mono text-xs text-primary ml-auto">{job.period}</span>
                </div>
                <ul className="space-y-1">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-secondary-foreground flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 border-t border-border">
        <div className="section-container">
          <SectionTitle label="projects" />
          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((p) => (
              <div
                key={p.title}
                className="bg-card border border-border rounded-lg p-5 hover:glow-border hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <h3 className="font-semibold">{p.title}</h3>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs px-2 py-1 rounded bg-muted text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 border-t border-border">
        <div className="section-container text-center">
          <SectionTitle label="contact" center />
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Interested in working together? Let's connect.
          </p>
          <div className="flex justify-center gap-5">
            <ContactLink icon={Mail} label="Email" href="mailto:tanvir60131@gmail.com" />
            <ContactLink icon={Linkedin} label="LinkedIn" href="https://www.linkedin.com/in/tanvir-ahmed-49943b174" />
            <ContactLink icon={Github} label="GitHub" href="https://github.com/niloytanvir" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="section-container text-center text-xs text-muted-foreground font-mono">
          <span className="text-primary">✓</span> All tests passing · Built with care · © 2026
        </div>
      </footer>
    </div>
  );
};

const SectionTitle = ({ label, center }: { label: string; center?: boolean }) => (
  <h2 className={`text-xs font-semibold uppercase tracking-widest text-primary mb-8 ${center ? "text-center" : ""}`}>
    {label}
  </h2>
);

const ContactLink = ({ icon: Icon, label, href }: { icon: React.ElementType; label: string; href: string }) => (
  <a
    href={href}
    className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg text-sm text-secondary-foreground hover:border-primary/50 hover:text-primary transition-colors"
  >
    <Icon className="w-4 h-4" />
    {label}
  </a>
);

export default Portfolio;
