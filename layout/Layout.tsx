import React from 'react';
import {Header} from "../components/header/Header";
import {Footer} from '../components/footer/Footer';
import styles from './Layout.module.scss'

type Props = {
    children: JSX.Element | JSX.Element[]
}

export function Layout({children}: Props) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.mainWrapper}>{children}</main>
            <Footer />
        </div>
    )
}