import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl font-bold mb-2"
              variants={childVariants}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-6"
              variants={childVariants}
            >
              Senior Full Stack Engineer | AI & Web3 Product Developer | React, Node.js, Solidity | Cursor & Claude Code Expert 👨‍💻
            </motion.p>

            <motion.div
              className="flex flex-col gap-2 items-center md:items-start"
              variants={containerVariants}
            >
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Mail className="h-4 w-4 mr-2" />
                ✉️ {personalInfo.email}
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Github className="h-4 w-4 mr-2" />
                🌟 GitHub
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                🔗 LinkedIn
              </motion.a>

              <motion.a
                href={personalInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Send className="h-4 w-4 mr-2" />
                💬 Telegram
              </motion.a>

              <motion.div
                className="flex items-center text-sm text-muted-foreground"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                📍 {personalInfo.location}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 md:mt-0 flex justify-center"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/profile.png"
                alt="Profile"
                className="w-48 md:w-60 rounded-full relative ring-2 ring-blue-500/50"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </motion.div>

        <MotionWrapper>
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-blue-500/20 dark:border-blue-500/10 shadow-sm">
            <div className="pl-4 py-2 relative space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              
              <p className="text-foreground font-medium text-base md:text-lg">
                Full Stack Software Engineer specializing in Web3 protocols and AI product development. Over 5 years of experience building applications from 0 to 8K+ active users and optimizing Web3 platforms to drive over $6M in funding.
              </p>

              <div>
                <h3 className="text-foreground font-semibold flex items-center gap-2 mb-2">
                  🚀 MEASURED IMPACT:
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="text-foreground font-medium">Web3 Growth Engine:</span> Engineered an ICO dApp utilizing Solidity, Ethers.js, and Wagmi; optimized frontend performance (reducing LCP and INP), boosting conversion rate from 40% to 90%, contributing directly to a $6M capital raise.
                  </li>
                  <li>
                    <span className="text-foreground font-medium">Product Scale:</span> Spearheaded the full-stack architecture of a scalable B2B/B2C application from scratch, scaling it seamlessly to over 8K+ active users on AWS and Serverless infrastructure.
                  </li>
                  <li>
                    <span className="text-foreground font-medium">Team Leadership:</span> Guided Agile/Scrum teams of 5-6 developers, driving clean code standards, microservices migration, and robust automated testing (Jest, Cypress) to reduce production bugs.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground font-semibold flex items-center gap-2 mb-2">
                  💻 TECHNICAL STACK:
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="text-foreground font-medium">Frontend:</span> React, Next.js, TypeScript, React Native, Expo, Redux, Responsive UX design.
                  </li>
                  <li>
                    <span className="text-foreground font-medium">Backend & DB:</span> Node.js, Nest.js, Serverless, PostgreSQL, MongoDB, RESTful API design.
                  </li>
                  <li>
                    <span className="text-foreground font-medium">Web3:</span> Solidity, Smart Contracts, Hardhat, Ethers.js, Wagmi, dApp Development.
                  </li>
                  <li>
                    <span className="text-foreground font-medium">AI Systems:</span> Retrieval-Augmented Generation (RAG), LLM integration, Prompt Engineering.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground font-semibold flex items-center gap-2 mb-2">
                  🤖 AI-AUGMENTED SOFTWARE ENGINEERING:
                </h3>
                <p>
                  I build software at the speed of thought. By orchestrating advanced agentic coding workflows, I utilize Cursor, Claude Code, and OpenCode in tandem with custom Model Context Protocol (MCP) servers. I write and maintain Git-versioned agent instructions (CLAUDE.md, .cursorrules) and custom agent skills (.ai/skills) to compress traditional software delivery lifecycles by 3x. I don't just generate code; I leverage AI agents under strict architectural boundaries, verifying every change through structured CI/CD pipelines.
                </p>
              </div>

              <div>
                <h3 className="text-foreground font-semibold flex items-center gap-2 mb-2">
                  📈 TARGET ROLES:
                </h3>
                <p>
                  Looking for Senior Frontend, Full Stack, or AI/Web3 Software Engineer roles in fast-paced startups where I can scale products and implement next-generation AI workflows.
                </p>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
