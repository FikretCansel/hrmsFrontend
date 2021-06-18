import {createStore} from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReduce from "./rootReducer";

export function configureStore(){
    return createStore(rootReduce,devToolsEnhancer());
}