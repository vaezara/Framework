import styles from "@/styles/maintenance.module.scss";
import { title } from "node:process";

const CustomMaintenance = () => {
    return (
        <div className={styles.error}>
            <title>Server Unavailable</title>
            <img src="/maintenance.png" alt="maitenance" className={styles.error__image} />
            <h1>503 - Service Unavailable</h1>
            <p>Mohon maaf, server sedang tidak dapat memproses permintaan Anda 
                karena sedang dalam pemeliharaan atau mengalami gangguan sementara. 
                Silakan coba kembali nanti.</p>
        </div>
    );
};
export default CustomMaintenance;