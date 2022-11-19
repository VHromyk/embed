import React, { useState } from "react";
import styles from "./VideoComponent.module.scss";
import { Modal } from "../modal/Modal";
import Image from "next/image";
import { YoutubeEmbed } from "../youtubeEmbed/youtubeEmbed";
import { IVideo } from "../../pages";

type Props = {
  videoData: IVideo;
};

export const VideoComponent = ({ videoData }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const { link, text, embed } = videoData;
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <h3>{`embed ${embed}`}</h3>
          <p className={styles.embedDescription}>{text}</p>
          <a href={link} className={link}>
            {link}
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
          <YoutubeEmbed embed={embed} />
        </Modal>
      )}
    </>
  );
};
