

import { configureStore } from "@reduxjs/toolkit";
// import { addtoCart } from "./Slice";
import AddtoCart from "./Slice"

export default configureStore({
    reducer:{
        Cart:AddtoCart
    }
})