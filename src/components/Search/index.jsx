import React from "react";
import styles from "./style.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    return (
        <div className={styles.searchBar}>
            <AiOutlineSearch className={styles.searchIcon} size={23} />
            <input type="text" placeholder="Search" />
        </div>
    );
}

export default Search;