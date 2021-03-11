import Link from 'next/link';
import { useContext} from 'react';
import { FiTwitter } from 'react-icons/fi';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { level, closeLevelUpModal, currentExperience } = useContext(ChallengeContext);
  return (
    <div className={styles.overlay}>
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
            <p>Compartilhar no Twitter</p>
               <FiTwitter size={26} color="#2aa9e0" />
           </button>
       
        </footer>
          
        </div>
     </div>
     
    </div>
  );
}
