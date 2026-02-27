import Link from "next/link";

const products = ["baju", "celana", "sepatu", "tas", "jaket"];

const MainSection = () => {
  return (
    <section className="p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Daftar Produk
      </h2>
      <ul className="grid grid-cols-2 gap-4">
        {products.map((item) => (
          <li
            key={item}
            className="bg-white p-4 rounded hover:bg-blue-50 transition"
          >
            <Link href={`/produk/${item}`} className="text-lg font-semibold">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainSection;