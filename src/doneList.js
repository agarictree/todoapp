import React from "react";
import CloseButton from "./closeButton.js";

let Container = (props) => <div  className="doneListContainer">{props.children}</div>

export default function DoneList(props) {
    let { store, removeItemFromDoneList, addItemToNotDoneList } = props.store;
    function onclickHandler(e) {
        let text = e.target.textContent;
        removeItemFromDoneList(text);
        addItemToNotDoneList(text);
        document.body.className = localStorage.getItem("theme");
    }
    function removeBtnHandler(e) {
        let text = e.target.previousSibling.textContent;
        removeItemFromDoneList(text);
    }
    if(store.doneList.length == 0) {
        return (
            <Container>
            <h1>Done <span id="done">&#10003;</span></h1>
            <p>Empty.</p>
            </Container>
        )
    } else {
        return (
            <Container>
                <h1>Done <span id="done">&#10003;</span></h1>
                 <ul className="items">
                        {store.doneList.map((el, i) => {
                            return (
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