import { createSlice } from "@reduxjs/toolkit";



export const authenticationSlice = createSlice({  

    name:"Authentication",
    initialState:{
        isAuthenticated:false,
        userData:{
            id:null,
            name:null,
            email:null,
            purchasedBooks:[],
            rentedBooks:[],
            roles:[],
        }
    },

    reducers:{
        login:(state,action)=>{
            state.isAuthenticated=true;
            state.userData=action.payload;
        },
        logout:(state)=>{
            state.isAuthenticated=false;
            state.userData={
                id:null,
                name:null,
                email:null,
                purchasedBooks:[],
                rentedBooks:[],
                roles:[],
            };
        },
    },
    extraReducers:(builder)=>{
        builder.addCase("login", (state, action) => {
            state.isAuthenticated = true;
            state.userData = action.payload;
        });
        builder.addCase("logout", (state) => {
            state.isAuthenticated = false;
            state.userData = {
                id: null,
                name: null,
                email: null,
                purchasedBooks: [],
                rentedBooks: [],
                roles: [],
            };
        });
    },  



 })

 export const { login, logout } = authenticationSlice.actions;
 export default authenticationSlice.reducer;