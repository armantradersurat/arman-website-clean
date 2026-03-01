import React, { useState, useEffect } from "react";

export default function App() {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    setVisible(true);
  }, []);

  const [products, setProducts] = useState([
    { id: 1, name: "Gold Jari 75D", category: "Jari", oldPrice: 260, price: 230, stockQty: 5, image: "/images/jari1.jpg" },
    { id: 2, name: "Silver Zari Premium", category: "Zari", oldPrice: 240, price: 210, stockQty: 2, image: "/images/jari2.jpg" },
    { id: 3, name: "Copper Metallic Thread", category: "Thread", oldPrice: 200, price: 180, stockQty: 0, image: "/images/jari3.jpg" },
    { id: 4, name: "Ultra Shine Zari", category: "Zari", oldPrice: 290, price: 260, stockQty: 8, image: "/images/jari4.jpg" },
  ]);

  const calculateDiscount = (oldPrice, price) =>
    Math.round(((oldPrice - price) / oldPrice) * 100);

  const updatePrice = (id, newPrice) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, price: Number(newPrice) } : p
    ));
  };

  const filteredProducts = products.filter(p =>
    (category === "All" || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", background: "#f8f9fa" }}>

      {/* NAVBAR */}
      <nav style={navStyle}>
        <h2 style={logoStyle}>Arman Trader</h2>
        <div>Surat | Pan India Delivery</div>
      </nav>

      {/* HERO */}
      <section style={heroStyle}>
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "1s ease"
        }}>
          <h1 style={metallicText}>Premium Jari & Zari Supplier</h1>
          <p>Wholesale Textile Materials | Fast Delivery Across India</p>
        </div>
      </section>

      <h2 style={goldHeading}>Our Premium Products</h2>

      {/* SEARCH + FILTER */}
      <div style={filterContainer}>
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={searchStyle}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)} style={selectStyle}>
          <option value="All">All</option>
          <option value="Jari">Jari</option>
          <option value="Zari">Zari</option>
          <option value="Thread">Thread</option>
        </select>
      </div>

      {/* PRODUCT GRID */}
      <section style={gridStyle}>
        {filteredProducts.map(product => (
          <div key={product.id} style={cardStyle}>

            <div style={{ position: "relative" }}>
              <img src={product.image} alt="" style={imgStyle} />

              {product.stockQty > 0 && (
                <div style={discountTag}>
                  🔥 {calculateDiscount(product.oldPrice, product.price)}% OFF
                </div>
              )}

              {product.stockQty > 0 && product.stockQty <= 3 && (
                <div style={limitedTag}>⚠ Limited Stock</div>
              )}
            </div>

            <h3>{product.name}</h3>

            <p>
              <span style={oldPriceStyle}>₹{product.oldPrice}</span>
              <span style={newPriceStyle}> ₹{product.price}</span>
            </p>

            <p style={{ color: product.stockQty > 0 ? "green" : "red" }}>
              {product.stockQty > 0 ? `In Stock (${product.stockQty})` : "Out of Stock"}
            </p>

            {/* ADMIN PRICE EDIT */}
            <input
              type="number"
              value={product.price}
              onChange={(e) => updatePrice(product.id, e.target.value)}
              style={adminInput}
            />

            {product.stockQty > 0 && (
              <a
                href={`https://wa.me/919625686843?text=Hello I want ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                style={waBtn}
              >
                Order on WhatsApp
              </a>
            )}

          </div>
        ))}
      </section>

      <footer style={footerStyle}>
        © 2026 Arman Trader | Surat | Pan India Delivery
      </footer>

    </div>
  );
}

/* STYLES */

const navStyle = {
  background: "#ffffff",
  padding: "15px 5%",
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
};

const logoStyle = {
  background: "linear-gradient(90deg,#d4af37,#ffd700,#b8860b)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold"
};

const heroStyle = {
  padding: "100px 5%",
  textAlign: "center",
  background: "linear-gradient(135deg,#ffffff,#f1f3f5)"
};

const metallicText = {
  fontSize: "42px",
  background: "linear-gradient(90deg,#d4af37,#ffd700,#b8860b)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const goldHeading = {
  textAlign: "center",
  fontSize: "30px",
  margin: "60px 0 40px",
  background: "linear-gradient(90deg,#FFD700,#f5c542,#b8860b)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold"
};

const filterContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginBottom: "40px",
  flexWrap: "wrap"
};

const searchStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  width: "220px"
};

const selectStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const gridStyle = {
  padding: "0 5% 60px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "25px"
};

const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
};

const imgStyle = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
  borderRadius: "10px"
};

const discountTag = {
  position: "absolute",
  top: "10px",
  left: "10px",
  background: "red",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "20px",
  fontSize: "12px"
};

const limitedTag = {
  position: "absolute",
  bottom: "10px",
  left: "10px",
  background: "orange",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "20px",
  fontSize: "12px"
};

const oldPriceStyle = {
  textDecoration: "line-through",
  color: "gray",
  marginRight: "8px"
};

const newPriceStyle = {
  color: "#d4af37",
  fontWeight: "bold",
  fontSize: "18px"
};

const adminInput = {
  width: "100%",
  padding: "6px",
  marginTop: "8px",
  borderRadius: "6px",
  border: "1px solid #ddd"
};

const waBtn = {
  display: "block",
  marginTop: "10px",
  padding: "10px",
  background: "#25D366",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "6px",
  textAlign: "center"
};

const footerStyle = {
  background: "#ffffff",
  padding: "20px",
  textAlign: "center",
  borderTop: "1px solid #eee"
};
