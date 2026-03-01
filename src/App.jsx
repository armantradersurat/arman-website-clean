import React, { useState, useEffect } from "react";

export default function App() {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const [products, setProducts] = useState([
    { id: 1, name: "Gold Jari 75D", price: "₹230/kg", image: "/images/jari1.jpg", stock: true, desc: "Premium gold jari for embroidery use." },
    { id: 2, name: "Silver Zari Premium", price: "₹210/kg", image: "/images/jari2.jpg", stock: true, desc: "High shine silver zari for sarees." },
    { id: 3, name: "Copper Metallic Thread", price: "₹180/kg", image: "/images/jari3.jpg", stock: false, desc: "Durable metallic thread." },
    { id: 4, name: "Ultra Shine Zari", price: "₹260/kg", image: "/images/jari4.jpg", stock: true, desc: "Luxury zari for bridal fabrics." },
    { id: 5, name: "Heavy Work Jari", price: "₹250/kg", image: "/images/jari5.jpg", stock: true, desc: "Strong metallic jari." },
    { id: 6, name: "Embroidery Roll Thread", price: "₹450/roll", image: "/images/jari6.jpg", stock: true, desc: "Smooth metallic embroidery thread." },
  ]);

  const toggleStock = (id) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, stock: !p.stock } : p
    ));
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", scrollBehavior: "smooth" }}>

      {/* NAVBAR */}
      <nav style={navStyle}>
        <h2 style={logoStyle}>Arman Trader</h2>
        <div style={{ color: "#fff" }}>Surat | Pan India Delivery</div>
      </nav>

      {/* HERO SECTION */}
      <section style={heroStyle}>
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 1s ease"
        }}>
          <h1 style={metallicText}>Premium Jari & Zari Supplier</h1>
          <p>Wholesale Textile Materials | Fast Delivery Across India</p>
        </div>
      </section>

      {/* FEATURED PRODUCT SLIDER */}
      <section style={sliderSection}>
        <h2 style={{ color: "#d4af37" }}>Featured Products</h2>
        <div style={sliderContainer}>
          {products.slice(0, 4).map(product => (
            <div key={product.id} style={sliderCard}>
              <img src={product.image} alt="" style={{ width: "100%", borderRadius: "10px" }} />
              <h4>{product.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID */}
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

            <button onClick={() => toggleStock(product.id)} style={adminBtn}>
              Toggle Stock
            </button>

          </div>
        ))}
      </section>

      {/* PRODUCT MODAL */}
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

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919625686843"
        target="_blank"
        rel="noopener noreferrer"
        style={floatingBtn}
      >
        💬
      </a>

      {/* FOOTER */}
      <footer style={footerStyle}>
        © 2026 Arman Trader | Surat | Pan India Delivery
      </footer>

    </div>
  );
}

/* ===== STYLES ===== */

const navStyle = {
  background: "#0d1b2a",
  padding: "15px 5%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const logoStyle = {
  background: "linear-gradient(90deg,#d4af37,#ffd700,#b8860b)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const heroStyle = {
  padding: "120px 5%",
  textAlign: "center",
  background: "linear-gradient(135deg,#000,#1c1c1c,#000)",
  color: "#fff"
};

const metallicText = {
  fontSize: "42px",
  background: "linear-gradient(90deg,#d4af37,#ffd700,#b8860b)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const sliderSection = {
  padding: "60px 5%",
  background: "#111",
  textAlign: "center",
  color: "#fff"
};

const sliderContainer = {
  display: "flex",
  overflowX: "auto",
  gap: "20px",
  paddingTop: "20px"
};

const sliderCard = {
  minWidth: "250px",
  background: "#0d1b2a",
  padding: "15px",
  borderRadius: "12px"
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
  background: "rgba(0,0,0,0.85)",
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

const floatingBtn = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  background: "#25D366",
  color: "#fff",
  padding: "15px",
  borderRadius: "50%",
  fontSize: "22px",
  textDecoration: "none",
  boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
};

const footerStyle = {
  background: "#0d1b2a",
  color: "#fff",
  padding: "20px",
  textAlign: "center"
};
