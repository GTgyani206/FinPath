import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Cards for financial info */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Total Savings</h2>
          <p className="mt-2 text-green-600 text-lg">$10,500</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Budgeting Tips</h2>
          <p className="mt-2">
            Keep track of your spending with our budgeting module.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Financial Literacy</h2>
          <p className="mt-2">Score: 85/100</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
