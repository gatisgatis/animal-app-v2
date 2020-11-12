import React, { FC, useState } from 'react';
import styles from './card.module.scss';

type CardProps = {
  heading: string;
  type: string;
  text?: string;
  imgs: string[];
};

let buttonText : string = 'Skatīt Aprakstu';

export const Card: FC<CardProps> = ({
  type,
  heading,
  text,
  imgs,
}: CardProps) => {
  const [imgNumber, setImgNumber] = useState<number>(0);
  const [imgSide, setImgSide] = useState<boolean>(true);

  const arrowLeftClickHandler = () => {
    if (imgNumber > 0) {
      setImgNumber(imgNumber - 1);
    } else {
      setImgNumber(2);
    }
  };

  const arrowRightClickHandler = () => {
    if (imgNumber < 2) {
      setImgNumber(imgNumber + 1);
    } else {
      setImgNumber(0);
    }
  };

  const switchSides = () => {
    const updateImgSide = !imgSide;
    if (updateImgSide) {
      buttonText = 'Skatīt Aprakstu';
    } else {
      buttonText = 'Skatīt Foto';
    }
    setImgSide(updateImgSide);
  };


  return (
    <div className={styles.card}>
      {imgSide ? (
        <div className={styles.imgWrapper}>
          <img
            src={imgs[imgNumber]}
            alt={`Foto: ${type}`}
            className={styles.img}
          />
          <div className={styles.loader}> </div>
          <button
            type="button"
            className={styles.arrowLeft}
            onClick={arrowLeftClickHandler}
          >
            &lt;
          </button>
          <button
            type="button"
            className={styles.arrowRight}
            onClick={arrowRightClickHandler}
          >
            &gt;
          </button>
        </div>
      ) : (
        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.heading}>{heading}</h2>
            <h4 className={styles.type}>({type})</h4>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      )}
      <button type="button" className={styles.switcher} onClick={switchSides}>{buttonText}</button>
    </div>
  );
};

Card.defaultProps = {
  text: 'Nav apraksta',
};
