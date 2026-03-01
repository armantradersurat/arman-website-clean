import React from "react";

export default function App() {
  return (
    <div style={container}>

      {/* NAVBAR */}
      <nav style={navStyle}>
        <h2 style={logoStyle}>Arman Trader</h2>
        <div style={navLinks}>
          <span>Home</span>
          <span>About</span>
          <span>Products</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={heroSection}>
        <div style={heroLeft}>
          <h1 style={heroTitle}>Premium Jari & Zari Supplier</h1>
          <p style={heroText}>
            Wholesale Textile Materials | Fast Delivery Across India
          </p>
          <button style={primaryBtn}>View Products</button>
        </div>

        <div style={heroRight}>
          <div style={imagePlaceholder}></div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section style={trustSection}>
        <div style={trustBox}>
          ⭐ Premium Quality
        </div>
        <div style={trustBox}>
          🚚 Pan India Delivery
        </div>
        <div style={trustBox}>
          💰 Best Wholesale Rates
        </div>
        <div style={trustBox}>
          🏭 Surat Textile Expertise
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={productSection}>
        <h2 style={sectionTitle}>Our Premium Products</h2>

        <div style={grid}>
          {[
            "Gold Jari 75D",
            "Silver Zari Premium",
            "Copper Metallic Thread",
            "Ultra Shine Zari",
            "Heavy Work Jari",
            "Embroidery Roll Thread"
          ].map((item, index) => (
            <div key={index} style={card}>
              <div style={cardImage}></div>
              <h3>{item}</h3>
              <p style={{ color: "#d4af37" }}>Best Wholesale Price</p>
              <button style={secondaryBtn}>Order on WhatsApp</button>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={aboutSection}>
        <h2 style={sectionTitle}>About Arman Trader</h2>
        <p style={aboutText}>
          Arman Trader is a trusted Jari & Zari supplier from Surat,
          providing high-quality textile materials across Pan India.
        </p>
        <p style={aboutText}>
          We offer a wide range of Gold Jari, Silver Zari, Metallic Threads
          and Embroidery materials at competitive wholesale rates.
        </p>
        <p style={aboutText}>
          Our products are known for shine, durability and finishing quality,
          making them ideal for saree manufacturing, bridal wear and textile production.
        </p>
      </section>

      <footer style={footer}>
        © 2026 Arman Trader | Surat | Pan India Delivery
      </footer>

    </div>
  );
}

/* ===== STYLES ===== */

const container = {
  fontFamily: "Poppins, sans-serif",
  background: "#f5f7fa",
  color: "#222"
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 8%",
  background: "#ffffff",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
};

const navLinks = {
  display: "flex",
  gap: "25px",
  cursor: "pointer"
};

const logoStyle = {
  color: "#d4af37",
  fontWeight: "bold"
};

const heroSection = {
  display: "flex",
  flexWrap: "wrap",
  padding: "80px 8%",
  alignItems: "center",
  gap: "40px"
};

const heroLeft = {
  flex: "1"
};

const heroRight = {
  flex: "1"
};

const heroTitle = {
  fontSize: "40px",
  marginBottom: "15px"
};

const heroText = {
  fontSize: "18px",
  marginBottom: "25px",
  color: "#555"
};

const primaryBtn = {
  padding: "12px 20px",
  background: "#d4af37",
  border: "none",
  borderRadius: "6px",
  color: "#fff",
  cursor: "pointer"
};

const imagePlaceholder = {
  height: "300px",
  background: "#ddd",
  borderRadius: "10px"
};

const trustSection = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: "20px",
  padding: "40px 8%",
  background: "#ffffff"
};

const trustBox = {
  background: "#f9f9f9",
  padding: "20px",
  textAlign: "center",
  borderRadius: "8px",
  fontWeight: "500"
};

const productSection = {
  padding: "60px 8%"
};

const sectionTitle = {
  textAlign: "center",
  marginBottom: "40px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: "25px"
};

const card = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  textAlign: "center"
};

const cardImage = {
  height: "180px",
  background: "#ddd",
  borderRadius: "8px",
  marginBottom: "15px"
};

const secondaryBtn = {
  marginTop: "10px",
  padding: "10px",
  background: "#25D366",
  border: "none",
  borderRadius: "6px",
  color: "#fff",
  cursor: "pointer"
};

const aboutSection = {
  padding: "60px 8%",
  background: "#ffffff"
};

const aboutText = {
  maxWidth: "800px",
  margin: "15px auto",
  lineHeight: "1.8",
  textAlign: "center"
};

const footer = {
  padding: "20px",
  textAlign: "center",
  background: "#111",
  color: "#fff"
};
