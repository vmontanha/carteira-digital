import React, { useState, useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    


    return (
        <>
            <h3>Adicionar nova Transação</h3>
            <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Categoria</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Digite aqui..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Valor <br />
                    (Negativo - Despesa| Positivo - Entrada)
                </label >
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Digite o Valor..." />
            </div>
            <button className="btn">Adicionar</button>
            </form>
        </>
    )
}
