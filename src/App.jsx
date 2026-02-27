import { useState } from "react";

export default function App() {

  const [activeTab, setActiveTab] = useState("Jari");

  const products = {
    Jari: [
      { name: "Gold Jari Thread", price: "₹1200/kg", stock: true },
      { name: "Silver Jari Thread", price: "₹1050/kg", stock: false },
    ],
    Zari: [
      { name: "Premium Zari Roll", price: "₹2500/roll", stock: true },
      { name: "Heavy Zari Border", price: "₹3200/roll", stock: true },
    ],
    Thread: [
      { name: "Metallic Embroidery Thread", price: "₹450/spool", stock: true },
    ],
    Accessories: [
      { name: "Decorative Lace", price: "₹750/roll", stock: false },
    ]
  };

  const categories = Object.keys(products);

  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#f5f2ec" }}>

      {/* NAVBAR */}
      <nav style={{
        background: "#0b1f3a",
        padding: "18px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white"
      }}>
        <h2 style={{ color: "gold", margin: 0 }}>Arman Trader</h2>

        <div style={{ display: "flex", gap: "30px" }}>
          <a href="#home" style={navLink}>Home</a>
          <a href="#products" style={navLink}>Products</a>
          <a href="#contact" style={navLink}>Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        background: "#f5f2ec"
      }}>
        {/* LEFT */}
        <div style={{ flex: 1, padding: "80px 60px" }}>
          <h1 style={{ fontSize: "48px", color: "#0b1f3a" }}>
            Arman Trader
          </h1>
          <h3 style={{ color: "#555", marginTop: "10px" }}>
            Premium Jari & Zari Supplier from Surat
          </h3>

          <p style={{ marginTop: "20px", lineHeight: "1.7" }}>
            High-quality Jari and Zari collections with trusted supply across India.
            Experience excellence in textile materials with competitive wholesale pricing.
          </p>

          <div style={{ marginTop: "25px" }}>
            <a href="#products" style={primaryBtn}>View Products</a>
            <a
              href="https://wa.me/919625686843"
              target="_blank"
              rel="noopener noreferrer"
              style={secondaryBtn}
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div style={{ flex: 1 }}>
          <img
            src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
            alt="Jari"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* FEATURE ROW */}
      <section style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "40px 20px",
        background: "#ffffff"
      }}>
        <Feature title="Premium Quality" desc="Certified Materials" />
        <Feature title="All India Delivery" desc="Fast & Reliable" />
        <Feature title="Wholesale Pricing" desc="Best Rates Guaranteed" />
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", color: "#0b1f3a" }}>
          Why Choose Us
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          marginTop: "40px"
        }}>
          <Card title="Premium Quality Products"
                desc="Only the finest Jari and Zari materials sourced and tested for quality." />
          <Card title="Surat Textile Expertise"
                desc="Years of experience in the textile industry." />
          <Card title="Reliable Supply Chain"
                desc="Consistent availability and timely delivery across India." />
          <Card title="Competitive Wholesale Rates"
                desc="Best pricing for bulk orders without compromising on quality." />
          <Card title="Fast Dispatch Across India"
                desc="Efficient logistics network ensuring quick delivery." />
          <Card title="Long-term Relationships"
                desc="Building trust and partnerships with our valued customers." />
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section id="products" style={{ padding: "80px 40px", background: "#fff" }}>
        <h2 style={{ textAlign: "center", color: "#0b1f3a" }}>Our Products</h2>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              style={{
                margin: "10px",
                padding: "10px 20px",
                background: activeTab === cat ? "#0b1f3a" : "gold",
                color: activeTab === cat ? "white" : "#0b1f3a",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "40px"
        }}>
          {products[activeTab].map((item, index) => (
            <div key={index} style={{
              background: "#f5f2ec",
              padding: "20px",
              borderRadius: "10px",
              border: item.stock ? "2px solid green" : "2px solid red"
            }}>
              <h3>{item.name}</h3>
              <p><strong>{item.price}</strong></p>
              <p style={{ color: item.stock ? "green" : "red" }}>
                {item.stock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#0b1f3a",
        color: "white",
        padding: "50px 60px"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}>
          <div>
            <h3 style={{ color: "gold" }}>Arman Trader</h3>
            <p>Premium Jari & Zari supplier from Surat serving across India.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Surat, Gujarat</p>
            <p>+91 9625686843</p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          © {new Date().getFullYear()} Arman Trader. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

/* Components */
function Feature({ title, desc }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h4 style={{ color: "#0b1f3a" }}>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div style={{
      background: "white",
      padding: "25px",
      borderRadius: "10px",
      boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
    }}>
      <h3 style={{ color: "#0b1f3a" }}>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

const navLink = {
  color: "white",
  textDecoration: "none"
};

const primaryBtn = {
  background: "#0b1f3a",
  color: "white",
  padding: "12px 25px",
  marginRight: "15px",
  textDecoration: "none",
  borderRadius: "5px"
};

const secondaryBtn = {
  background: "white",
  color: "#0b1f3a",
  padding: "12px 25px",
  textDecoration: "none",
  borderRadius: "5px",
  border: "2px solid #0b1f3a"
};
