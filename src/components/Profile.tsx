import { useContext, useEffect } from 'react';
import Cookie from 'js-cookie';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

interface UserGitHub {
  name: string;
  avatar_url: string;

}

export function Profile(user: UserGitHub) {
  const { level,totalAmount} = useContext(ChallengeContext);

  useEffect(() => {
    Cookie.set('user', String(user.name));
    Cookie.set('avatar', String(user.avatar_url));
    
  
    }, [user.name, user.avatar_url, ]);

  return (
    <div className={styles.profileContainer}>
      <img src={user?.avatar_url} alt={user?.name} />
      <div>
        <strong>{user?.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
         <span>{totalAmount}</span> 
      </div>
    </div>
  );
}
