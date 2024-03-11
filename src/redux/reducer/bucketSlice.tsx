import {createSlice} from "@reduxjs/toolkit"

const bucketSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        add(state: any,action){
            state.push(action.payload);
        },
        remove(state,action){
            return state.filter((item : any)=>item.id !== action.payload);
        }
    }

})

export const {add,remove} = bucketSlice.actions;
export default bucketSlice.reducer;