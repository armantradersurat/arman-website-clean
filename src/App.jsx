export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* HERO SECTION */}
      <section style={{
        background: "#111",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Arman Trader Surat
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          Premium Jari & Zari Textile Supplier
        </p>
        <a 
          href="https://wa.me/+91 9625686843"
          style={{
            background: "#25D366",
            color: "white",
            padding: "12px 25px",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "18px"
          }}
        >
          Order on WhatsApp
        </a>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "40px" }}>Our Products</h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}>
          {["Jari", "Zari", "Embroidery Thread", "Textile Accessories"].map((item, index) => (
            <div key={index} style={{
              border: "1px solid #ddd",
              padding: "30px",
              width: "220px",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}>
              <h3>{item}</h3>
              <p>High quality {item} available in bulk.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section style={{
        background: "#f5f5f5",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2>Contact Us</h2>
        <p>Surat, Gujarat, India</p>
        <p>Email: armantrader@example.com</p>
        <p>Phone: +91 9625686843</p>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#111",
        color: "white",
        padding: "20px",
        textAlign: "center"
      }}>
        © {new Date().getFullYear()} Arman Trader Surat. All rights reserved.
      </footer>

    </div>
  )
}
