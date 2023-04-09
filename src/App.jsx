import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ArraysAndObjects } from './components/ArraysAndObjects';

import './global.css';

import styles from './App.module.css';

const tvShows = [
  {
    title: 'Planet Earth II',
    score: 9.5,
    year: 2016,
    numRatings: 5000
  },
  {
    title: 'Planet Earth',
    score: 9.4,
    year: 2006,
    numRatings: 5000
  },
  {
    title: 'Breaking Bad',
    score: 9.4,
    year: 2008,
    numRatings: 6000
  },
  {
    title: 'Band Of Brothers',
    score: 9.4,
    year: 2001,
    numRatings: 4900
  },
  {
    title: 'Chernobyl',
    score: 9.3,
    year: 2019,
    numRatings: 4900
  },
  {
    title: 'Jingle All The Way',
    score: 7.1,
    year: 1996,
    numRatings: 5000
  },
  {
    title: 'The Wire',
    score: 9.3,
    year: 2002,
    numRatings: 6000
  }
]

export function App() {
  const [sortedTvShows, setSortedTvShows] = useState([]);

  useEffect(() =>{
    const filteredTvShows = tvShows.reduce((acc, curr) => {
      let index = 0;
      let sameScore = []
      while(index < acc.length && curr < acc[index]) index++;
      sameScore = acc.find((value) => value.score === curr.score);
      if (sameScore){
        if(curr.numRatings > sameScore.numRatings) {
          const sameScoreIndex = acc.findIndex((value) => value.score === curr.score);
          acc.splice(sameScoreIndex, 1)
          acc.push(curr);
        }
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);

    const orderedTvShows = filteredTvShows.sort((a, b) => b.score - a.score);

    setSortedTvShows(orderedTvShows.slice(0,2))
  }, []);

  return (
    <div>
      <Header/>
      <div className={styles.divTitle}>
        <span className={styles.title}> 4 - Arrays and Objects</span>
      </div>
      <div className={styles.wrapper}>
        {sortedTvShows.map(tvShow => {
          return (
            <ArraysAndObjects
              key={tvShow.title}
              title={tvShow.title} 
              score={tvShow.score} 
              numRatings={tvShow.numRatings} 
              year={tvShow.year}
            />
          )
        })}
      </div>
    </div>
    
  )
}
