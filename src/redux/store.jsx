import { legacy_createStore as createStore,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { todoReducer } from "./reduser/todoReduser";



export const store= createStore(todoReducer,applyMiddleware(thunk))


// {
//     "version": 2,
//     "builds": [
//         {
//             "src": "index.js",
//             "use": "@vercel/node"
//         }
//     ],
//     "routes": [
//         {
//             "src": "/(.*)",
//             "dest": "index.js"
//         }
//     ]
// }