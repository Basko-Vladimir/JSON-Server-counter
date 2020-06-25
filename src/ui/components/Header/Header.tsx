import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';


export const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to={'/counter'} activeClassName={styles.active}>Counter</NavLink>
            <NavLink to={'/settings'} activeClassName={styles.active}>Settings</NavLink>
        </header>
    )
};