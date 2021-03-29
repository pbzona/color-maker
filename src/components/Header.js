import styles from '../css/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerText}>ColorMaker</h1>
    </header>
  )
}

export default Header;