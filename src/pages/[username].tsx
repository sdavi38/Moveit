import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import { GetServerSideProps } from 'next'
import { CompletedChalenges } from '../components/CompletedChalenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengeProvider } from '../contexts/ChallengeContext'
import { Sidebar } from '../components/Sidebar'
import { useRouter } from 'next/router'

interface userGithub {
  name: string;
  avatar_url: string;
}

interface HomeProps {
  user: userGithub;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  totalAmount:number;
}

export default function Home (props: HomeProps) {
  const { user } = props

  const router = useRouter()

  /* useEffect(() => {
    const checkUserLoggedIn = Cookies.get('user');

    if (!checkUserLoggedIn) {
      router.push('/');
    }
  }, []); */
  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      totalAmount={props.totalAmount}
    >
      <div className={styles.container}>
        <Head>
          <title>{user.name} | Move.it</title>
        </Head>
        <Sidebar page="dashboard" />
        <div className={styles.content}>

          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile {...user} />
                <CompletedChalenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallengeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { username } = ctx.params
  const response = await fetch(`https://api.github.com/users/${username}`)
  const user = await response.json()

  const { level, currentExperience, challengesCompleted, totalAmount } = ctx.req.cookies

  return {
    props: {
      user,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      totalAmount: Number(totalAmount)

    }
  }
}
