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
              Senior Full Stack Engineer | AI & Web3 Product Developer 👨‍💻
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
            <div className="pl-4 py-2 relative text-muted-foreground leading-relaxed text-sm md:text-base">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              <p>
                🚀{" "}
                <strong className="text-foreground">Full Stack Software Engineer</strong>{" "}
                specializing in{" "}
                <strong className="text-foreground">Web3 protocols</strong> and{" "}
                <strong className="text-foreground">AI product development</strong>,
                with <strong className="text-foreground">5+ years</strong> of experience
                building products from zero to{" "}
                <strong className="text-foreground">8K+ active users</strong> and driving
                over <strong className="text-foreground">$6M in capital raised</strong>.
                Track record of engineering{" "}
                <strong className="text-foreground">high-conversion dApps</strong> 💰,
                leading Agile teams, and architecting scalable cloud infrastructure on{" "}
                <strong className="text-foreground">AWS and Serverless</strong>.
                Accelerates delivery cycles by orchestrating{" "}
                <strong className="text-foreground">agentic AI workflows</strong> 🤖 with
                Cursor, Claude Code, and custom MCP servers — compressing traditional
                software lifecycles by{" "}
                <strong className="text-foreground">2.5×</strong> without sacrificing code
                quality or architectural rigor.
              </p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
