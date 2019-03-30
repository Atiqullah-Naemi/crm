import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/layout/Header'
import Clients from './components/clients/Clients'

class App extends Component {
    render() {
        return (
        	<Provider store={store}>
        		<Header />
        		<Clients />
        	</Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
