import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'

import { FiTwitter } from 'react-icons/fi'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/TwitterModal.module.css'

export default function twitterModal () {
  const { level, closeLevelUpModal, currentExperience } = useContext(ChallengeContext)
  return (

        <div className={styles.overlay}>
       <Head>
        <title> Twitter| Movei.it</title>
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
           <button>
           <a href="https://twitter.com/share?"
            data-show-count="true"
            target="_blank"
            >
               <p>Compartilhar agora</p>
            </a><a href=""></a>

               <FiTwitter size={26} color="#2aa9e0" />

           </button>

        </footer>

        </div>
     </div>

    </div>
  )
}
