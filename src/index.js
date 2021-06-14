import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore } from 'redux'

import App from './component/App'
import Reducer from './reducers/index'

class Index extends Component {
    render(){
        return (
            <div className="container" style={{maxWidth:900, margin:'0 auto'}}>
                <App />
            </div>
        )
    }
}

ReactDOM.render(<Provider store={createStore(Reducer)}><Index/></Provider>, document.getElementById('root'))