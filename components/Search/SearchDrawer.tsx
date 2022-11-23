import React, { FC } from "react";
import styles from "./SearchInput.module.css";
import { GrFormClose } from "react-icons/gr";

export const SearchDrawer = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
  return open ? (
    <div className={styles.search_drawer}>
      <div className={styles.drawer_header}>
        <h2>Search Results</h2>
        <GrFormClose onClick={onClose} size={24}/>
      </div>
    </div>
  ) : null;
};
