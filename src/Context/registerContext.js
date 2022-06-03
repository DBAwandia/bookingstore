import { createContext, useEffect, useReducer } from "react"

const INITIAL_STATE = {
     user: JSON.parse(localStorage.getItem("user")) || null,
     loading: false,
     error: null,
     email: null,

}

export const RegisterContext = createContext(INITIAL_STATE)

const RegisterReducer = (state, action) =>{
    switch(action.type){
       case "REGISTER_START":
           return{
            user: null,
            loading: false,
            error: null
           };
       case "REGISTER_SUCCESS":
            return{
             user: action.payload,
             loading: true,
             error: null
            };
       case "REGISTER_FAILURE":
             return{
              user: null,
              loading: false,
               error: action.payload
            };
        default:
            return state
    }
}

export const RegisterContextProvider = ({ children }) =>{
    const[ state, dispatch ] =useReducer(RegisterReducer, INITIAL_STATE)

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])

    return(
       <RegisterContext.Provider value={{email: state.email,user: state.user, loading: state.loading, error: state.error, dispatch}}>
           {children}
       </RegisterContext.Provider>
    )
}