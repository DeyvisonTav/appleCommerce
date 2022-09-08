import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useState, useEffect } from "react";
export function Header() {
  const [shadow, setShadow] = useState(false)
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 20) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div className={
      shadow
        ? 'fixed w-full h-10 shadow-2xl shadow-neutral-800 z-[100] ease-in-out duration-300'
        : 'fixed w-full h-10 z-[100]'
    }>
      <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link to={"/"}>
          <h1>iPhone 13</h1>
        </Link>
      </div>
      <div className={styles.containerLinks}>
        <Link className={styles.link} to={"/"}>
          <p>visão geral</p>
        </Link>
        <Link className={styles.link} to={"/specification"}>
          <p>especificações</p>
        </Link>
        <Link className={styles.link} to={"/purchase"}>
          <button className={styles.btn}>comprar</button>
        </Link>
      </div>
      </div>
    </div>
  );
}
