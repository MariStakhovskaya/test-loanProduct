import React from "react";
import '../App.css'


export type dataItem = {
    id: number,
    title: string,
    minAmount: number,
    maxAmount: number,
    minTerm: number,
    maxTerm: number,
    "Annual Interest Rate": number,
    date: string
}

type PropsType = {
    data: Array<dataItem>,
    setShow: (show:boolean) => void
    setEdit: (edit:boolean) => void
    findId: (id:number)=>void
}

export const Nav = ({data,setShow,setEdit,...props}: PropsType) => {

const onClickHandlerForCreateProduct = () =>{
    setShow(true)
    setEdit(false)
}
    return (
        <nav className="nav">
            <div className="nav-btn">
                <button className="nav-btn-product" onClick={onClickHandlerForCreateProduct}>Создать продукт</button>
            </div>

            <ul className="nav-list">
                {data.map((el: dataItem) => {
                    const onclickHandler = (id: number) => {
                        props.findId(id)
                        setEdit(true)
                        setShow(false)
                    }
                    return (
                        <li className="nav-item" key={el.id}  onClick={()=>onclickHandler(el.id)} >
                        <div className="nav-item-product">
                            <div className="nav-item-product-title">{el.title}</div>
                            <div className="nav-item-product-date">{el.date}</div>
                        </div>
                    </li>

                        )
                })}

            </ul>
        </nav>
    )
}