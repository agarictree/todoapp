import { addItem, deleteItemFromDoneList, deleteItemFromTodoList, itemIsDone, addThemeToStore } from "./reducer.js";

export function addItemToNotDoneList(item) {
    return {
        type: addItem,
        payload: item
    }
}
export function addItemToDoneList(item) {
    return {
        type: itemIsDone,
        payload: item
    }
}
export function removeItemFromTodoList(item) {
    return {
        type: deleteItemFromTodoList,
        payload: item
    }
}
export function removeItemFromDoneList(item) {
    return {
        type: deleteItemFromDoneList,
        payload: item
    }
}
export function addThemeToStoreAction(theme) {
    return {
        type: addThemeToStore,
        payload: theme
    }
}