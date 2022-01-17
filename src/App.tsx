import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {dataItem, Nav} from "./components/Nav";
import {Main} from "./components/Main";
import json from '../src/data/loanProducts.json'

export const App = () => {

    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(false)
    let dataProduct = json
    const [data, setData] = useState(dataProduct)
    const [id, setId] = useState(0)


    const createProduct = (title: string,
                           minAmount: number,
                           maxAmount: number,
                           minTerm: number,
                           maxRate: number,
                           rate: number) => {


        let newProduct: dataItem = {
            id: data.length+1,
            title: title, minAmount: minAmount,
            maxAmount: maxAmount,
            minTerm: minTerm,
            maxTerm: maxRate,
            "Annual Interest Rate": rate,
            date: new Date().toLocaleDateString()
        }
        setData([...data, newProduct])
    }
    const editProduct = (title: string,
                         minAmount: number,
                         maxAmount: number,
                         minTerm: number,
                         maxTerm: number,
                         rate: number) => {
        let filteredData = data.find(el => el.id === id)
        if (filteredData) {
            filteredData.title = title
            filteredData.minAmount = minAmount
            filteredData.maxAmount = minAmount
            filteredData.minTerm = minTerm
            filteredData.maxTerm = maxTerm
            filteredData["Annual Interest Rate"] = rate
            setData([...data])
        }
    }

    const findId = (id: number) => {
        setId(id)
        setEdit(true)
    }

    return (
        <div className="App">
            <Header/>
            <main className="main-container">
                <Nav data={data}
                     setShow={setShow}
                     findId={findId}
                     setEdit={setEdit}
                />

                {edit && data.map(el => el.id === id ?
                    <Main id={el.id}
                          key={el.id}
                          title={el.title}
                          minAmount={el.minAmount}
                          maxAmount={el.maxAmount}
                          minTerm={el.minTerm}
                          maxTerm={el.maxTerm}
                          rate={el["Annual Interest Rate"]}
                          editProduct={editProduct}
                          setShow={setShow}
                          setEdit={setEdit}
                          edit={edit}/>
                    : '')}

                {show && <Main id={0}
                               title={''}
                               minAmount={0}
                               maxAmount={0}
                               minTerm={0}
                               maxTerm={0}
                               rate={0}
                               createProduct={createProduct}
                               setShow={setShow}
                               setEdit={setEdit}
                               edit={edit}/>}

            </main>
        </div>
    );
}

export default App;
