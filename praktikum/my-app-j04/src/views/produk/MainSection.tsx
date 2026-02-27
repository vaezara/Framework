const MainSection = () => {
  const products = ["Produk 1", "Produk 2", "Produk 3"];

  return (
    <section>
      <h1>
        <strong>Daftar Produk</strong>
      </h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default MainSection;