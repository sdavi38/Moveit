import {useContext} from 'react'
import Head from 'next/head'
import styles from '../styles/pages/Learderbord.module.css'
import { Sidebar } from '../components/Sidebar'
import {GetServerSideProps} from 'next'
import {ChallengeProvider } from '../contexts/ChallengeContext'


interface LeaderbordProps{
  level:number;
  currentExperience:number;
  challengesCompleted:number;
  totalAmount:number;
}

export default function Leaderbord(props:LeaderbordProps){
  return(
  <ChallengeProvider
    level={props.level}
    totalAmount={props.totalAmount}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >
    <div className={styles.container}>
      <Head>
      <title> learderbord | moveit.it</title>
       </Head>
      
         <Sidebar/>
        
        <div className={styles.content}>
          <strong>Leaderbord</strong>
          <main>
                   </main>
        </div>
      
   </div>
  </ChallengeProvider>
  )
}
//para a camada frontend(Reactjs)
export const getServerSideProps: GetServerSideProps = async(ctx) =>{
  
  const {level, currentExperience, challengesCompleted, totalAmount} = ctx.req.cookies
 // console.log(user) tudo que ocorre aqui dentro
 //ocorre no servido node
  return{
    props:{ 
    level: Number(level),
    totalAmount:Number(totalAmount), //convertendo uma string em numero 
    currentExperience:Number(currentExperience),
    challengesCompleted:Number(challengesCompleted)
    }
  }
}


