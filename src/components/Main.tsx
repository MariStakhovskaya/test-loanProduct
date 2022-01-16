import React from 'react';
import '../App.css'
import {ChangeEvent, useState} from "react";

type PropsType ={
    id: number
    title:string
    minAmount: number
    maxAmount: number
    minTerm: number
    rate: number
    maxTerm: number
    setShow: (show:boolean) => void
    setEdit: (edit:boolean) => void
    edit:boolean
    editProduct?:(title: string, minAmount: number, maxAmount: number, minTerm: number, maxRate:number, rate: number) => void
    findId?:(id: number) => void
    createProduct?: (title: string, minAmount: number, maxAmount: number, minTerm: number, maxRate:number, rate: number) => void

}

export const Main = (props: PropsType) => {


    const [title,setTitle] =useState(props.title)
    const [minAmount,setMinAmount] =useState(props.minAmount)
    const [maxAmount,setMaxAmount] =useState(props.maxAmount)
    const [minTerm,setMinTerm] =useState(props.minTerm)
    const [maxTerm,setMaxTerm] =useState(props.maxTerm)
    const [rate,setRate] =useState(props.rate)
    const [error,setError] =useState<string | null>(null)

    const onChangeForInput = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        let newTitle = e.currentTarget.value
        setTitle(newTitle)

    }
    const onChangeForMinAmount = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)

        let newMinAmount = +e.currentTarget.value
        if (Number.isInteger(newMinAmount)) {
            setMinAmount(newMinAmount)
        }
        else setError('please enter number')
    }
    const onChangeForMaxAmount = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        let newMaxAmount = +e.currentTarget.value
        setMaxAmount(newMaxAmount)
    }
    const onChangeForMinTerm = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        let newMinTerm = +e.currentTarget.value
        setMinTerm(newMinTerm)
    }
    const onChangeForMaxTerm = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        let newMaxTerm = +e.currentTarget.value
        setMaxTerm(newMaxTerm)
    }
    const onChangeForRate = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        let newRate = +e.currentTarget.value
        setRate(newRate)
    }

    const onClickForSave = () => {
        if(title.trim() !==''){
            if (props.createProduct) {
                props.createProduct(title, minAmount, maxAmount, minTerm, maxTerm, rate)
                props.setShow(false)
            }
            if (props.editProduct){
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
                    <label htmlFor="name">Product Name</label> <br></br>
                    <input type="text" id="name" name="name-product" placeholder="Placeholder"
                           value={title} onChange={onChangeForInput} />
                    {error && <span className="error-message">{error}</span>}

                </div>
                <div className="section-form-item">
                    <label htmlFor="min">Min Amount</label> <br></br>
                    <input value={minAmount} onChange={onChangeForMinAmount}
                           type="text" id="min" name="min-amount" placeholder="Placeholder" />
                    {error && <div className="error-message">{error}</div>}

                </div>
                <div className="section-form-item">
                    <label htmlFor="max">Max Amount</label> <br></br>
                    <input value={maxAmount} onChange={onChangeForMaxAmount} type="text" id="max" name="max-amount"
                           placeholder="Placeholder" />
                    {error && <div className="error-message">{error}</div>}
                </div>
                <div className="section-form-item">
                    <label htmlFor="minTerm">Min Term</label> <br></br>
                    <input value={minTerm} onChange={onChangeForMinTerm} type="text" id="minTerm" name="max-amount"
                           placeholder="Placeholder" />
                    {error && <div className="error-message">{error}</div>}
                </div>
                <div className="section-form-item">
                    <label htmlFor="maxTerm">Max Term</label> <br></br>
                    <input value={maxTerm} onChange={onChangeForMaxTerm} type="text" id="maxTerm"
                           name="max-amount" placeholder="Placeholder" />
                    {error && <div className="error-message">{error}</div>}
                </div>
                <div className="section-form-item">
                    <label htmlFor="rate">Annual Interest Rate</label> <br></br>
                    <input value={rate} onChange={onChangeForRate} type="text" id="rate"
                           name="max-amount" placeholder="Placeholder" />
                    {error && <div className="error-message">{error}</div>}
                </div>
            </div>
            <div>
                <button className="section-form-btn" onClick={onClickForSave}>Сохранить</button>
            </div>
        </section>
    )

}