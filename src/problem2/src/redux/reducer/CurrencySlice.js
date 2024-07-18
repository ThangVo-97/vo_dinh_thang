
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { CurrencyAction } from "../action/CurrencyAction"
import { getListCurrencyService } from "../service/CurrencyService"

export const getListCurrencyAction = createAsyncThunk(
    CurrencyAction.GET_LIST_CURRENCY,
    async () => {
        const listcurrency = await getListCurrencyService()
        return listcurrency
    }
)

const initialState = {
    listPrice: [],
}
export const CurrencySlice = createSlice({
    name: 'CurrencySlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // get list currency
        builder.addCase(getListCurrencyAction.fulfilled, (state, action) => {
            state.listPrice = action.payload
            console.log("getList fulfilled");
        })
        builder.addCase(getListCurrencyAction.pending, (state, action) => {
            console.log("getList pending");
        })
        builder.addCase(getListCurrencyAction.rejected, (state, action) => {
            console.log("getList reject")
        })

    }
})

// Action creators are generated for each case reducer function
export const { setCompleted, setYourCurrentFeeling } = CurrencySlice.actions

export default CurrencySlice.reducer