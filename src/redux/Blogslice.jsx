import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const blogapi = createAsyncThunk("blogapi", async (data) => {

    console.log("inside api request ",data)
    console.log("inside api request ",data.getAll('type'))
    let url = ("https://fair-pink-tadpole-boot.cyclic.app/adam/post")
    let responsne = await fetch(url, {
        method: "POST",
        headers: {"content-type": "multipart/form-data" , "Authorization" : localStorage.getItem("authToken")},
        body: data
    })
    let result = await responsne.json()
    console.log(result)
    return result
})



export const blogslice = createSlice({
    name: 'blogsliceee',
    initialState: {
        data: null,
        authToken: null
    }, extraReducers: (builder) => {
        builder
            .addCase(blogapi.fulfilled, (state, action) => {
                state.data = action.payload
            })
    }
})

export default blogslice.reducer