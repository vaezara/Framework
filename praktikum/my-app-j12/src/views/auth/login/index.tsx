import Link from "next/link";
import { useRouter } from "next/router";
import styles from './login.module.scss';
import { useState } from "react";

const TampilanLogin = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Logic login sederhana
    console.log("Tombol login diklik");
    if(email === "nova@gmail.com" && password === "nova123") {
      push('/produk');
    } else {
      setError("Email atau password salah!");
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <h1 className={styles.title}>Selamat Datang</h1>
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

        <button onClick={handleLogin} className={styles.btn}>Login</button>

        <p className={styles.register}>
          Belum punya akun? <Link href="/auth/register">Daftar di sini</Link>
        </p>
      </div>
    </div>
  );
};

export default TampilanLogin;