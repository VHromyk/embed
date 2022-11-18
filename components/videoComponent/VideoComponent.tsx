import React, { useState } from "react";
import styles from "./VideoComponent.module.scss";
import { Modal } from "../modal/Modal";
import Image from "next/image";
import { YoutubeEmbed } from "../youtubeEmbed/youtubeEmbed";

export function VideoComponent() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <h3>embed RK1K2bCg4J8</h3>
          <p className={styles.embedDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa
            deserunt dignissimos enim?
          </p>
          <a
            href="https://www.youtube.com/watch?v=RK1K2bCg4J8&t=2414s"
            className={styles.link}
          >
            https://www.youtube.com/watch?v=RK1K2bCg4J8&t=2414s
          </a>
        </div>
        <div className={styles.imageThumb} onClick={showModalHandler}>
          <Image
            src="/maxresdefault.jpg"
            alt="thumbnail"
            width="480"
            height="270"
          />
          <div className={styles.youtubeLogo}>
            <Image
              src="/youtube_logo.svg"
              alt="youtube_logo"
              width="70"
              height="49"
            />
          </div>
        </div>
      </div>
      {showModal && (
        <Modal onClose={closeModalHandler}>
          <YoutubeEmbed embed="RK1K2bCg4J8" />
        </Modal>
      )}
    </>
  );
}
