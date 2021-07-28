import { takeEvery, put, call, takeLatest } from "redux-saga/effects";
import { changeThemeAction, addThemeToStoreAction } from "./actionCreators.js";
import { addThemeToStore, changeTheme } from "./reducer.js";
import { store } from "./index.js";

async function loadStyles() {
let theme = store.getState().theme;
if(theme == "light") {
     await import("./light.css");
}
if(theme == "dark") {
    await import("./dark.css");
    }
}
function* sagaWorker() {
    yield call(loadStyles());
    yield put(changeThemeAction());

}
export default function* sagaWatcher() {
    yield takeEvery(addThemeToStore, sagaWorker);
}