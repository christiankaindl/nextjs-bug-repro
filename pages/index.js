import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bug reproduction
        </h1>

        <div className={styles.grid}>
          <Link href="/crashes/123">
            <a className={styles.card}>
              <h3>Go to route &rarr;</h3>
              <p>Does not crash (included in `paths`)</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
