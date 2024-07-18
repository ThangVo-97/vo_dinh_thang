import { useDispatch } from "react-redux"

import { useEffect } from "react";
import { getListCurrencyAction } from "../redux/reducer/CurrencySlice";
import CurrencyComponent from "../component/CurrencyComponent";
const CurrencyContainer = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getListCurrencyAction())

    }, [])
    return (
        <CurrencyComponent />
    )
}

export default CurrencyContainer