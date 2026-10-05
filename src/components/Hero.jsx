import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.content}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          New Grad · AI/ML Engineering
        </motion.p>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Abhigyan Dey
        </motion.h1>
        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Building agent systems and tooling — stateful pipelines,
          LLM orchestration, and infrastructure that holds up under real workloads.
        </motion.p>
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#projects" className={styles.primary}>See my work</a>
          <div className={styles.socials}>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Résumé
              <span className={styles.arrow}>→</span>
            </a>
            <a
              href="https://github.com/AbhigyanD"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              GitHub
              <span className={styles.arrow}>→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/deyabhig/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              LinkedIn
              <span className={styles.arrow}>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
