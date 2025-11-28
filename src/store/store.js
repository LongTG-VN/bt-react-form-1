import { configureStore } from "@reduxjs/toolkit"
import ManaStudents from "../Compoment/slice"
const store = configureStore ({
    reducer: {
         listStudent: ManaStudents, 
    }
})
export default store;