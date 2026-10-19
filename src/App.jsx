import React, { useState } from "react";
import PhoneShell from "./components/PhoneShell";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import CoffeeDetails from "./pages/CoffeeDetails";
import Order from "./pages/Order";
import Tracking from "./pages/Tracking";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import { products } from "./data/products";

export default function App() {
  const [page, setPage] = useState("welcome");
  const [previousPage, setPreviousPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const navigate = (nextPage) => {
    setPage(nextPage);
  };

  const openProduct = (product) => {
    setPreviousPage(page);
    setSelectedProduct(product);
    setPage("details");
  };

  const toggleFavorite = (product) => {
    setFavorites((current) =>
      current.some((item) => item.id === product.id)
        ? current.filter((item) => item.id !== product.id)
        : [...current, product]
    );
  };

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size
      );

      if (existing) {
        return current.map((item) =>
          item.id === product.id &&
          item.size === product.size
            ? {
                ...item,
                quantity: item.quantity + product.quantity,
              }
            : item
        );
      }

      return [...current, { ...product }];
    });

    setPage("cart");
  };

  const updateQuantity = (product, quantity) => {
    if (quantity <= 0) {
      removeItem(product);
      return;
    }

    setCart((current) =>
      current.map((item) =>
        item.id === product.id &&
        item.size === product.size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeItem = (product) => {
    setCart((current) =>
      current.filter(
        (item) =>
          !(
            item.id === product.id &&
            item.size === product.size
          )
      )
    );
  };

  const placeOrder = (orderData) => {
    const newOrder = {
      ...orderData,
      id: `CF${Date.now().toString().slice(-6)}`,
      status: "Order placed",
    };

    setOrders((current) => [newOrder, ...current]);
    setSelectedOrder(newOrder);
    setCart([]);
  };

  const backFromDetails = () => {
    setPage(previousPage);
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <PhoneShell>
      {page === "welcome" && (
        <Welcome onGetStarted={() => navigate("home")} />
      )}

      {page === "home" && (
        <Home
          onProductClick={openProduct}
          onNavigate={navigate}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          cart={cart}
        />
      )}

      {page === "details" && (
        <CoffeeDetails
          product={selectedProduct}
          onBack={backFromDetails}
          onAddToCart={addToCart}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}

      {page === "cart" && (
        <Cart
          cart={cart}
          onBack={() => navigate("home")}
          onNavigate={navigate}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
        />
      )}

      {page === "order" && (
        <Order
          cart={cart}
          onBack={() => navigate("cart")}
          onPlaceOrder={placeOrder}
          onNavigate={navigate}
        />
      )}

      {page === "tracking" && (
        <Tracking
          order={selectedOrder}
          onBack={() => navigate("home")}
          onNavigate={navigate}
        />
      )}

      {page === "favorites" && (
        <Favorites
          favorites={favorites}
          onBack={() => navigate("home")}
          onNavigate={navigate}
          onProductClick={openProduct}
          onToggleFavorite={toggleFavorite}
          cart={cart}
        />
      )}

      {page === "orders" && (
        <Orders
          orders={orders}
          onBack={() => navigate("home")}
          onNavigate={navigate}
          onOrderClick={(order) => {
            setSelectedOrder(order);
            navigate("tracking");
          }}
          cart={cart}
        />
      )}
    </PhoneShell>
  );
}