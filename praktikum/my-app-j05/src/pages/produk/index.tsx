import { useRouter } from "next/router";
import { useEffect } from "react";
import ProdukView from "@/views/produk/ProdukView";
const ProdukPage = () => {
  const { push } = useRouter();

  useEffect(() => {
    const isLogin = true; 

    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  return <ProdukView />;
};

export default ProdukPage;