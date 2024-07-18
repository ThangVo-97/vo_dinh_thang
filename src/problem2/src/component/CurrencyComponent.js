import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import './CurrencyComponent.css';

const CurrencyComponent = () => {
    const listPrice = useSelector(state => state.CurrencySlice.listPrice)
    const [valueFrom, setValueFrom] = useState()
    const [valueTo, setValueTo] = useState()
    const [amountTo, setAmountTo] = useState(1)
    const [amountFrom, setAmountFrom] = useState(1)

    useEffect(() => {
        if (listPrice.length > 0) {
            setValueFrom(listPrice[0].currency)
            setValueTo(listPrice[0].currency)
        }
    }, [listPrice])

    useEffect(() => {
        if (listPrice.length > 0) {
            let itemFrom = listPrice.find(x => x.currency === valueFrom)
            let itemTo = listPrice.find(x => x.currency === valueTo)
            let tempAmount = amountFrom * (itemFrom.price / itemTo.price)
            setAmountTo(tempAmount)
        }
        console.log("asfd: ", valueFrom);
    }, [valueFrom, valueTo, amountTo, amountFrom])

    const renderListCurrency = () => {
        if (!listPrice) {
            console.log("List currency's null");
            return
        }
        return listPrice?.map((item) => {
            return (
                <option value={item.currency} className='option_currency'>
                    {item.currency}
                </option>
            )
        })
    }

    const onSwapCurrency = () => {
        let temCurrency = valueFrom
        setValueFrom(valueTo)
        setValueTo(temCurrency)
    }

    const onCountCurrency = (value) => {
        let itemFrom = listPrice.find(x => x.currency === valueFrom)
        let itemTo = listPrice.find(x => x.currency === valueTo)
        if (!itemFrom || !itemTo) {
            return "Can't swap"
        }
        if (itemFrom.currency === itemTo.currency) {
            setAmountTo(value)
        } else {
            let priceTemp = value * (itemFrom.price / itemTo.price)
            setAmountTo(priceTemp)
        }
    }
    
    const renderIcon = (icon) => {
        let pathIcon
        try {
            pathIcon = require(`../assets/icon/${icon}.svg`)
        } catch (e) {
            console.log("Error: ", e);
        }
        return (
            <img className='img_icon' src={pathIcon} />
        )
    }
    return (
        <div className="container">
            <div className="container_body">
                <h2>Swap Currency</h2>
                <input
                    type='number'
                    maxLength="3"
                    className='input_amount'
                    placeholder='Input your amount to swap'
                    value={amountFrom}
                    onChange={(e) => {
                        onCountCurrency(e.target.value)
                        setAmountFrom(e.target.value)
                    }}
                />

                <div className="container_currency">
                    {/* select from currency */}
                    <select className="value_from_currency"
                        value={valueFrom}
                        onChange={(e) => {
                            onCountCurrency(e.target.value)
                            setValueFrom(e.target.value)
                        }}
                    >
                        {renderListCurrency()}
                    </select>

                    <button className="button_confirm" onClick={() => onSwapCurrency()}>
                        SWAP
                    </button>
                    {/* select to currency */}
                    <select className="value_to_currency"
                        value={valueTo}
                        onChange={(e) => {
                            onCountCurrency(e.target.value)
                            setValueTo(e.target.value)
                        }}>
                        {renderListCurrency()}
                    </select>
                </div>

                <div className='text_result'>
                    {amountFrom} {valueFrom}
                    {renderIcon(valueFrom)}
                    =
                    <div className="text_to_currency">{amountTo} </div> {valueTo} {renderIcon(valueTo)}
                </div>
            </div>
        </div>
    )
}

export default CurrencyComponent