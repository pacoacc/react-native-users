import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean
  userName: string | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  userName: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true
      state.userName = action.payload
    },
    logout: state => {
      state.isAuthenticated = false
      state.userName = null
    },
  },
})

export const {login, logout} = authSlice.actions

export default authSlice.reducer
