import Head from "next/head"
import styles from '../styles/Home.module.scss'

export default function Error404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>404: This page does not exist</title>
        <meta name="description" content="This page does not exist!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1>404 - Page Not Found</h1>
    </div>
  )
}