import React, { useState } from 'react';
import './App.scss';
import { allAnimals, Animal, uniqueTypes } from './animal-data';
import { AnimalBox } from './components/animalbox/animalbox';
import { AddAnimal, newAnimalValues } from './components/add-animal/add-animal';
import { Card } from './components/card/card';
import logo from './img/animal_logo.png';

let boxImage: string = '';

const FancyApp = () => {
  const [animalsInfo, setAnimalsInfo] = useState<Animal[]>(allAnimals);
  const [showInputs, setShowInputs] = useState<boolean>(false);

  const uniqueAnimalTypes = uniqueTypes(animalsInfo);

  const checkboxHandler = (type: string) => {
    const updatedAnimalsInfo = [...animalsInfo];
    animalsInfo.forEach((animal, index) => {
      if (animal.type === type) {
        updatedAnimalsInfo[index].filtered = !animal.filtered;
      }
    });
    setAnimalsInfo(updatedAnimalsInfo);
  };

  const animalBoxImgHandler = (type: string): void => {
    animalsInfo.some((animal) => {
      boxImage = animal.imgbox;
      return animal.type === type;
    });
    if (boxImage === '') {
      boxImage =
        'https://www.nojitter.com/sites/default/files/question-mark-2110767_1280.jpg';
    }
  };

  const cancelClickHandler = () => {
    setShowInputs(!showInputs);
  };

  const submitDataHandler = () => {
    const theAnimal: Animal = {
      name: newAnimalValues.name,
      type: newAnimalValues.type,
      description: newAnimalValues.description,
      img1: newAnimalValues.img1,
      img2: newAnimalValues.img2,
      img3: newAnimalValues.img3,
      imgbox: newAnimalValues.img4,
      filtered: false,
    };
    animalsInfo.some((animal) => {
      if (animal.type === theAnimal.type) {
        theAnimal.filtered = animal.filtered;
        return true;
      }
      return false;
    });
    const updatedAnimalsInfo = [...animalsInfo, { ...theAnimal }];
    setShowInputs(!showInputs);
    setAnimalsInfo(updatedAnimalsInfo);
  };

  
  return (
    <div className="container-fluid">
      <div className="fancy-app">
        {showInputs && (
          <div className="add-animal-window">
            <AddAnimal
              cancelClick={cancelClickHandler}
              submitData={submitDataHandler}
            />
          </div>
        )}
        <div className="row middle-xs">
          <div className="col-xs-12 col-sm-6">
            <div className="app-title">FANCY ANIMAL APP</div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <img src={logo} alt="Kapec nav bildes?" className="app-logo" />
          </div>
          <div className="col-xs-6 col-sm-3">
            <button
              type="button"
              className="button--add-animal"
              onClick={() => setShowInputs(!showInputs)}
            >
              PIEVIENOT KARTĪTI
            </button>
          </div>
        </div>
        <div className="app-instruction">Atzīmē, kurus dzīvniekus rādīt</div>
        <div className="row margin-bottom--50">
          {uniqueAnimalTypes.map((type, index) => {
            return (
              <div
                className="col-xs-6 col-sm-4 col-md-2 col-lg-1"
                key={index.toString() + type}
              >
                <AnimalBox
                  type={type}
                  id={index.toString()}
                  onChange={() => checkboxHandler(type)}
                  {...animalBoxImgHandler(type)} // KAS IR ŠIS? KĀPĒC TĀ JĀRAKSTA? NEVARU IEBRAUKT
                  img={boxImage}
                />
              </div>
            );
          })}
        </div>
        <div className="row margin-bottom--50 galery">
          {animalsInfo.map((animal, index) => {
            if (animal.filtered)
              return (
                <div
                  key={index.toString() + animal.name}
                  className="col-md-4 col-xs-12 col-sm-6"
                >
                  <Card
                    type={animal.type}
                    heading={animal.name}
                    text={animal.description}
                    imgs={[animal.img1, animal.img2, animal.img3]}
                  />
                </div>
              );
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default FancyApp;
