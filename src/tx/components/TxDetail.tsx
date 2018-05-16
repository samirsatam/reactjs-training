import * as React from 'react';
import Transaction from '../Transaction';

const TxDetail = ({tx} : Props) => (
    <div className="card">
        <div className="card-header bg-primary text-white">
        Paid {tx.amount} to {tx.payee.payeeName}
        </div>
        <ul className="list-group">
            <li className="list-group-item">Paid on {tx.txDate}</li>
            <li className="list-group-item">Type: {tx.txType}</li>
            <li className="list-group-item">Category: {tx.category.categoryName}</li>
        </ul>
    </div>
)

interface Props {
    tx: Transaction;
}

export default TxDetail;