import { motion } from 'framer-motion'
import styles from './Stack.module.css'

const groups = [
  {
    title: 'Languages',
    items: ['Python', 'C / C++', 'Java', 'JavaScript', 'SQL'],
  },
  {
    title: 'AI / ML',
    items: ['LangGraph', 'LangChain', 'Anthropic API', 'LLM Agents', 'RAG', 'Audio ML'],
  },
  {
    title: 'Infrastructure',
    items: ['FastAPI', 'Postgres', 'Docker', 'Chroma', 'Git'],
  },
]

export default function Stack() {
  return (
    <section id="stack" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.eyebrow}>What I work with</p>
          <h2 className={styles.heading}>Stack.</h2>
        </motion.div>

        <div className={styles.grid}>
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              className={styles.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.items}>
                {group.items.map(item => (
                  <li key={item} className={styles.item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
