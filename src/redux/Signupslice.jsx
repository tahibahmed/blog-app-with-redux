import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const signupapi = createAsyncThunk("signupapi", async (data) => {
    let url = ("https://fair-pink-tadpole-boot.cyclic.app/adam/user")
    let responsne = await fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(data)
    })
    let result =  await responsne.json()
    console.log(result)
    return result
})



export const signupslice = createSlice({
    name: 'signupsliceee',
    initialState: {
        data: [],
        authToken: null,
        localStorage :null,
        loading : false
    }, extraReducers: (builder) => {
        builder
        .addCase(signupapi.pending, (state, action) => {
        state.loading = true
        }) .addCase(signupapi.fulfilled, (state, action) => {
            state.loading = false
            state.data.push(action.payload)
            console.log(action.payload)
        })
            .addCase(signupapi.rejected, (state, action) => {
                state.loading = false 
            })
    }
})

export default signupslice.reducer