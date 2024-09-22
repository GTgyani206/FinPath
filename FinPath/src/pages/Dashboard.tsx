import React from "react";
import Navbar from "../components/Navbar"; // Importing Navbar component
import Footer from "../components/Footer"; // Importing Footer component
import { Button, Card, CardContent, Typography } from '@mui/material'; // Material UI components

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Dashboard Content */}
      <div className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-center mb-6">Dashboard</h1>

        {/* Overview Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h5">Learning Progress</Typography>
              <Typography variant="body2">You have completed 40% of your modules.</Typography>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h5">Recent Activity</Typography>
              <Typography variant="body2">You accessed 2 modules today.</Typography>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h5">Financial Health</Typography>
              <Typography variant="body2">Your last session included 3 new insights on budgeting.</Typography>
            </CardContent>
          </Card>
        </section>

        {/* Quick Actions Section */}
        <section className="flex flex-wrap justify-center gap-6">
          <Button variant="contained" color="primary" className="w-40">
            Start Learning
          </Button>
          <Button variant="contained" color="secondary" className="w-40">
            Check Reports
          </Button>
          <Button variant="contained" className="w-40">
            Settings
          </Button>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
