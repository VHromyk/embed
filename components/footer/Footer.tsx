import React from 'react';
import styles from './Footer.module.scss';
import {Container} from "../container/Container";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div>Footer</div>
            </Container>
        </footer>
    )
}