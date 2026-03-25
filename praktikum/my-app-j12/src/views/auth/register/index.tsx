import Link from "next/link";
import { useRouter } from "next/router";
import styles from './register.module.scss';
import { useState } from "react";

const TampilanRegister = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    // Logic register sederhana
    if (!email || !password || !confirmPassword) {
      setError("Semua field wajib diisi!");
      return;
    }
    if(password !== confirmPassword){
      setError("Password tidak sama!");
      return;
    }
    // Sukses register → redirect ke produk
    push('/produk');
  }

  return (
    <div className={styles.register}>
      <div className={styles.card}>
        <h1 className={styles.title}>Buat Akun Baru</h1>
        {error && <p className={styles.error}>{error}</p>}

        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />

        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />

        <input 
          type="password" 
          placeholder="Konfirmasi Password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={styles.input}
        />

        <button onClick={handleRegister} className={styles.btn}>Register</button>

        <p className={styles.login}>
          Sudah punya akun? <Link href="/auth/login">Login di sini</Link>
        </p>
      </div>
    </div>
  );
};

export default TampilanRegister;