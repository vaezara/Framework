import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function EditProfile() {
  return (
    <div className={styles.container}>
      <h3>Edit Profile</h3>
      <form>
        
        <div className={styles.formGroup}>
          <label>Nama</label>
          <input 
            type="text" 
            placeholder="Masukkan nama" 
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Kelas</label>
          <input 
            type="text" 
            placeholder="Masukkan kelas" 
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Program Studi</label>
          <input 
            type="text" 
            placeholder="Masukkan program studi" 
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Jurusan</label>
          <input 
            type="text" 
            placeholder="Masukkan jurusan" 
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.button}>
          Simpan
        </button>
      </form>

      <br />

      <Link href="/profile">
        <button className={styles.buttonSecondary}>
          Lihat Profile
        </button>
      </Link>
    </div>
  );
}