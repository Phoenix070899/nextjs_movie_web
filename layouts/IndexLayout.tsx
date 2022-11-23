import { ReactElement } from "react";
import Link from "next/link";
import styles from "../styles/IndexLayout.module.css";
import { TbBrandNextjs } from "react-icons/tb";
import { BiHomeAlt } from "react-icons/bi";
import NavLink from "../components/NavLink/NavLink";

const IndexLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <TbBrandNextjs size={50} title="Next.JS" />
          <h2>Next.JS</h2>
        </div>
        <ul className={styles.navbar_list}>
          <p style={{padding: '1rem', fontWeight: 600}}>Menu</p>
          <li className={styles.list_item}>
            <NavLink href="/">
              <BiHomeAlt />
              Home
            </NavLink>
          </li>
          <li className={styles.list_item}>
            <NavLink href="/about">
              <BiHomeAlt />
              Home
            </NavLink>
          </li>
          <li className={styles.list_item}>
            <NavLink href="/blog/hello-world">
              <BiHomeAlt />
              Home
            </NavLink>
          </li>
        </ul>
        <ul className={styles.navbar_list}>
          <p style={{padding: '1rem', fontWeight: 600}}>Menu</p>
          <li className={styles.list_item}>
            <NavLink href="/">
              <BiHomeAlt />
              Home
            </NavLink>
          </li>
          <li className={styles.list_item}>
            <NavLink href="/about">
              <BiHomeAlt />
              Home
            </NavLink>
          </li>
          <li className={styles.list_item}>
            <NavLink href="/blog/hello-world">
              <BiHomeAlt />
              Home
            </NavLink>
          </li>
        </ul>
        <ul className={styles.navbar_list}>
          <p style={{padding: '1rem', fontWeight: 600}}>Menu</p>
          <li className={styles.list_item}>
            <NavLink href="/">
              <BiHomeAlt />
              Home
            </NavLink>
          </li>
          <li className={styles.list_item}>
            <NavLink href="/about">
              <BiHomeAlt />
              Home
            </NavLink>
          </li>
          <li className={styles.list_item}>
            <NavLink href="/blog/hello-world">
              <BiHomeAlt />
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
      <section></section>
    </div>
  );
};

export default IndexLayout;
