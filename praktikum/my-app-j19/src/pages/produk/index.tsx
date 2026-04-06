import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../../views/product";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";
import AppShell from "../../components/layouts/Appshell";
import { ProductType } from "@/types/Product.type";

//const fetcher = (url: string) => fetch(url).then((res) => res.json());

const kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  const [products, setProducts] = useState([]);
   // console.log("products:", products);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);
  //cek apakah data, error, dan isLoading sudah benar
  // console.log("data:", data);
  // console.log("error:", error);
  // console.log("isLoading:", isLoading);

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data?.data} />
    </div>
  );
};

export default kategori;

// export async function getStaticProps() {
//   const products = await retriveProduct("products");

//   return {
//     props: {
//       products,
//     },
//     revalidate: 10, // ISR setiap 10 detik
//   };
// }