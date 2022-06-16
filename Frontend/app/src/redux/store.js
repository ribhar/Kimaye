import {legacy_createStore as createStore} from "redux"
import { dataReducer } from "./reducer"

export const store = createStore(dataReducer)