import React from "react"
// 1 creer un class component

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            compteur : 0
        }
    }
    
    UpdateIncremented =(value) =>{
        this.setState((state)=>{
            return(
                {compteur: state.compteur + value}
            )
        })
    }
    
    
    render(){

        return(
        <div>
            {/** ici onClick attend une reference a une fonction.donc si
             * je dois passer un paramètre à une fonction 
             */}
            <button onClick={() =>this.UpdateIncremented(1)}>incremente</button>
            <button onClick={() =>this.UpdateIncremented(-1)}>decremente</button>
            <span>compteur :{this.state.compteur} </span>
        </div>
        )
        
    }
}
export default Counter

// 2 ce composant devra renvoyer une div contenant deux boutons, et un compteur
// 3 la valeur du compteur sera initailisée à 0
 // si on clique sur le bouton "incrementer", le compteur augmentera de 1
 // si on clique sur le bouton "decrementer" le compteur diminuera de 1
// 4 tester votre travail (importer Counter dans App)