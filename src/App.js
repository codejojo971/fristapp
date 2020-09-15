import React from 'react';
import './App.css';
import Name from "./Name";
import styles from "./name.module.css";
import LifeCycle from "./Lifecycle"
import Lifecycle from './Lifecycle';
import Counter from './Counter';


// on ne peut envoyer qu'un seul noued
// si l'on veut renvoyer plusieurs noeud sans rajouter de balise inutile
// on utilisera la balise React .Frangment
const App = () => {
  const arrayOfColors = ["blue", "yellow","green","red"]
  // créer une liste non ordonnées des couleurs presentees dans le tableau

  
  return (
  // <React.Fragment >
    <>
    <Name></Name>
    <Name job="Fleuriste">kato</Name>
    <Name job ="Developper"/>

    <p>
      ma premiere App
    </p>
    <p>
      ma seconde paragraphe
    </p>
    <ul>  
        {arrayOfColors.map((color,index)=> <li key ={index} className = {styles.point}>{color}</li>) }
      </ul>
      <Lifecycle languague="js"></Lifecycle>
      <Counter/>
      
    </>
   // </React.Fragment>
  );
}

export default App;
