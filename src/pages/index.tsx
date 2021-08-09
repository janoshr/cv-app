import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create your new CV</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to CV-app!
        </h1>

        <p className={styles.description}>
          Get started by
        </p>

        <div className={styles.grid}>
          <Link href="/editor">
            <a className={styles.card} >
              <h2>Go to CV editor</h2>
              <p>Click here to build up a cv or upload your CV by a JSON file and edit it.</p>
            </a>
          </Link>

          <Link href="/about">
            <a className={styles.card} >
              <h2>About CV-app</h2>
              <p>Learn about CV-app</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        Created by János Hajdu Ráfis
      </footer>
    </div>
  )
}