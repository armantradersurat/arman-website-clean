import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, remove } from "firebase/database";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL } from "firebase/storage";

/* 🔥 PASTE YOUR FIREBASE CONFIG HERE */
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  databaseURL: "YOUR_DB_URL",
  projectId: "YOUR_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export default function App() {

  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    oldPrice: "",
    stockQty: "",
    image: null
  });

  /* 🔥 FETCH PRODUCTS FROM DATABASE */
  useEffect(() => {
    const productsRef = ref(db, "products");
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setProducts(list);
      }
    });
  }, []);

  /* 🔥 ADD PRODUCT */
  const addProduct = async () => {

    if (!newProduct.image) return alert("Upload Image");

    const imageRef = sRef(storage, "images/" + newProduct.image.name);
    await uploadBytes(imageRef, newProduct.image);
    const imageURL = await getDownloadURL(imageRef);

    push(ref(db, "products"), {
      name: newProduct.name,
      price: Number(newProduct.price),
      oldPrice: Number(newProduct.oldPrice),
      stockQty: Number(newProduct.stockQty),
      image: imageURL
    });

    setNewProduct({
      name: "",
      price: "",
      oldPrice: "",
      stockQty: "",
      image: null
    });
  };

  /* 🔥 DELETE PRODUCT */
  const deleteProduct = (id) => {
    remove(ref(db, "products/" + id));
  };

  const calculateDiscount = (oldPrice, price) =>
    Math.round(((oldPrice - price) / oldPrice) * 100);

  return (
    <div style={{ background: "#111", color: "#fff", minHeight: "100vh", padding: "40px" }}>

      <h1 style={{ color: "#FFD700" }}>Arman Trader – Admin Panel</h1>

      {/* 🔥 ADD PRODUCT PANEL */}
      <div style={{ background: "#222", padding: "20px", borderRadius: "10px", marginBottom: "40px" }}>

        <h2 style={{ color: "#FFD700" }}>Add New Product</h2>

        <input placeholder="Name"
          value={newProduct.name}
          onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
        />

        <input placeholder="Old Price"
          value={newProduct.oldPrice}
          onChange={e => setNewProduct({ ...newProduct, oldPrice: e.target.value })}
        />

        <input placeholder="Price"
          value={newProduct.price}
          onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
        />

        <input placeholder="Stock Quantity"
          value={newProduct.stockQty}
          onChange={e => setNewProduct({ ...newProduct, stockQty: e.target.value })}
        />

        <input type="file"
          onChange={e => setNewProduct({ ...newProduct, image: e.target.files[0] })}
        />

        <button onClick={addProduct} style={{ background: "green", color: "#fff", padding: "10px", marginTop: "10px" }}>
          Add Product
        </button>

      </div>

      {/* 🔥 PRODUCT LIST */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
        gap: "20px"
      }}>
        {products.map(product => (
          <div key={product.id} style={{ background: "#222", padding: "15px", borderRadius: "10px" }}>

            <img src={product.image} style={{ width: "100%", height: "200px", objectFit: "cover" }} />

            <h3>{product.name}</h3>

            <p>
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                ₹{product.oldPrice}
              </span>
              <span style={{ color: "#FFD700", marginLeft: "10px" }}>
                ₹{product.price}
              </span>
            </p>

            <p>Stock: {product.stockQty}</p>

            <p style={{ color: "red" }}>
              🔥 {calculateDiscount(product.oldPrice, product.price)}% OFF
            </p>

            <button
              onClick={() => deleteProduct(product.id)}
              style={{ background: "red", color: "#fff", padding: "8px" }}
            >
              Delete
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}
