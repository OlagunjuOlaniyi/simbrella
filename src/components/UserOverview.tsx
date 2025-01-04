import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const users = {
  id: 1,
  name: "John Doe",
  balance: 1200.5,
  recentTransactions: [
    { id: 1, type: "credit", amount: 300, date: "2023-12-01" },
    { id: 2, type: "debit", amount: 150, date: "2023-11-30" },
  ],
};

const UserOverview: React.FC = () => {
  // const user = useSelector((state: RootState) => state.user.data);

  // if (!users) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold">Welcome, {users.name}</h2>
      <p>Account Balance: ${users.balance.toFixed(2)}</p>
      <h3 className="mt-4 font-bold">Recent Transactions</h3>
      <ul>
        {users.recentTransactions.map((txn: any) => (
          <li key={txn.id}>
            {txn.type} of ${txn.amount} on {txn.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserOverview;
