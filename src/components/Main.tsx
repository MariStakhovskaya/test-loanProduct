import React from 'react';
import '../App.css'
import {ChangeEvent, useState} from "react";


type PropsType = {
    id: number
    title: string
    minAmount: number
    maxAmount: number
    minTerm: number
    rate: number
    maxTerm: number
    setShow: (show: boolean) => void
    setEdit: (edit: boolean) => void
    edit: boolean
    editProduct?: (title: string, minAmount: number, maxAmount: number, minTerm: number, maxRate: number, rate: number) => void
    createProduct?: (title: string, minAmount: number, maxAmount: number, minTerm: number, maxRate: number, rate: number) => void
}

export const Main = (props: PropsType) => {


    const [title, setTitle] = useState(props.title)
    const [minAmount, setMinAmount] = useState(props.minAmount)
    const [maxAmount, setMaxAmount] = useState(props.maxAmount)
    const [minTerm, setMinTerm] = useState(props.minTerm)
    const [maxTerm, setMaxTerm] = useState(props.maxTerm)
    const [rate, setRate] = useState(props.rate)

    const [error, setError] = useState<string | null>(null)
    const [errorAmount, setAmount] = useState<string | null>(null)
    const [errorMaxAmount, setErrorMaxAmount] = useState<string | null>(null)
    const [errorMinTerm, setErrorMinTerm] = useState<string | null>(null)
    const [errorMaxTerm, setErrorMaxTerm] = useState<string | null>(null)
    const [errorRate, setErrorRate] = useState<string | null>(null)




    const onChangeForInput = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        let newTitle = e.currentTarget.value
        setTitle(newTitle)

    }
    const onChangeForMinAmount = (e: ChangeEvent<HTMLInputElement>) => {
        let newMinAmount = +e.currentTarget.value
        if (isNaN(newMinAmount)){
            setAmount('please enter number')
        } else {
            setMinAmount(newMinAmount)
            setAmount(null)
        }
    }

    const onChangeForMaxAmount = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxAmount = +e.currentTarget.value
        if (isNaN(newMaxAmount)){
            setErrorMaxAmount('please enter number')
        } else {
            setMaxAmount(newMaxAmount)
            setErrorMaxAmount(null)
        }

    }
    const onChangeForMinTerm = (e: ChangeEvent<HTMLInputElement>) => {

        let newMinTerm = +e.currentTarget.value
        if (isNaN(newMinTerm)){
            setErrorMinTerm('please enter number')
        } else {
            setMinTerm(newMinTerm)
            setErrorMinTerm(null)
        }
    }
    const onChangeForMaxTerm = (e: ChangeEvent<HTMLInputElement>) => {

        let newMaxTerm = +e.currentTarget.value
        if (isNaN(newMaxTerm)){
            setErrorMaxTerm('please enter number')
        } else {
        setMaxTerm(newMaxTerm)
            setErrorMaxTerm(null)
        }
    }
    const onChangeForRate = (e: ChangeEvent<HTMLInputElement>) => {

        let newRate = +e.currentTarget.value
        if (isNaN(newRate)){
            setErrorRate('please enter number')
        } else {
        setRate(newRate)
            setErrorRate(null)
        }
    }

    const onClickForSave = () => {
        if (title.trim() !== '') {
            if (props.createProduct) {
                props.createProduct(title, minAmount, maxAmount, minTerm, maxTerm, rate)
                props.setShow(false)
            }
            if (props.editProduct) {
                props.editProduct(title, minAmount, maxAmount, minTerm, maxTerm, rate)
                props.setEdit(false)
            }
        } else {
            setError("please enter value")
        }

    }

    return (

        <section className="section">
            <div className="section-title">{props.edit ? "Редактирование: " + props.title : "Создание"}</div>
            <div className="section-form">
                <div className="section-form-item-name">
                    <label htmlFor="min">Product Name</label>
                        <input type="text" name="name-product" placeholder="Placeholder"
                               value={title} onChange={onChangeForInput} autoFocus/>
                        {error && <span className="error-message">{error}</span>}

                </div>
                <div className="section-form-item">
                    <label htmlFor="min">Min Amount</label>
                    <input value={minAmount} onChange={onChangeForMinAmount}
                           type="text" id="min" name="min-amount" placeholder="Placeholder" />
                    {errorAmount && <span className="error-message">{errorAmount}</span>}
                </div>
                <div className="section-form-item">
                    <label htmlFor="max">Max Amount</label>
                    <input value={maxAmount} onChange={onChangeForMaxAmount} type="text" id="max" name="max-amount"
                           placeholder="Placeholder"/>
                    {errorMaxAmount && <span className="error-message">{errorMaxAmount}</span>}
                </div>
                <div className="section-form-item">
                    <label htmlFor="minTerm">Min Term</label>
                    <input value={minTerm} onChange={onChangeForMinTerm} type="text" id="minTerm" name="max-amount"
                           placeholder="Placeholder"/>
                    {errorMinTerm && <span className="error-message">{errorMinTerm}</span>}
                </div>
                <div className="section-form-item">
                    <label htmlFor="maxTerm">Max Term</label>
                    <input value={maxTerm} onChange={onChangeForMaxTerm} type="text" id="maxTerm"
                           name="max-amount" placeholder="Placeholder"/>
                    {errorMaxTerm && <span className="error-message">{errorMaxTerm}</span>}
                </div>
                <div className="section-form-item">
                    <label htmlFor="rate">Annual Interest Rate</label>
                    <input value={rate} onChange={onChangeForRate} type="text" id="rate"
                           name="max-amount" placeholder="Placeholder"/>
                    {errorRate && <span className="error-message">{errorRate}</span>}
                </div>

            </div>
            <div>
                <button className="section-form-btn" onClick={onClickForSave}>Сохранить</button>
            </div>
        </section>
    )

}