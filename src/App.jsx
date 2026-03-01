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
    <>
      <section style={heroStyle}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Arman Trader
        </h1>

        <h2 style={metallicText}>
          Premium Jari & Zari Supplier
        </h2>

        <p style={{ marginTop: "10px", color: "#ccc" }}>
          Wholesale Textile Materials | Fast Delivery Across India
        </p>
      </section>

      <Products />
    </>
  );
}

/* ================= ABOUT ================= */

function About() {
  return (
    <section style={sectionStyle}>
      <h2 style={goldHeading}>About Arman Trader</h2>

      <p style={aboutText}>
        Arman Trader is a trusted Jari & Zari supplier based in Surat,
        delivering premium quality textile materials across Pan India.
      </p>

      <p style={aboutText}>
        We provide Gold Jari, Silver Zari, Metallic Threads,
        Embroidery Threads and many more varieties at competitive wholesale rates.
      </p>

      <p style={aboutText}>
        Our products are known for shine, durability and smooth finishing,
        making them ideal for saree manufacturing, bridal fabrics,
        embroidery work and textile production.
      </p>

      <p style={aboutText}>
        We ensure fast dispatch, reliable service and best pricing
        for bulk buyers across India.
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
    "Designer Gold Jari",
    "Export Quality Zari",
    "Premium Metallic Thread"
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
  background: "linear-gradient(135deg,#0f0f0f,#1a1a1a,#141414)",
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
  padding: "80px 5%",
  textAlign: "center",
  background: "linear-gradient(90deg,#111,#1c1c1c,#111)",
  borderBottom: "1px solid #333"
};

const metallicText = {
  fontSize: "34px",
  background: "linear-gradient(90deg,#FFD700,#f5c542,#b8860b)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const sectionStyle = {
  padding: "60px 8%",
  textAlign: "center"
};

const goldHeading = {
  fontSize: "28px",
  marginBottom: "40px",
  background: "linear-gradient(90deg,#FFD700,#f5c542,#b8860b)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const aboutText = {
  maxWidth: "800px",
  margin: "15px auto",
  lineHeight: "1.8",
  color: "#ccc"
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
  border: "1px solid #333",
  transition: "0.3s",
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
  marginTop: "40px",
  color: "#aaa"
};
