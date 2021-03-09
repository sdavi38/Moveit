import Link from 'next/link';
import { FiAward, FiHome, FiLogOut } from 'react-icons/fi';
import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {
  return (
    <div className={styles.container}>
      <img src='./icons/icon.svg' alt="icon" />
      <div className={styles.buttons}>
        <button type="button">
          <div></div>
            <Link href="/">
          <FiHome size={32} />
          </Link>
        </button>
        
        <button type="button" disabled>
          <div></div>
           <Link href="/leaderbord">
          <FiAward size={32} />
          </Link>
        </button>
      </div>
      <div className={styles.logOut}>
        <Link href="/">
          <FiLogOut size={28} />
        </Link>
      </div>
    </div>
  );
}
