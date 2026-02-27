import { useState } from "react";

export default function App() {

  const [activeCategory, setActiveCategory] = useState("Jari");

  const products = {
    Jari: [
      { name: "Gold Jari Thread", price: "₹1,200/kg", stock: true },
      { name: "Silver Jari Thread", price: "₹1,050/kg", stock: true },
      { name: "Copper Jari Thread", price: "₹980/kg", stock: false },
    ],
    Zari: [
      { name: "Premium Zari Roll", price: "₹2,500/roll", stock: true },
      { name: "Heavy Zari Border", price: "₹3,200/roll", stock: false },
    ],
    "Embroidery Thread": [
      { name: "Metallic Embroidery Thread", price: "₹450/spool", stock: true },
      { name: "Color Embroidery Thread", price: "₹350/spool", stock: true },
    ],
    "Textile Accessories": [
      { name: "Beads & Sequins", price: "₹600/pack", stock: true },
      { name: "Decorative Lace", price: "₹750/roll", stock: false },
    ]
  };

  const categories = Object.keys(products);

  return (
    <div style={{ fontFamily: "Arial", background: "#f4f1ea" }}>

      {/* NAVBAR */}
      <nav style={{
        background: "#0b1f3a",
        padding: "18px 60px",
        display: "flex",
        justifyContent: "space-between",
        color: "white"
      }}>
        <h2 style={{ color: "gold", margin: 0 }}>Arman Trader</h2>
        <div>Surat & All India Delivery Available</div>
      </nav>

      {/* HERO */}
      <section style={{
        background: "#0b1f3a",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ color: "gold", fontSize: "40px" }}>
          Premium Jari & Zari Wholesale Supplier
        </h1>
        <p>
          Delivering High Quality Textile Materials in Surat & Across India
        </p>

        <a
          href="https://wa.me/919625686843"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "gold",
            color: "#0b1f3a",
            padding: "12px 25px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Get Price on WhatsApp
        </a>
      </section>

      {/* CATEGORY TABS */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#0b1f3a" }}>Our Products</h2>

        <div style={{ marginBottom: "30px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                margin: "10px",
                padding: "10px 20px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                background: activeCategory === cat ? "gold" : "#0b1f3a",
                color: activeCategory === cat ? "#0b1f3a" : "white",
                fontWeight: "bold"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "auto"
        }}>
          {products[activeCategory].map((item, index) => (
            <div key={index} style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              border: item.stock ? "2px solid green" : "2px solid red"
            }}>
              <h3>{item.name}</h3>
              <p style={{ fontWeight: "bold", color: "#0b1f3a" }}>
                {item.price}
              </p>

              <p style={{
                color: item.stock ? "green" : "red",
                fontWeight: "bold"
              }}>
                {item.stock ? "In Stock" : "Out of Stock"}
              </p>

              {item.stock && (
                <a
                  href="https://wa.me/919625686843"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
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

      {/* DELIVERY SECTION */}
      <section style={{
        background: "#0b1f3a",
        color: "white",
        padding: "50px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ color: "gold" }}>Delivery Information</h2>
        <p>
          ✔ Fast Delivery in Surat  
          ✔ Secure Packaging  
          ✔ Dispatch Across India  
          ✔ Bulk & Wholesale Orders Accepted  
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#111",
        color: "white",
        padding: "20px",
        textAlign: "center"
      }}>
        © {new Date().getFullYear()} Arman Trader | Surat & All India Supplier
      </footer>

    </div>
  );
}
