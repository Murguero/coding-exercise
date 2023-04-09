import styles from './Header.module.css'
export function Header() {
  return (
    <header className={styles.header}>
      <span>Others Challenges</span>
      <a href="public\1 - DOM Manipulation.html" target="_blank">1 - DOM Manipulation</a>
      <a href="public\2 - Promises.html" target="_blank">2 - Promises</a>
      <a href="public\3 - Async-Await.html" target="_blank">3 - Async-Await</a>
    </header>
  )
}