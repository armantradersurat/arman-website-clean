import React, { useState } from "react";

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      name: "Gold Jari 75 Denier",
      price: "₹1200/kg",
      inStock: true,
      image: "/images/jari1.jpg"
    },
    {
      name: "Silver Zari Premium",
      price: "₹1500/kg",
      inStock: false,
      image: "/images/zari1.jpg"
    },
    {
      name: "Embroidery Thread Metallic",
      price: "₹450/roll",
      inStock: true,
      image: "/images/thread1.jpg"
    }
  ];

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", background: "#0c0c0c", color: "white" }}>

      {/* HEADER */}
      <nav style={{
        background: "#111827",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{ color: "gold", margin: 0 }}>Arman Trader</h2>
        <div>Surat | All India Delivery</div>
      </nav>

      {/* HERO */}
      <section style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #000, #1f2937)"
      }}>
        <h1 style={{
          fontSize: "28px",
          background: "linear-gradient(to right, gold, #facc15)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          Premium Jari & Zari Supplier
        </h1>
        <p>Wholesale Textile Supplier from Surat</p>
      </section>

      {/* PRODUCT GALLERY */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", color: "gold" }}>
          Our Premium Products
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          marginTop: "40px"
        }}>

          {products.map((product, index) => (
            <div key={index} style={{
              background: "#1f2937",
              padding: "20px",
              borderRadius: "12px",
              border: product.inStock ? "2px solid gold" : "2px solid red"
            }}>

              {/* IMAGE */}
              <img
                src={product.image}
                alt={product.name}
                onClick={() => setSelectedImage(product.image)}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              />

              <h3 style={{ marginTop: "15px" }}>
                {product.name}
              </h3>

              <p style={{ fontWeight: "bold" }}>
                {product.price}
              </p>

              <p style={{ color: product.inStock ? "#4ade80" : "#f87171" }}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </p>

              {/* WHATSAPP AUTO MESSAGE */}
              {product.inStock && (
                <a
                  href={`https://wa.me/919625686843?text=Hello%20Arman%20Trader,%20I%20want%20price%20for%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: "gold",
                    color: "black",
                    padding: "8px 20px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "bold"
                  }}
                >
                  Order on WhatsApp
                </a>
              )}

            </div>
          ))}

        </div>
      </section>

      {/* IMAGE ZOOM MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
          }}
        >
          <img
            src={selectedImage}
            alt="Zoom"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px"
            }}
          />
        </div>
      )}

      {/* FOOTER */}
      <footer style={{
        background: "#000",
        padding: "20px",
        textAlign: "center",
        color: "#aaa"
      }}>
        © {new Date().getFullYear()} Arman Trader | Surat & All India Supplier
      </footer>

    </div>
  );
}
