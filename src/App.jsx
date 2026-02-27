export default function App() {

  const products = [
    {
      name: "Jari Supplier in Surat",
      inStock: true,
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
    },
    {
      name: "Zari Wholesale Gujarat",
      inStock: false,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
    },
    {
      name: "Embroidery Metallic Thread",
      inStock: true,
      image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369"
    },
    {
      name: "Textile Accessories Supplier",
      inStock: true,
      image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3"
    }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(10px)",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000
      }}>
        <div style={{ color: "gold", fontWeight: "bold" }}>
          Arman Trader Surat
        </div>

        <div style={{ display: "flex", gap: "25px" }}>
          <a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="#products" style={{ color: "white", textDecoration: "none" }}>Products</a>
          <a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" style={{
        background: "linear-gradient(135deg, #1a1a1a, #000000, #2c2c2c)",
        color: "white",
        padding: "160px 20px",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "52px",
          marginBottom: "20px",
          fontWeight: "bold",
          background: "linear-gradient(to right, gold, #f5d742)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          Arman Trader Surat – Jari & Zari Supplier in Surat, Gujarat
        </h1>

        <p style={{ fontSize: "22px", marginBottom: "40px" }}>
          Premium Metallic Thread & Textile Supplier for Wholesale Buyers
        </p>

        <a
          href="https://wa.me/919625686843"
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

      {/* PRODUCTS */}
      <section id="products" style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#111",
        color: "white"
      }}>
        <h2 style={{ marginBottom: "50px", fontSize: "36px", color: "gold" }}>
          Our Premium Textile Products
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap"
        }}>
          {products.map((product, index) => (
            <div key={index} style={{
              background: "#1c1c1c",
              padding: "25px",
              width: "250px",
              borderRadius: "12px",
              border: product.inStock ? "2px solid gold" : "2px solid red",
              opacity: product.inStock ? 1 : 0.6,
              transition: "0.3s",
              cursor: "pointer",
              boxShadow: product.inStock
                ? "0 0 15px rgba(255,215,0,0.4)"
                : "0 0 10px rgba(255,0,0,0.4)"
            }}>

              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px"
                }}
              />

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
                  rel="noopener noreferrer"
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

      {/* PREMIUM ABOUT SECTION */}
      <section id="about" style={{
        padding: "100px 20px",
        background: "linear-gradient(135deg, #000000, #1a1a1a)",
        color: "white",
        textAlign: "center"
      }}>

        <h2 style={{
          fontSize: "40px",
          marginBottom: "30px",
          background: "linear-gradient(to right, gold, #f5d742)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          About Arman Trader Surat
        </h2>

        <p style={{
          maxWidth: "900px",
          margin: "auto",
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#ddd"
        }}>
          Arman Trader Surat is a trusted Jari and Zari supplier based in Surat, Gujarat.
          We serve wholesalers, textile manufacturers and bulk buyers across India
          with premium metallic threads and embroidery materials.
        </p>

        <div style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap"
        }}>
          <div>
            <h3 style={{ color: "gold" }}>✔ Bulk Supply</h3>
            <p>All India Wholesale Distribution</p>
          </div>
          <div>
            <h3 style={{ color: "gold" }}>✔ Premium Quality</h3>
            <p>Metallic & Embroidery Threads</p>
          </div>
          <div>
            <h3 style={{ color: "gold" }}>✔ Fast Dispatch</h3>
            <p>Quick Order Processing</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        background: "#f5f5f5",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2>Contact Arman Trader Surat</h2>
        <p>Surat, Gujarat, India</p>
        <p>Phone: 919625686843</p>
      </section>

      <footer style={{
        background: "#111",
        color: "white",
        padding: "20px",
        textAlign: "center"
      }}>
        © {new Date().getFullYear()} Arman Trader Surat
      </footer>

    </div>
  );
}
