import { legacy_createStore as createStore } from "redux";
import { todoReducer } from "./reduser/todoReduser";



export const store= createStore(todoReducer)