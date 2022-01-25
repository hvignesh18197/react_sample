import {createStore, combineReducers} from "redux";
import ChoclateReducer from "./ChoclateReducer";
import CountReducer from "./CountReducer";

const rootReducer = combineReducers({
    counter: CountReducer,
    chocolate: ChoclateReducer
})

const store = createStore(rootReducer);

export default store;
