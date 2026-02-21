import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Profile() {
  return (
    <div>
      <h3>Profil Saya ^-^</h3>
      <br />
      <p><strong>Nama:</strong> Nova Eliza Maharani</p>
      <p><strong>Kelas:</strong> TI-3D</p>
      <p><strong>Program Studi</strong> D4-Teknik Informatika</p>
      <p><strong>Jurusan:</strong> Teknologi Informasi</p>
      <br />
      <Link href="/profile/edit">
        <button>Edit Profile</button>
      </Link>
    </div>
  );
}