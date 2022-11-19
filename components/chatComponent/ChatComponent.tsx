import React, { useEffect, useState } from "react";
import styles from "./ChatComponent.module.scss";
import Image from "next/image";
import Avatar from "./img/person.jpg";
import EllipseAvatar from "./img/ellipse_person.jpg";
import { useWindowResize } from "../../hooks/useWindowResize";
import { IUser } from "../../pages";

type Props = {
  users: IUser[];
};

export function ChatComponent({ users }: Props) {
  const [isMobile, setIsMobile] = useState(true);
  const size = useWindowResize();

  useEffect(() => {
    if (size < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);

  const personStatus = (status: IUser) => {
    return (
      <Image
        src={status.online ? "/chat_online.svg" : "/chat_offline.svg"}
        alt="chat_icon"
        width="61"
        height="37"
      />
    );
  };

  const tableHeadArr = [
    "photo",
    "name",
    "status",
    "registration",
    "age",
    "action",
  ];

  return (
    <section className={styles.chatWrapper}>
      <h3>our users</h3>
      <ul className={styles.headTable}>
        {tableHeadArr.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul className={styles.listWrapper}>
        {users.map((person, i) => {
          return (
            <li key={i} className={styles.item}>
              <div className={styles.name}>{person.name}</div>
              <div className={styles.status}>
                {person.online ? "online" : "offline"}
              </div>
              <div className={styles.messageIcon}>
                {isMobile ? (
                  <Image
                    src="/small_chat_icon.svg"
                    alt="chat_icon"
                    width="22"
                    height="19"
                  />
                ) : (
                  personStatus(person)
                )}
              </div>
              <Image src={Avatar} alt="avatar" className={styles.avatar} />
              <div className={styles.ellipseAvatar}>
                <Image src={EllipseAvatar} alt="avatar" />
              </div>
              <div className={styles.age}>{person.age} years</div>
              <div className={styles.city}>{person.registration}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
