import Head from 'next/head'
import { useRouter } from 'next/router'

import Error404 from '../../404'
import DocNav from '../../../components/DocNav'

import styles from '../../../styles/Docs.module.scss'

import * as docs from '../../api/v0/docs/index'

import fs from 'fs'

export default function Api({data}) {
  const router = useRouter();
  const { id } = router.query
  
  if(!data.dirExists) return <Error404 />

  var endpoints = Object.keys(docs);

  return(
    <div>
      <Head>
        <title>Curtus | v0 Documentation</title>
        <meta name="description" content="THE link shortening solution for creating your short links made easy and safe!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className={styles.boxWide}>
          <DocNav ver="v0" endpoints={endpoints} className={styles.left}/>
          <div className={styles.right}>
            <h1 className="subTitle">
              Welcome to the v0 api docs!
            </h1>
          </div>
          
        </div>

      </main>
    </div>
  )
}

export function getServerSideProps(router){
  const dirExists = fs.existsSync(`./pages/api/v0/docs/${router.query.id}.json`)

  return {
    props: {
      data: {
        dirExists
      }
    }
  }
}