import { createSlice } from "@reduxjs/toolkit";


//Estos eventos se llevaran a cabo una vez la solicitud
//Hacia el backend es correcta
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      // userstate puede ser de 3 tipos: AUTHENTICATED NOT-AUTHENTICATED CHECKING
      userState:'NOT-AUTHENTICATED',
      id: null,
      name: "",
      email: "",
      token:"",
      error:"",
      // puedes agregar más campos según tus necesidades

    },
  },
  reducers: {
    //Cuando se esta comprobando si la solicitud al backend es correcta
    onChecking: (state, action) => {
      state.user = {...state.user, userState: 'CHECKING'}
      state.user = {...state.user, token:''}
      state.user = {...state.user, email:''}
      state.user = {...state.user, error:''}
     
    },
    //Se llevara a cabo una vez la solicitud de login del backend es correcta
    onLogin: (state, action) => {
        state.user = {...state.user, userState: 'AUTHENTICATED'}
        state.user = {...state.user, token: action.payload.jwt}
        state.user = {...state.user, email: action.payload.email}
        state.user = {...state.user, error:''}
     
    },
    //se llevara a cabo una vez se ha realizado la solicitud al backend para hacer logout y ademas se ha borrado el jwt token del local storage del cliente
    onLogout: (state, action) => {
        state.user = {...state.user, userState: 'NOT-AUTHENTICATED'}
        state.user = {...state.user, token:''}
        state.user = {...state.user, email:''}
        state.user = {...state.user, error: action.payload.error}
    
    },
    //Se llevara a cabo una vez la solicitud de registro de un nuevo usuario del backend es correcta
    onRegister: (state, action) => {
      state.user = {...state.user, userState: 'AUTHENTICATED'}
      state.user = {...state.user, token: action.payload.jwt}
      state.user = {...state.user, error:''}
   
  },
},

});

//se exponen las funciones para poder usarlas en mis customhooks (en la carpeta Hooks)
export const { onLogin,onChecking,onLogout,onRegister} =
  authSlice.actions;
export default authSlice.reducer;
