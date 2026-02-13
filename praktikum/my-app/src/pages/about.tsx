import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Tugas 1 Praktikum</h1>
      <h3>Nama : Nova Eliza Maharani <br />
        NIM : 2341720252 <br />
        Program Studi : D-IV Teknik Informatika
      </h3>
      <p>
        <Link href="/">Kembali ke Halaman Utama</Link>
      </p>
    </div>
  )
}