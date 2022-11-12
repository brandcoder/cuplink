import React, { useState } from 'react';
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.menu} style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
      <div  className={styles.menu__logo}>
        <a href="/">CUPLINK</a>
      </div>
      <div className={styles.menu__container}>
          <a className={styles.menu__item} href="/cupadd">컵등록</a>
          <a className={styles.menu__item} href="/cupcheckin">체크인</a>
          <a className={styles.menu__item} href="/cupcheckout">체크아웃</a>
          <a className={styles.menu__item} href="/cupwashing">세척</a>
          <a className={styles.menu__item} href="/cupinfo">컵조회</a>
      </div>
    </nav>
  )
}

export default NavBar