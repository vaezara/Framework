import { useRouter } from "next/router";
import DetailProdukView from "@/views/produk/DetailProdukView";

const HalamanProduk = () => {
  const { query } = useRouter();

  return <DetailProdukView id={query.id} />;
};

export default HalamanProduk;