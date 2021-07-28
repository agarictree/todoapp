import { combineReducers } from "redux";

export const addItem = "ADD_ITEM";
export const itemIsDone = "ITEM_IS_DONE";
export const deleteItemFromTodoList = "DELETE_ITEM_FROM_TODOLIST";
export const deleteItemFromDoneList = "DELETE_ITEM_FROM_DONELIST";
export const addThemeToStore = "ADD_THEME_TO_STORE";

let initialState = {
    notDoneList: [],
    doneList: [],
    theme: "light"
};


export function todoReducer(state = initialState, action) {
    switch(action.type) {
        case addThemeToStore:
            return {...state, theme: action.payload};
        case addItem:
            return {...state, notDoneList: state.notDoneList.concat(action.payload)};
        case itemIsDone:
            return {...state, doneList: state.doneList.concat(action.payload)};
        case deleteItemFromTodoList: 
            let todoIndex = state.notDoneList.indexOf(action.payload);
            let newArrTodo = state.notDoneList.concat();
            newArrTodo.splice(todoIndex, 1);
            
        if(todoIndex !== -1) {
            return {...state, notDoneList: newArrTodo};
        }
        case deleteItemFromDoneList:
            let doneIndex = state.doneList.indexOf(action.payload);
            let newArrDone = state.doneList.concat();
            newArrDone.splice(doneIndex, 1);
            if(doneIndex !== -1) {
                return {...state, doneList: newArrDone};
            }
    default: 
        return state;
    }
}

// let theme = {
//     theme: "dark"
// };

// function themeReducer(state = theme, action) {
//     switch(action.type) {
//         case changeTheme:
//             return {...state, theme: action.payload}
//         default: 
//             return state;
//     }
    
// }
// export let rootReducer = combineReducers({
//     todos: todoReducer,
//     theme: themeReducer
// });