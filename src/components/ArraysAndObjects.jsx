import styles from './ArraysAndObject.module.css'

export function ArraysAndObjects({title, score, numRatings, year}) {
  return (
    <div className={styles.card}>
      <span className={styles.titleTvShow}>{title}</span>
      <div className={styles.rating}>
        <span>Score: {score}</span>
        <span>Ratings: {numRatings}</span>
        <span>Year: {year}</span>
      </div>
    </div>
  )
}