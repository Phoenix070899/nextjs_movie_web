import React, { ReactElement, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from './NavLink.module.css'


const NavLink = ({ children, href } : {children: ReactNode, href: string}) => {
  const router = useRouter();
  return (
    <Link href={href} className={router.pathname === href ? styles.cur_page : undefined}>
      {children}
    </Link>
  );
};



export default NavLink;