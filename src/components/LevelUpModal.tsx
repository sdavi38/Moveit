import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'

import { FiTwitter } from 'react-icons/fi'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/LevelUpModal.module.css'
import { useRouter } from 'next/router'

export function LevelUpModal () {
  const { level, closeLevelUpModal, currentExperience } = useContext(ChallengeContext)

  const router = useRouter()

  function handleTwitter () {
    router.push('./twitterModal')
  }
  return (

        <div className={styles.overlay}>
       <Head>
        <title> UpModal| Movei.it</title>
      </Head>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns!</strong>
        <p>Você alcançou um novo nível.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar" />
        </button>
        <div>
          <footer className={styles.buttonFooter}>
           <button onClick={handleTwitter}>
            <p>Compartilhar no Twitter</p>

               <FiTwitter size={26} color="#2aa9e0" />

           </button>

        </footer>

        </div>
     </div>

    </div>
  )
}
