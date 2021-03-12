import Head from 'next/head';

import styles from '../styles/pages/Leaderbord.module.css';

import {Sidebar} from "../components/Sidebar"
import { GetServerSideProps, GetStaticProps } from 'next';
import { useContext } from 'react';
import { ChallengeContext, ChallengeProvider } from '../contexts/ChallengeContext';
//import api from '../services/api';


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

export default function leaderboard(props : LeaderboardProps) {
  const { user } = props;
  const { level, totalAmount,completeChallenge } = useContext(ChallengeContext);
  return (

    <ChallengeProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    totalAmount={props.totalAmount}
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
            
            </div>

            <div className={styles.userInfo}>

            <div className={styles.user}>
                <img 
                  src={user.avatar_url} 
                  alt="user image"
                />

                <div>
                  <strong>{user.name}</strong>
                  <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                  </p>
                </div>
              </div>

              <div className={styles.text}>
                <p>{completeChallenge}</p>
                <p>completados</p>
              </div>
              
              <div className={styles.text}>
                <p>{totalAmount}</p>
                <p>xp</p>
              </div>
            </div>
          </section>
         
      </div>
    </div>
     </ChallengeProvider>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const  username  = ctx.params;
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();

  const { level, currentExperience, challengesCompleted,totalAmount,  } = ctx.req.cookies;

  return {
    props: {
      user,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      totalAmount:Number(totalAmount)
    
    },
  };
};