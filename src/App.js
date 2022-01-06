import React, { useState, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Productlist from "./components/ecommerce/Productlist";
import Categorylist from "./components/ecommerce/Categorylist";
import Product from "./components/ecommerce/Product";
import Basket from "./components/ecommerce/Basket";
import Checkout from "./components/ecommerce/Checkout";
import Landingpage from "./components/landingpage/Landingpage";
import About from "./components/global/About";
import Contact from "./components/global/Contact";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import Designers from "./components/global/Designers";
import Faq from "./components/global/Faq";
import Order from "./components/ecommerce/Order";

import "./sass/main.scss";
import "./css/style.css";

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [basketAmount, setBasketAmount] = useState();
  const [subtotal, setSubtotal] = useState(0);
  const [heroTitle, setHeroTitle] = useState('Produkter');
  const [headerLight, setHeaderLight] = useState(true);
  const [basketModalOn, setBasketModalOn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        '../data.json',
      );
      const json = await res.json();
      setProducts(json.products);
    };
    fetchData();

    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }

  }, []);

  const onAdd = (product, count) => {
    const exist = basket.find((x) => x.id === product.id);
    if (exist) {
      setBasket(
        basket.map((x) =>
          x.id === product.id ? { ...exist, amount: exist.amount + count } : x
        )
      );
    } else {
      setBasket([...basket, { ...product, amount: count }]);
    }
  };

  const onRemove = (product) => {
    const exist = basket.find((x) => x.id === product.id);
    if (exist.amount === 1) {
      setBasket(basket.filter((x) => x.id !== product.id));
    } else {
      setBasket(
        basket.map((x) =>
          x.id === product.id ? { ...exist, amount: exist.amount - 1 } : x
        )
      );
    }
  };

  useEffect(() => {
    if (basket.length > 0) {
      const totalArr = basket.map((item) => {
        const basketAmount = item.amount;
        return basketAmount;
      });

      const totalAmount = totalArr.reduce((result, number) => result + number);
      setBasketAmount(totalAmount);
    } else {
      setBasketAmount(0)
    }
  }, [basket])

  useEffect(() => {
    if (basket.length > 0) {
      const subtotalArr = basket.map((item) => {
        const itemTotal = item.amount * item.price;
        return itemTotal;
      });

      const subtotalItems = subtotalArr.reduce((result, number) => result + number);
      setSubtotal(subtotalItems);
    } else {
      setSubtotal(0)
    }
  }, [basket])

  const total = subtotal + 39;

  return (
    <Router>
      <ScrollToTop />
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} basketModalOn={basketModalOn} setBasketModalOn={setBasketModalOn} headerLight={headerLight} basket={basket} basketAmount={basketAmount} subtotal={subtotal} total={total} onRemove={onRemove} products={products} />
      <div>
        <Routes>
          <Route path="/productlist" element={<Productlist animate={animate} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} basketModalOn={basketModalOn} setBasketModalOn={setBasketModalOn} setHeaderLight={setHeaderLight} heroTitle={heroTitle} setHeroTitle={setHeroTitle} products={products} onAdd={onAdd} onRemove={onRemove} />} />
          <Route path="/categorylist" element={<Categorylist animate={animate} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} basketModalOn={basketModalOn} setBasketModalOn={setBasketModalOn} setHeaderLight={setHeaderLight} heroTitle={heroTitle} setHeroTitle={setHeroTitle} products={products} onAdd={onAdd} onRemove={onRemove} />} />
          <Route path="/product/id=:id" element={<Product animate={animate} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} basketModalOn={basketModalOn} setBasketModalOn={setBasketModalOn} setHeaderLight={setHeaderLight} heroTitle={heroTitle} setHeroTitle={setHeroTitle} onAdd={onAdd} onRemove={onRemove} products={products} />} />
          <Route path="/" element={<Landingpage animate={animate} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} basketModalOn={basketModalOn} setBasketModalOn={setBasketModalOn} setHeaderLight={setHeaderLight} products={products} onAdd={onAdd} onRemove={onRemove} />} />
          <Route path="/designers" element={<Designers animate={animate} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} basketModalOn={basketModalOn} setBasketModalOn={setBasketModalOn} setHeaderLight={setHeaderLight} heroTitle={heroTitle} setHeroTitle={setHeroTitle} products={products} onAdd={onAdd} onRemove={onRemove} />} />
          <Route path="/about" element={<About animate={animate} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} basketModalOn={basketModalOn} setBasketModalOn={setBasketModalOn} setHeaderLight={setHeaderLight} heroTitle={heroTitle} setHeroTitle={setHeroTitle} />} />
          <Route path="/contact" element={<Contact animate={animate} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} basketModalOn={basketModalOn} setBasketModalOn={setBasketModalOn} setHeaderLight={setHeaderLight} heroTitle={heroTitle} setHeroTitle={setHeroTitle} />} />
          <Route path="/checkout" element={<Checkout animate={animate} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} basketModalOn={basketModalOn} setBasketModalOn={setBasketModalOn} setHeaderLight={setHeaderLight} basket={basket} basketAmount={basketAmount} subtotal={subtotal} total={total} />} />
          <Route path="/basket" element={<Basket animate={animate} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} basketModalOn={basketModalOn} setBasketModalOn={setBasketModalOn} setHeaderLight={setHeaderLight} basket={basket} basketAmount={basketAmount} onAdd={onAdd} onRemove={onRemove} subtotal={subtotal} total={total} />} />
          <Route path="/faq" element={<Faq animate={animate} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} basketModalOn={basketModalOn} setBasketModalOn={setBasketModalOn} setHeaderLight={setHeaderLight} heroTitle={heroTitle} setHeroTitle={setHeroTitle} />} />
          <Route path="/order" element={<Order animate={animate} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} setBasket={setBasket} basketModalOn={basketModalOn} setBasketModalOn={setBasketModalOn} basket={basket} setHeaderLight={setHeaderLight} heroTitle={heroTitle} setHeroTitle={setHeroTitle} />} />
        </Routes>
      </div>
      <Footer />
    </Router>

  );
}

export default App;
