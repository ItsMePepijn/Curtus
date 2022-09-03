import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Api() {
  return(
    <div className={styles.container}>
      <Head>
        <title>Link shortener</title>
        <meta name="description" content="THE link shortening solution for creating your short links made easy and safe!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the link api!
        </h1>

        <p className={styles.description}>
          Get started by reading{' '}
          <code className={styles.code}><a href='/docs'>/docs</a></code>
        </p>
      </main>

    </div>
  )
}
