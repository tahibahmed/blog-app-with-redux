import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const loginapi = createAsyncThunk("loginapi", async (data) => {
    let url = ("https://fair-pink-tadpole-boot.cyclic.app/adam/user/login")
    let responsne = await fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(data)
    })
    let result =  await responsne.json()
    console.log(result)
    return result
})



export const loginslice = createSlice({
    name: 'loginsliceee',
    initialState: {
        data: null,
        authToken: null,
        localStorage :null,
        loading : false
    }, extraReducers: (builder) => {
        builder
        .addCase(loginapi.pending, (state, action) => {
        state.loading = true
        }) .addCase(loginapi.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            console.log(action.payload)
            state.authToken = action.payload.data.authToken
            localStorage.setItem("authToken", "Bearer" + "  " + state.authToken)
        })
            .addCase(loginapi.rejected, (state, action) => {
                state.loading = false 
            })
    }
})

export default loginslice.reducer