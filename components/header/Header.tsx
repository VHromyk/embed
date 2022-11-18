import React from 'react';
import styles from './Header.module.scss';
import {Container} from "../container/Container";

export function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <div>Header</div>
            </Container>
        </header>
    )
}