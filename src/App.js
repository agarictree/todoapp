import React from "react";
import Input from "./input.js";
import Container from "./listContainer.js";
import { connect } from "react-redux";
import ChangeTheme from "./changeThemeButton.js";
import { addItemToDoneList, addItemToNotDoneList, removeItemFromTodoList, removeItemFromDoneList, addThemeToStoreAction} from "./actionCreators.js";

export let Context = React.createContext();

function TodoApp(props) {
    return (
        <>
            <ChangeTheme store = {props}/>
            <h1 className="mainHeader">Todo app</h1>
            <Input store = {props}/>
            <Context.Provider value={props}>
                <Container />
            </Context.Provider>
        </>
    )
}

let mapStateToProps = (store) => {
    return {
        store
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addItemToNotDoneList: (item) => {
            dispatch(addItemToNotDoneList(item));
        },
        addItemToDoneList: (item) => {
            dispatch(addItemToDoneList(item));
        },
        removeItemFromTodoList: (item) => {
            dispatch(removeItemFromTodoList(item));
        },
        removeItemFromDoneList: (item) => {
            dispatch(removeItemFromDoneList(item));
        },
        addThemeToStoreAction: (theme) => {
            dispatch(addThemeToStoreAction(theme));
        }
    }
}
export let TodoAppConnected = connect(mapStateToProps, mapDispatchToProps)(TodoApp);