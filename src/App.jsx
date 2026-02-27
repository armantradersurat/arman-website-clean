export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
<section
  style={{
    background: "linear-gradient(135deg, #1a1a1a, #000000, #2c2c2c)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "120px 20px",
    textAlign: "center"
  }}
>
  <h1 style={{
  fontSize: "52px",
  marginBottom: "20px",
  fontWeight: "bold",
  background: "linear-gradient(to right, gold, #f5d742)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
}}>
  Arman Trader Surat
</h1>
  <p style={{ fontSize: "22px", marginBottom: "40px" }}>
    Premium Jari & Zari Metallic Supplier from Surat
  </p>

  <a
    href="https://wa.me/919625686843?text=Hello%20Arman%20Trader,%20I%20want%20bulk%20price%20details%20for%20Jari%20and%20Zari."
    target="_blank"
    rel="noopener noreferrer"
    style={{
      background: "#25D366",
      color: "white",
      padding: "15px 35px",
      textDecoration: "none",
      borderRadius: "8px",
      fontSize: "20px",
      fontWeight: "bold"
    }}
  >
    Get Bulk Price on WhatsApp
  </a>
      </section>

      {/* PRODUCT CATEGORIES */}
<section style={{
  padding: "80px 20px",
  textAlign: "center",
  background: "#111",
  color: "white"
}}>
  <h2 style={{
    marginBottom: "50px",
    fontSize: "36px",
    background: "linear-gradient(to right, gold, #f5d742)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }}>
    Our Premium Products
  </h2>

  <div style={{
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap"
  }}>
    {["Jari", "Zari", "Embroidery Thread", "Textile Accessories"].map((item, index) => (
      <div
        key={index}
        style={{
          background: "#1c1c1c",
          padding: "35px",
          width: "240px",
          borderRadius: "12px",
          border: "2px solid gold",
          boxShadow: "0 10px 25px rgba(255,215,0,0.2)",
          transition: "0.3s"
        }}
      >
        <h3 style={{ color: "gold", marginBottom: "15px" }}>{item}</h3>
        <p style={{ color: "#ddd" }}>
          High quality {item} available in bulk for textile manufacturing.
        </p>
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
        <p>Phone: 919625686843</p>
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
