import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <h2 className={styles.cta}>Let's build something.</h2>
          <a href="mailto:abhigyandey2@gmail.com" className={styles.email}>
            abhigyandey2@gmail.com
          </a>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copy}>Abhigyan Dey</span>
          <nav className={styles.links}>
            <a href="https://github.com/AbhigyanD" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/deyabhig/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer">Résumé</a>
            <a href="mailto:abhigyandey2@gmail.com">Email</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
