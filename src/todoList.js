import React, { useContext } from "react";
import { Context } from "./index.js";
import CloseButton from "./closeButton.js";

let Container = (props) => <div className="notDoneListContainer">{props.children}</div>

export default function TodoList(props) {
    let { store, addItemToDoneList, removeItemFromTodoList } = props.store;
    // localStorage.setItem("notDoneList", store.notDoneList);
    let context = useContext(Context);
    let notDoneList = context.getItem("notDoneList") ? context.getItem("notDoneList").split(",") : [];
    console.log(notDoneList);
    let onclickHandler = (e) => {
        let text = e.target.textContent;
        addItemToDoneList(text);
        removeItemFromTodoList(text);
        document.body.className = localStorage.getItem("theme");
    }
    function removeBtnHandler(e) {
        let text = e.target.previousSibling.textContent;
        removeItemFromTodoList(text);
        let index = notDoneList.indexOf(text);
        notDoneList.splice(index, 1);
        // context.removeItem("notDoneList");
        context.setItem("notDoneList", notDoneList);
        document.body.className = localStorage.getItem("theme");
    }
    if(!notDoneList || notDoneList.length == 0 ) {
        return (
            <Container>
            <h1>To Do List <span id="notDone">&#9679;</span></h1>
            <p>Add your first item to list!</p>
            </Container>
        )
    } else {
        return (
            <Container>
                <h1>To Do List <span id="notDone">&#9679;</span></h1>
                 <ul className="items">
                {notDoneList.map((el, i) => {
                    return(
                        <div>
                            <li key = {i} onClick={onclickHandler}>{el}</li>
                            <CloseButton remove={removeBtnHandler}/>
                        </div>
                    ) 
                })}
            </ul>
            </Container>
           
        )
        
    }
}