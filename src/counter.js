import React, {Component} from "react"

export default class extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 1
        }
    }

    climb(){
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render(){
        return (
            <div onClick={this.climb.bind(this)}>
                <h1>React click me :{this.state.count}</h1>
            </div>
        )
    } 
}