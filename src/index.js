import React from "react"
import ReactDOM from "react-dom"
import Root from "./root"
import configureStore from './store/store'
import registerServiceWorker from "./registerServiceWorker"

const store = configureStore(); 

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();