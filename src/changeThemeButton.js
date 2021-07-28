import React from "react";

export default function ChangeTheme(props) {
    let {store, changeThemeAction, addThemeToStoreAction} = props.store;
    let theme = store.theme;
    function changeThemeHandler() {
        console.log(theme);
        if(theme == "dark") {
            addThemeToStoreAction("light");
        }
        if(theme == "light") {
            addThemeToStoreAction("dark");
        }
    }
    return <button onClick={changeThemeHandler} className="changeThemeBtn">Change Theme</button>
}