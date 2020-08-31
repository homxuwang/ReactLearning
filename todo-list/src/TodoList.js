import React,{Component,Fragment} from 'react'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'hello ',
            list: []
        }
    }



    render() {
        return(
            <Fragment>
                <div>
                    <input 
                        value = { this.state.inputValue } 
                        onChange = { this.handleInputChage.bind(this) }
                    />
                    <button>提交</button>
                </div>
                <ul>
                    <li>Learn</li>
                    <li>React</li>
                </ul>
            </Fragment>
        )
    }

    handleInputChage = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
}

export default TodoList