import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Profile() {
  return (
    <div className={styles.container}>
      <h3>My Profile</h3>
      <br />

      <div className={styles.formGroup}>
        <p><strong>Nama:</strong> Nova Eliza Maharani</p>
      </div>

      <div className={styles.formGroup}>
        <p><strong>Kelas:</strong> TI-3D</p>
      </div>

      <div className={styles.formGroup}>
        <p><strong>Program Studi:</strong> D4-Teknik Informatika</p>
      </div>

      <div className={styles.formGroup}>
        <p><strong>Jurusan:</strong> Teknologi Informasi</p>
      </div>

      <Link href="/profile/edit">
        <button className={styles.button}>Edit Profile</button>
      </Link>
    </div>
  );
}