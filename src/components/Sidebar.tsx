import Link from 'next/link';
import {useRouter} from 'next/router'
import { useState } from 'react';
import Cookies from 'js-cookie';
import styles from '../styles/components/Sidebar.module.css';



interface SidebarProps {
  page: 'dashboard' | 'leaderboard';
}

export function Sidebar({page}:SidebarProps) {
  const router = useRouter();


  function handleLogout() {
    Cookies.remove('challengesCompleted');
    Cookies.remove('level');
    Cookies.remove('username');
    Cookies.remove('currentExperience');
   
    router.push('/');
  }

  return (
    <div className={styles.container}>
    <img src="/logo_blue.svg" alt="logo"/>

    <div className={styles.options}>
      <button disabled={page === 'dashboard'}>
        <Link href="/" replace>
          <a>
            {
              page === 'dashboard' 
              ? <img src="/icons/home_blue.svg" alt="award"/> 
              : <img src="/icons/home.svg" alt="award"/>
            }
          </a>
        </Link>
      </button>

      <button disabled={page === 'leaderboard'}>
        <Link href="/leaderboard" replace>
          <a>
            {
              page === 'leaderboard' 
              ? <img src="/icons/award_blue.svg" alt="award"/> 
              : <img src="/icons/award.svg" alt="award"/>
            }
          </a>
        </Link>
      </button>
    </div>

    <button onClick={handleLogout}>
      <img src="/icons/logout.svg" alt="logout"/>
    </button>
  </div>
)
}