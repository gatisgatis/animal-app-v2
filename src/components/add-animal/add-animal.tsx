import React, { FC, useState } from 'react';
import styles from './add-animal.module.scss';

export type AddAnimalProps = {
  name?: string;
  type?: string;
  description?: string;
  img1?: string;
  img2?: string;
  img3?: string;
  img4?: string;
  cancelClick?: () => void;
  submitData?: () => void;
};

export const newAnimalValues = {
  name: 'Unknown',
  type: 'unknown',
  description: 'Nav pieejams',
  img1: 'https://thumbs.dreamstime.com/x/animal-cartoon-11871644.jpg',
  img2:
    'https://i.pinimg.com/originals/f6/14/8d/f6148de709ae8ce870c03d6094e55410.jpg',
  img3:
    'https://img.freepik.com/free-vector/many-animals-bamboo-forest_1308-35020.jpg?size=626&ext=jpg',
  img4:
    'https://www.nojitter.com/sites/default/files/question-mark-2110767_1280.jpg',
};

export const AddAnimal: FC<AddAnimalProps> = ({
  cancelClick,
  submitData,
  name,
  type,
  description,
  img1,
  img2,
  img3,
  img4,
}: AddAnimalProps) => {
  const [newInfo, setNewInfo] = useState<AddAnimalProps>({});

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedInfo = { ...newInfo };
    updatedInfo.name = event.target.value;
    setNewInfo(updatedInfo);
  };

  const typeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedInfo = { ...newInfo };
    updatedInfo.type = event.target.value;
    setNewInfo(updatedInfo);
  };

  const descriptionChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedInfo = { ...newInfo };
    updatedInfo.description = event.target.value;
    setNewInfo(updatedInfo);
  };

  const img1ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedInfo = { ...newInfo };
    updatedInfo.img1 = event.target.value;
    setNewInfo(updatedInfo);
  };

  const img2ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedInfo = { ...newInfo };
    updatedInfo.img2 = event.target.value;
    setNewInfo(updatedInfo);
  };

  const img3ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedInfo = { ...newInfo };
    updatedInfo.img3 = event.target.value;
    setNewInfo(updatedInfo);
  };

  const img4ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedInfo = { ...newInfo };
    updatedInfo.img4 = event.target.value;
    setNewInfo(updatedInfo);
  };

  const updateData = () =>
    Object.keys(newAnimalValues).forEach((key) => {
      // @ts-ignore
      if (newInfo[key] !== undefined && newInfo[key] !== '') {
        // @ts-ignore
        newAnimalValues[key] = newInfo[key];
      }
    });

  return (
    <div className={styles.background}>
      <div className={styles.bigWrapper}>
        <div className={styles.title}>Ievadi Informāciju par dzīvnieciņu!</div>
        <form className={styles.form}>
          <div className={styles.smallWrapper}>
            <span className={styles.itemName}>Vārds:</span>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Dzīvnieka vārds"
              onChange={(event) => nameChangeHandler(event)}
              value={newInfo.name}
              required
            />
          </div>
          <div>
            <span className={styles.itemName}>Tips/Suga:</span>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Dzīvienka tips/suga"
              onChange={(event) => typeChangeHandler(event)}
              value={newInfo.type}
              required
            />
          </div>
          <div>
            <span className={styles.itemName}>Araksts:</span>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Apraksts par dzīvnieku"
              onChange={(event) => descriptionChangeHandler(event)}
              value={newInfo.description}
            />
          </div>
          <div>
            <span className={styles.itemName}>Foto (1):</span>
            <input
              className={styles.inputField}
              type="url"
              placeholder="Links uz Foto (1)"
              onChange={(event) => img1ChangeHandler(event)}
              value={newInfo.img1}
            />
          </div>
          <div>
            <span className={styles.itemName}>Foto (2):</span>
            <input
              className={styles.inputField}
              type="url"
              placeholder="Links uz Foto (2)"
              onChange={(event) => img2ChangeHandler(event)}
              value={newInfo.img2}
            />
          </div>
          <div>
            <span className={styles.itemName}>Foto (3):</span>
            <input
              className={styles.inputField}
              type="url"
              placeholder="Links uz Foto (3)"
              onChange={(event) => img3ChangeHandler(event)}
              value={newInfo.img3}
            />
          </div>
          <div>
            <span className={styles.itemName}>Filtra Attēls:</span>
            <input
              className={styles.inputField}
              type="url"
              placeholder="Links uz Filtra attēlu"
              onChange={(event) => img4ChangeHandler(event)}
              value={newInfo.img4}
            />
          </div>
          <button
            className={styles.button}
            type="button"
            onClick={updateData}
          >
            {' '}
            Nolasīt datus{' '}
          </button>
          <button className={styles.button} type="button" onClick={cancelClick}>
            {' '}
            Cancel{' '}
          </button>
          <button className={styles.button} type="button" onClick={submitData}>
            {' '}
            APSTIPRINĀT{' '}
          </button>
        </form>
      </div>
    </div>
  );
};
