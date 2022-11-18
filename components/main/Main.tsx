import React from 'react';
import styles from './Main.module.scss';
import {Container} from "../container/Container";
import {VideoComponent} from "../videoComponent/VideoComponent";
import {ChatComponent} from "../chatComponent/ChatComponent";
import {personsList} from "../chatComponent/data/data";

export function Main() {
    return (
        <Container>
            <div className={styles.mainContainer}>
                <VideoComponent />
                <ChatComponent personsList={personsList} />
            </div>
        </Container>
    )
}