import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

function Card({ project }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${project.featured ? styles.featured : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardTop}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <span className={styles.arrow}>↗</span>
        </div>
        <p className={styles.cardDesc}>{project.description}</p>
        <ul className={styles.tags}>
          {project.tags.map(tag => (
            <li key={tag} className={styles.tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </motion.a>
  )
}

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.eyebrow}>Selected Work</p>
          <h2 className={styles.heading}>Projects I've built.</h2>
          <p className={styles.subheading}>
            Agent systems, retrieval pipelines, audio ML, and full-stack apps.
          </p>
        </motion.div>

        {featured.map(p => <Card key={p.title} project={p} />)}
        <div className={styles.grid}>
          {rest.map(p => <Card key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  )
}
