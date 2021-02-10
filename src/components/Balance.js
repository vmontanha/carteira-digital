import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

    const { transaction } = useContext(GlobalContext);

    const amount = transaction.map(transaction => transaction.amount);

    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>    
            <h4 className="saldo">Saldo</h4>
            <h2>${total}</h2>
        </>
    );
}
