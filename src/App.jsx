import React, { useState } from "react";

export default function App() {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([
    { id: 1, name: "Gold Jari 75D", price: "₹230/kg", category: "Jari", image: "/images/jari1.jpg", stock: true, desc: "High shine premium gold jari thread for textile and embroidery use." },
    { id: 2, name: "Copper Metallic Jari", price: "₹180/kg", category: "Jari", image: "/images/jari2.jpg", stock: true, desc: "Durable copper metallic jari suitable for heavy fabric work." },
    { id: 3, name: "Silver Zari Premium", price: "₹210/kg", category: "Zari", image: "/images/jari3.jpg", stock: false, desc: "Premium silver zari for embroidery and weaving industry." },
    { id: 4, name: "Golden Zari Ultra Shine", price: "₹170/kg", category: "Zari", image: "/images/jari4.jpg", stock: true, desc: "Ultra shine zari used in sarees and bridal fabrics." },
    { id: 5, name: "Embroidery Thread Metallic", price: "₹450/roll", category: "Thread", image: "/images/jari5.jpg", stock: true, desc: "Metallic embroidery thread for decorative stitching." },
    { id: 6, name: "Heavy Work Metallic Thread", price: "₹235/kg", category: "Thread", image: "/images/jari6.jpg", stock: true, desc: "Strong metallic thread for heavy embroidery designs." },
  ]);

  const toggleStock = (id) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, stock: !p.stock } : p
    ));
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>

      {/* SEO Title */}
      <title>Arman Trader | Premium Jari & Zari Supplier | Pan India Delivery</title>

      {/* NAVBAR */}
      <nav style={navStyle}>
        <h2 style={logoStyle}>Arman Trader</h2>
        <div>Surat | Pan India Delivery</div>
      </nav>

      {/* HERO */}
      <section style={heroStyle}>
        <h1 style={metallicText}>Premium Jari & Zari Supplier</h1>
        <p>Wholesale Textile Materials | Fast Dispatch Across India</p>
      </section>

      {/* PRODUCTS GRID */}
      <section style={gridStyle}>
        {products.map(product => (
          <div key={product.id} style={cardStyle(product.stock)}>
            
            <img
              src={product.image}
              alt={product.name}
              style={imgStyle}
              onClick={() => setSelectedProduct(product)}
            />

            <h3>{product.name}</h3>
            <p style={{ color: "#d4af37" }}>{product.price}</p>
            <p style={{ color: product.stock ? "#4ade80" : "red" }}>
              {product.stock ? "In Stock" : "Out of Stock"}
            </p>

            {product.stock && (
              <a
                href={`https://wa.me/919625686843?text=Hello I want details for ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                style={waBtn}
              >
                Order on WhatsApp
              </a>
            )}

            {/* ADMIN STOCK TOGGLE */}
            <button onClick={() => toggleStock(product.id)} style={adminBtn}>
              Toggle Stock
            </button>

          </div>
        ))}
      </section>

      {/* PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <div style={modalOverlay} onClick={() => setSelectedProduct(null)}>
          <div style={modalBox} onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt="" style={{ width: "100%", borderRadius: "10px" }} />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.desc}</p>
            <p style={{ color: "#d4af37" }}>{selectedProduct.price}</p>
            <button onClick={() => setSelectedProduct(null)} style={closeBtn}>Close</button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={footerStyle}>
        © 2026 Arman Trader | Surat | Pan India Delivery
      </footer>

    </div>
  );
}

/* STYLES */

const navStyle = {
  background: "#0d1b2a",
  color: "#fff",
  padding: "15px 5%",
  display: "flex",
  justifyContent: "space-between"
};

const logoStyle = {
  background: "linear-gradient(90deg,#d4af37,#ffd700,#b8860b)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const heroStyle = {
  padding: "80px 5%",
  textAlign: "center",
  background: "#111",
  color: "#fff"
};

const metallicText = {
  fontSize: "40px",
  background: "linear-gradient(90deg,#d4af37,#ffd700,#b8860b)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const gridStyle = {
  padding: "40px 5%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px"
};

const cardStyle = (stock) => ({
  background: "#0d1b2a",
  padding: "20px",
  borderRadius: "12px",
  border: stock ? "1px solid #d4af37" : "1px solid red",
  color: "#fff"
});

const imgStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "8px",
  cursor: "pointer"
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

const adminBtn = {
  marginTop: "10px",
  padding: "6px",
  background: "#444",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modalBox = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "90%",
  maxWidth: "500px"
};

const closeBtn = {
  marginTop: "15px",
  padding: "10px",
  background: "#111",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

const footerStyle = {
  background: "#0d1b2a",
  color: "#fff",
  padding: "20px",
  textAlign: "center"
};
