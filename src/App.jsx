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
  <h1 style={{ fontSize: "50px", marginBottom: "20px", fontWeight: "bold" }}>
    Arman Trader Surat
  </h1>

  <p style={{ fontSize: "22px", marginBottom: "40px" }}>
    Premium Jari & Zari Textile Supplier from Surat
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
