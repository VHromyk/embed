import styles from "./youtubeEmbed.module.scss";
import React from "react";

type Props = {
  embed: string;
};

export function YoutubeEmbed({ embed }: Props) {
  return (
    <iframe
      className={styles.iframeEmbed}
      src={`https://www.youtube.com/embed/${embed}?autoplay=1&mute=1`}
      title="YouTube video player"
      allow="autoplay; clipboard-write; encrypted-media"
      allowFullScreen
    ></iframe>
  );
}
