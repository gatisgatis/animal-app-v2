import React, { FC } from 'react';
import styles from './animalbox.module.scss';


type AnimalBoxProps = {
  type: string;
  img?: string;
  id?: string;
  onChange?: () => void;
};

export const AnimalBox: FC<AnimalBoxProps> = ({
  type,
  img,
  id,
  onChange,
}: AnimalBoxProps) => {
  return (
    <div className={styles.animalbox}>
      <label htmlFor={id} className={styles.type}>
        {type}
      </label>
      <img src={img} alt="img" className={styles.img} />
      <input
        id={id}
        type="checkbox"
        className={styles.checkbox}
        onChange={onChange}
      />
      <div className={styles.overlay} />
    </div>
  );
};

AnimalBox.defaultProps = {
  img:
    'https://images.squarespace-cdn.com/content/v1/5ea237e587e03021f9ef8cc2/1591322910598-NMLOTZC0O0ETSW8OJFO5/ke17ZwdGBToddI8pDm48kCLbhA7m7AmYv7-6E_H7lbB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ouw-8l5B_J38LMU7OZFvYdoh1CoK9or-QWSHGWhYAjrn6y9-oC5sPHSqhi8nMLAnA/Question-mark.jpg?format=500w',
  onChange: undefined,
  id: 'viens',
};
