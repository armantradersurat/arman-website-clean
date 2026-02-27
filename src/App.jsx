export default function App() {

  const products = [
    { name: "Jari", inStock: true },
    { name: "Zari", inStock: false },
    { name: "Embroidery Thread", inStock: true },
    { name: "Textile Accessories", inStock: true }
  ];

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
  {products.map((product, index) => (
    <div
      key={index}
      style={{
        background: "#1c1c1c",
        padding: "35px",
        width: "240px",
        borderRadius: "12px",
        border: product.inStock ? "2px solid gold" : "2px solid red",
        opacity: product.inStock ? 1 : 0.6
      }}
    >
      <h3 style={{ color: product.inStock ? "gold" : "red" }}>
        {product.name}
      </h3>

      <p>
        {product.inStock ? "Available in Stock" : "Currently Out of Stock"}
      </p>

      {product.inStock && (
        <a
          href="https://wa.me/919625686843"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "15px",
            background: "#25D366",
            color: "white",
            padding: "8px 15px",
            borderRadius: "5px",
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
{/* FLOATING WHATSAPP BUTTON */}
<a
  href="https://wa.me/919625686843?text=Hello%20Arman%20Trader,%20I%20want%20bulk%20price%20details."
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "white",
    padding: "15px 18px",
    borderRadius: "50%",
    fontSize: "22px",
    textDecoration: "none",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    zIndex: 1000
  }}
>
  💬
</a>
    </div>
  )
}
