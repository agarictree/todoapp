import React from "react";

export default function Input(props) {
    let ref = React.createRef();
    let { store, addItemToNotDoneList } = props.store;
    let onSubmitHandler = (e) => {
        e.preventDefault();
        addItemToNotDoneList(ref.current.value);
        ref.current.value = "";
        document.body.className = localStorage.getItem("theme");
    }
    return (
        <form className="addItemForm" onSubmit = {onSubmitHandler}>
            <label htmlFor="addItem">Add item to todo list</label>
            <input type="text" id="addItem" ref = {ref}/>
            <button type="submit" className="submitItem">Send</button>
        </form>
    )
}