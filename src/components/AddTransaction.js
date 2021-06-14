import React, { useContext, useState } from 'react';

import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0)

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text: text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Добавить новую транзакцию</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Ваш текст</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Введите текст ..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Количество <br />
            (отрицательный - расход, положительный - доход)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Введите количество..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
