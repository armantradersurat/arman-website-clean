import React, { useState } from "react";

export default function App() {

  const [page, setPage] = useState("home");

  return (
    <div style={container}>

      {/* NAVBAR */}
      <nav style={navStyle}>
        <h2 style={logoStyle}>Arman Trader</h2>

        <div style={navLinks}>
          <span onClick={() => setPage("home")}>Home</span>
          <span onClick={() => setPage("about")}>About</span>
          <span onClick={() => setPage("products")}>Products</span>
          <span onClick={() => setPage("contact")}>Contact</span>
        </div>
      </nav>

      {/* PAGE SWITCH */}
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "products" && <Products />}
      {page === "contact" && <Contact />}

      <footer style={footerStyle}>
        © 2026 Arman Trader | Surat | Pan India Delivery
      </footer>

    </div>
  );
}

/* ================= HOME ================= */

function Home() {
  return (
    <section style={heroStyle}>
      <h1 style={mainTitle}>Arman Trader</h1>
      <h2 style={metallicText}>Premium Jari & Zari Supplier</h2>
      <p style={{ marginTop: "15px", fontSize: "18px" }}>
        Wholesale Textile Materials | Fast Delivery Across India
      </p>
    </section>
  );
}

/* ================= ABOUT ================= */

function About() {
  return (
    <section style={sectionStyle}>
      <h2 style={goldHeading}>About Arman Trader</h2>

      <p style={aboutText}>
        Arman Trader is a trusted name in Surat textile market, supplying
        premium quality Jari & Zari materials across Pan India.
      </p>

      <p style={aboutText}>
        We provide a wide variety of Jari including Gold Jari, Silver Zari,
        Copper Metallic Threads, Embroidery Threads and many more types.
        Our products are known for shine, durability and competitive wholesale pricing.
      </p>

      <p style={aboutText}>
        Whether you need bulk supply for saree manufacturing, embroidery work,
        bridal fabrics or textile production, we deliver high quality material
        at the best market rates with fast dispatch service across India.
      </p>

      <p style={aboutText}>
        At Arman Trader, customer satisfaction, premium quality and timely delivery
        are our top priorities.
      </p>
    </section>
  );
}

/* ================= PRODUCTS ================= */

function Products() {

  const products = [
    "Gold Jari 75D",
    "Silver Zari Premium",
    "Copper Metallic Thread",
    "Ultra Shine Zari",
    "Heavy Work Jari",
    "Embroidery Roll Thread",
    "Luxury Finish Jari",
    "Premium Textile Zari",
    "Metallic Embroidery Thread",
    "Bridal Zari Special",
    "Designer Gold Jari",
    "Export Quality Zari"
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={goldHeading}>Our Premium Products</h2>

      <div style={gridStyle}>
        {products.map((item, index) => (
          <div key={index} style={cardStyle}>
            <div style={imagePlaceholder}></div>
            <h3>{item}</h3>
            <p style={{ color: "#d4af37" }}>Best Wholesale Price</p>
            <button style={btnStyle}>Order on WhatsApp</button>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= CONTACT ================= */

function Contact() {
  return (
    <section style={sectionStyle}>
      <h2 style={goldHeading}>Contact Us</h2>

      <p style={aboutText}>📍 Surat, Gujarat, India</p>
      <p style={aboutText}>📞 +91 9625686843</p>
      <p style={aboutText}>📦 Pan India Delivery Available</p>
    </section>
  );
}

/* ================= STYLES ================= */

const container = {
  fontFamily: "Poppins, sans-serif",
  background: "linear-gradient(135deg,#0f0f0f,#1c1c1c,#111)",
  color: "#ffffff",
  minHeight: "100vh"
};

const navStyle = {
  padding: "15px 5%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #333"
};

const navLinks = {
  display: "flex",
  gap: "25px",
  cursor: "pointer"
};

const logoStyle = {
  background: "linear-gradient(90deg,#FFD700,#f5c542,#b8860b)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold"
};

const heroStyle = {
  padding: "120px 5%",
  textAlign: "center"
};

const mainTitle = {
  fontSize: "48px",
  fontWeight: "bold"
};

const metallicText = {
  fontSize: "36px",
  background: "linear-gradient(90deg,#FFD700,#f5c542,#b8860b)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const sectionStyle = {
  padding: "80px 8%",
  textAlign: "center"
};

const goldHeading = {
  fontSize: "32px",
  marginBottom: "40px",
  background: "linear-gradient(90deg,#FFD700,#f5c542,#b8860b)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const aboutText = {
  maxWidth: "800px",
  margin: "15px auto",
  lineHeight: "1.8"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px"
};

const cardStyle = {
  background: "#1a1a1a",
  padding: "20px",
  borderRadius: "15px",
  border: "1px solid #333"
};

const imagePlaceholder = {
  height: "180px",
  background: "#333",
  borderRadius: "10px",
  marginBottom: "15px"
};

const btnStyle = {
  marginTop: "10px",
  padding: "10px",
  background: "#25D366",
  border: "none",
  borderRadius: "6px",
  color: "#fff",
  cursor: "pointer"
};

const footerStyle = {
  padding: "20px",
  textAlign: "center",
  borderTop: "1px solid #333",
  marginTop: "40px"
};
