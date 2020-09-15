import React from "react"
import styles from "./name.module.css"

const Name = (props) => {
    console.log(props.children);
    const myStyle = {
        color:'grey',
        backgroundColor:'black'}
    const myName= props.children || "jojo"
    return(
    <h1 style = {myStyle} className = {styles.parent} >Bonjour {myName}! il fait {20+3} degres 
    dehors.{props.job && " Je suis " + props.job + "."  } </h1>
    )
}

export default Name