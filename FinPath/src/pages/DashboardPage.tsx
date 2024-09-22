// src/components/Dashboard.tsx
import { Button, Card, CardContent, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <Card className="mb-4">
        <CardContent>
          <Typography variant="h5">Financial Snapshot</Typography>
          <Typography variant="body2">Income: $5000</Typography>
          <Typography variant="body2">Expenses: $3000</Typography>
        </CardContent>
      </Card>
      <Button variant="contained" color="primary">
        Add New Financial Data
      </Button>
    </div>
  );
};

export default Dashboard;
