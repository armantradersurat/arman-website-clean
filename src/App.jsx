import React from "react";

export default function App() {

  const products = [
    { name: "Jari", price: "₹450/kg", inStock: true },
    { name: "Zari", price: "₹520/kg", inStock: false },
    { name: "Embroidery Thread", price: "₹300/roll", inStock: true },
    { name: "Textile Accessories", price: "₹150/piece", inStock: true },
  ];

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", background: "#0c0c0c", color: "white" }}>

      {/* NAVBAR */}
      <nav style={{
        background: "#111827",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap"
      }}>
        <h2 style={{ margin: 0, color: "gold", fontWeight: "bold" }}>
          Arman Trader
        </h2>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="#products" style={{ color: "white", textDecoration: "none" }}>Products</a>
          <a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #000000, #1f2937)"
      }}>
        <h1 style={{
          fontSize: "32px",
          background: "linear-gradient(to right, gold, #facc15)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold"
        }}>
          Premium Jari & Zari Supplier from Surat
        </h1>

        <p style={{ maxWidth: "700px", margin: "20px auto", color: "#ccc" }}>
          Trusted wholesale supplier of high-quality Jari, Zari & Textile accessories.
          We provide fast and reliable delivery across Surat and All India.
        </p>

        <a
          href="https://wa.me/919625686843"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#25D366",
            padding: "12px 30px",
            borderRadius: "8px",
            textDecoration: "none",
            color: "white",
            fontWeight: "bold"
          }}
        >
          Get Bulk Price on WhatsApp
        </a>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "#111"
      }}>
        <h2 style={{
          marginBottom: "40px",
          fontSize: "28px",
          color: "gold"
        }}>
          Our Premium Products
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px"
        }}>
          {products.map((product, index) => (
            <div key={index} style={{
              background: "#1f2937",
              padding: "25px",
              borderRadius: "12px",
              border: product.inStock ? "2px solid gold" : "2px solid red",
              transition: "0.3s"
            }}>
              <h3 style={{ color: product.inStock ? "gold" : "red" }}>
                {product.name}
              </h3>

              <p style={{ fontSize: "18px", margin: "10px 0" }}>
                {product.price}
              </p>

              <p style={{ color: product.inStock ? "#4ade80" : "#f87171" }}>
                {product.inStock ? "Available in Stock" : "Currently Out of Stock"}
              </p>

              {product.inStock && (
                <a
                  href="https://wa.me/919625686843"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "12px",
                    background: "gold",
                    color: "black",
                    padding: "8px 20px",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    textDecoration: "none"
                  }}
                >
                  Order Now
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "#0f172a"
      }}>
        <h2 style={{ color: "gold", marginBottom: "20px" }}>
          Why Choose Arman Trader?
        </h2>

        <p style={{ maxWidth: "800px", margin: "auto", color: "#ccc" }}>
          Based in Surat – the textile hub of India – we supply premium quality
          Jari, Zari and embroidery materials to wholesalers and manufacturers
          across India. We focus on competitive pricing, fast dispatch and
          long-term business relationships.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "50px 20px",
        textAlign: "center",
        background: "#111827"
      }}>
        <h2 style={{ color: "gold" }}>Contact Us</h2>
        <p>📍 Surat, Gujarat, India</p>
        <p>🚚 All India Delivery Available</p>
        <p>📞 +91 9625686843</p>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919625686843"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          padding: "15px",
          borderRadius: "50%",
          fontSize: "20px",
          color: "white",
          textDecoration: "none"
        }}
      >
        💬
      </a>

      {/* FOOTER */}
      <footer style={{
        background: "#000",
        padding: "20px",
        textAlign: "center",
        color: "#aaa"
      }}>
        © {new Date().getFullYear()} Arman Trader Surat | All Rights Reserved
      </footer>

    </div>
  );
}
