import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function App() {

  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Gold Jari 75D",
      price: "₹230/kg",
      oldPrice: "₹260",
      discount: "12% OFF",
      img: "/images/jari1.jpg",
      desc: "Premium gold jari for embroidery & textile use."
    },
    {
      id: 2,
      name: "Silver Zari Premium",
      price: "₹210/kg",
      oldPrice: "₹240",
      discount: "13% OFF",
      img: "/images/jari2.jpg",
      desc: "High shine silver zari perfect for sarees."
    },
    {
      id: 3,
      name: "Copper Metallic Thread",
      price: "₹180/kg",
      oldPrice: "₹200",
      discount: "10% OFF",
      img: "/images/jari3.jpg",
      desc: "Durable metallic thread for heavy work."
    }
  ];

  return (
    <div style={container}>

      {/* HERO */}
      <section style={hero}>
        <h1 style={heroTitle}>Premium Jari & Zari Supplier</h1>
        <p>Wholesale Textile Materials | Fast Delivery Across India</p>
      </section>

      {/* PRODUCTS */}
      <section style={productSection}>
        <h2 style={sectionTitle}>Our Premium Products</h2>

        <div style={grid}>
          {products.map(product => (
            <div key={product.id} style={card}>

              {/* Discount Badge */}
              <div style={badge}>
                🔥 {product.discount}
              </div>

              <div style={imageWrapper}>
                <img
                  src={product.img}
                  alt={product.name}
                  style={productImage}
                  onClick={() => setSelectedProduct(product)}
                />
              </div>

              <h3>{product.name}</h3>

              <div>
                <span style={oldPrice}>{product.oldPrice}</span>
                <span style={price}>{product.price}</span>
              </div>

              <button style={whatsappBtn}>
                <FaWhatsapp /> Order on WhatsApp
              </button>

            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedProduct && (
        <div style={modalOverlay} onClick={() => setSelectedProduct(null)}>
          <div style={modalBox} onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedProduct.img}
              alt=""
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.desc}</p>
            <p style={price}>{selectedProduct.price}</p>
            <button style={closeBtn} onClick={() => setSelectedProduct(null)}>
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

/* ===== STYLES ===== */

const container = {
  fontFamily: "Poppins, sans-serif",
  background: "#f8f9fb"
};

const hero = {
  padding: "80px 10%",
  textAlign: "center",
  background: "linear-gradient(135deg,#fff,#f3f3f3)"
};

const heroTitle = {
  fontSize: "38px",
  color: "#d4af37"
};

const productSection = {
  padding: "60px 10%"
};

const sectionTitle = {
  textAlign: "center",
  marginBottom: "40px",
  color: "#d4af37"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "30px"
};

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  position: "relative",
  textAlign: "center"
};

const badge = {
  position: "absolute",
  top: "15px",
  left: "15px",
  background: "red",
  color: "#fff",
  padding: "5px 10px",
  fontSize: "12px",
  borderRadius: "20px"
};

const imageWrapper = {
  overflow: "hidden",
  borderRadius: "10px"
};

const productImage = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
  transition: "0.4s ease",
  cursor: "pointer"
};

/* Zoom Effect */
productImage[":hover"] = {
  transform: "scale(1.1)"
};

const oldPrice = {
  textDecoration: "line-through",
  color: "#888",
  marginRight: "10px"
};

const price = {
  color: "#d4af37",
  fontWeight: "bold",
  fontSize: "18px"
};

const whatsappBtn = {
  marginTop: "15px",
  padding: "10px 15px",
  background: "#25D366",
  border: "none",
  borderRadius: "6px",
  color: "#fff",
  cursor: "pointer"
};

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modalBox = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "90%",
  maxWidth: "500px"
};

const closeBtn = {
  marginTop: "15px",
  padding: "10px",
  background: "#111",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};
