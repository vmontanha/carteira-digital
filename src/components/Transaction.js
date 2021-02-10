import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { TransactionList } from './TransactionList';

export const Transaction = () => {

    const { transaction } = useContext(GlobalContext);

    return (
        <>
            <h3>Histórico</h3>
            <ul className="list">
                {transaction.map(transaction => (<TransactionList key={transaction.id} transaction={transaction} />))}
            </ul>
        </>
    )
}
