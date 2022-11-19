import React from "react";
import styles from "./Main.module.scss";
import { Container } from "../container/Container";
import { VideoComponent } from "../videoComponent/VideoComponent";
import { ChatComponent } from "../chatComponent/ChatComponent";
import { IData } from "../../pages";

export function Main({ data }: IData) {
  const { video, users } = data;
  return (
    <Container>
      <div className={styles.mainContainer}>
        <VideoComponent videoData={video} />
        <ChatComponent users={users} />
      </div>
    </Container>
  );
}
