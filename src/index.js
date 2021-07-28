import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import { TodoAppConnected } from "./App.js";
import { Provider } from "react-redux";
import { createStore} from "redux";
import { todoReducer } from "./reducer";

export let Context = React.createContext();
let store = createStore(todoReducer);
document.body.className = localStorage.getItem("theme");
store.subscribe(() => {
    localStorage.setItem("notDoneList", store.getState().notDoneList);
    localStorage.setItem("doneList", store.getState().doneList);
    localStorage.setItem("theme", store.getState().theme);
    document.body.className = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";
})

function App() {
    return (
        <div className="main">
            <Context.Provider value={localStorage}>
            <TodoAppConnected />
            </Context.Provider>
        </div>
        
    )
}
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));