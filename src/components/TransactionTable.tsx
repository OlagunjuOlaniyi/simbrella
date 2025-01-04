import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const TransactionTable: React.FC = () => {
  const transactions = useSelector(
    (state: RootState) => state.transactions.data
  );
  const [filter, setFilter] = useState<string>("all");

  const filteredTransactions = transactions.filter((txn: any) =>
    filter === "all" ? true : txn.type === filter
  );

  const sortTransactions = (key: string) => {
    return [...filteredTransactions].sort((a: any, b: any) => {
      if (key === "amount") return a.amount - b.amount;
      if (key === "date")
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      return 0;
    });
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold">Transaction History</h2>
      <div className="mt-4 flex items-center space-x-4">
        <label>Filter by Type:</label>
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </div>
      <table className="mt-4 w-full border-collapse border">
        <thead>
          <tr>
            <th onClick={() => sortTransactions("date")}>Date</th>
            <th onClick={() => sortTransactions("amount")}>Amount</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((txn: any) => (
            <tr key={txn.id}>
              <td>{txn.date}</td>
              <td>${txn.amount}</td>
              <td>{txn.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
