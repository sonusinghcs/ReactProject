import {configureStore} from "@reduxjs/toolkit"
import t from "../features/todo/todoSlice"

export const store = configureStore({
    reducer:t
})