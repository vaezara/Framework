import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>About Aplikasi</h1>
          
        <p>
          Ini adalah aplikasi sederhana berbasis <b>Next.js</b> yang dibuat untuk
          halaman penjualan produk.
        </p>
      </div>
    </>
  )
}