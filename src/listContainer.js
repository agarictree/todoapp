import React, { useContext } from "react";
import TodoList from "./todoList.js";
import DoneList from "./doneList.js";
import { Context } from "./App.js";

export default function Container() {
    let store = useContext(Context);
    return (
        <div className="todoContainer">
            <TodoList store = {store}/>
            <DoneList store = {store}/>
        </div>
    )
}
