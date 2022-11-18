import React, { useEffect, KeyboardEvent, MouseEvent } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
  onClose: () => void;
}

export function Modal({ children, onClose }: Props) {
  useEffect(() => {
    window.addEventListener("keyup", handleKeyDown);
    return () => {
      window.removeEventListener("keyup", handleKeyDown);
    };
  });

  const handleKeyDown = ((event: KeyboardEvent) => {
    if (event.code === "Escape") {
      onClose();
    }
  }) as any;

  const handleBackdrop = (event: MouseEvent) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleBackdrop}>
      <div className="modal">{children}</div>
      <style jsx>
        {`
          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 1200;
          }
          .modal {
            position: absolute;
            min-width: 100%;
            padding-left: 20px;
            padding-right: 20px;
          }
        `}
      </style>
    </div>
  );
}
