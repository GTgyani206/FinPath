import { Card, CardContent, Typography, Button } from '@mui/material';
import { useState } from 'react';

const Dashboard = () => {
  const [financialData] = useState({ income: 5000, expenses: 3000, savings: 2000 });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      
      <Card className="mb-4">
        <CardContent>
          <Typography variant="h5">Financial Snapshot</Typography>
          <Typography variant="body2">Income: ${financialData.income}</Typography>
          <Typography variant="body2">Expenses: ${financialData.expenses}</Typography>
          <Typography variant="body2">Savings: ${financialData.savings}</Typography>
        </CardContent>
      </Card>

      <Button variant="contained" color="primary">Add Data</Button>
    </div>
  );
};

export default Dashboard;
