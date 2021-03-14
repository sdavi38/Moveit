import Head from 'next/head'

import styles from '../styles/pages/Leaderbord.module.css'

import { Sidebar } from '../components/Sidebar'
import { useContext } from 'react'
import { ChallengeContext, ChallengeProvider } from '../contexts/ChallengeContext'
// import api from '../services/api';

interface userGithub {
  name: string;
  avatar_url: string;
}

interface LeaderboardProps {
  user: userGithub;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  totalAmount:number;
}

export default function leaderboard (propsLeaderboard: LeaderboardProps) {
  const { user } = propsLeaderboard
  const { level, totalAmount, completeChallenge } = useContext(ChallengeContext)
  return (

    <ChallengeProvider
    level={propsLeaderboard.level}
    currentExperience={propsLeaderboard.currentExperience}
    challengesCompleted={propsLeaderboard.challengesCompleted}
    totalAmount={propsLeaderboard.totalAmount}
    >

    <div className={styles.container}>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>

      <Sidebar page="leaderboard" />

      <div className={styles.leaderboard}>
        <strong>Leaderboard</strong>

        <section className={styles.info}>
          <p>POSIÇÃO</p>
          <p>USUÁRIO</p>
          <p>DESAFIOS</p>
          <p>EXPERIÊNCIA</p>
        </section>

          <section className={styles.users}>
            <div className={styles.position}>
            <p>1</p>
            </div>

            <div className={styles.userInfo}>
            <p>{level}</p>

            <div className={styles.user}>
                <img
                  src="https://avatars.githubusercontent.com/u/61067057?s=460&u=f372f3e9b503936fb5a01148b555041e29230fd3&v=4"
                  alt="user image"
                />
                <div>
                  <strong>David Bernardo</strong>
                  <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 01 </p>
                </div>
              </div>

              <div className={styles.text}>
                <p> 25 </p>
                <p>completados</p>
              </div>

              <div className={styles.text}>
                <p>1250</p>
                <p>xp</p>
              </div>
            </div>
          </section>

      </div>
    </div>
     </ChallengeProvider>
  )
}
