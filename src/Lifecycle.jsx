import React from "react"

class Lifecycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            connected : false
        }
        this.changeDisconnectedValue =this.changeDisconnectedValue.bind(this)
       // this.changeConnecyedValue = this.changeConnecyedValue.bind(this)
        //console.log("constructeur a été appelé")
        //this.state = this.state.bind(this)
    }

    componentDidMount (){
        //console.log("methode componentDidMount a été appelé")
    }

    componentDidUpdate(){
        console.log("Update :La methode componentdidupdate a ete appelé")
    }
    changeConnecyedValue= () => {
       // this.state.connected = true
       console.log(this, "valeur de this")
       //modifier mon state 
        this.setState({connected:true})
    }

    //créer un bouton pour se déconnecter cela au ra pour effet de passer la valeur de connected à false
   changeDisconnectedValue  ()  {
       this.setState({connected :false})
   }
   
    render() {
        console.log("la methode render a été appelé")
        console.log("prosp:",this.props)
        return (
            <div>
                <p>Lifecycle</p>
                <p>valeur du state : {this.state.connected.toString()}</p>
                <button onClick={this.changeConnecyedValue} >se connecter</button>
                <button onClick={this.changeDisconnectedValue}>se déconnecter</button>
            </div>   
        )
    }
}

/*const Lifecycle = () => {
    return (
        <p>Lifecycle</p>
    )
}*/

export default Lifecycle