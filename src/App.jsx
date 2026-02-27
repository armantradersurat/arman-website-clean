import React from "react";

export default function App() {

  const products = [
    { name: "Jari", price: "₹450/kg", inStock: true },
    { name: "Zari", price: "₹520/kg", inStock: false },
    { name: "Embroidery Thread", price: "₹300/roll", inStock: true },
    { name: "Textile Accessories", price: "₹150/piece", inStock: true },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* NAVBAR */}
      <nav style={{
        background: "#0b1d3a",
        padding: "15px 20px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap"
      }}>
        <h2 style={{ margin: 0, color: "gold" }}>Arman Trader</h2>

        <div style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap"
        }}>
          <a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="#products" style={{ color: "white", textDecoration: "none" }}>Products</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{
        padding: "60px 20px",
        background: "#f5f5f5",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "28px" }}>
          Premium Jari & Zari Supplier from Surat
        </h1>

        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          High-quality Jari, Zari & Textile materials with wholesale pricing and All India delivery.
        </p>

        <a
          href="https://wa.me/919625686843"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#25D366",
            color: "white",
            padding: "12px 25px",
            borderRadius: "6px",
            textDecoration: "none",
            display: "inline-block"
          }}
        >
          Contact on WhatsApp
        </a>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={{
        padding: "40px 20px",
        background: "#ffffff",
        textAlign: "center"
      }}>
        <h2>Our Products</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}>
          {products.map((product, index) => (
            <div key={index} style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              background: "#fafafa"
            }}>
              <h3>{product.name}</h3>
              <p><strong>{product.price}</strong></p>

              <p style={{ color: product.inStock ? "green" : "red" }}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </p>

              {product.inStock && (
                <a
                  href="https://wa.me/919625686843"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#0b1d3a",
                    color: "white",
                    padding: "8px 15px",
                    borderRadius: "5px",
                    textDecoration: "none",
                    display: "inline-block"
                  }}
                >
                  Order Now
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "40px 20px",
        background: "#0b1d3a",
        color: "white",
        textAlign: "center"
      }}>
        <h2>Contact Us</h2>
        <p>Surat, Gujarat</p>
        <p>All India Delivery Available</p>
        <p>Phone: +91 9625686843</p>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#000",
        color: "white",
        padding: "15px",
        textAlign: "center"
      }}>
        © {new Date().getFullYear()} Arman Trader Surat
      </footer>

    </div>
  );
}
