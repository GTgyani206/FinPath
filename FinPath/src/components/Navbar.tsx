import React from "react";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar className="flex justify-between">
        {/* App Title */}
        <Typography variant="h6" className="text-white">
          FinPath
        </Typography>

        {/* Links to other pages */}
        <div className="space-x-4">
          <Button color="inherit">
            <Link to="/dashboard" className="text-white">Dashboard</Link>
          </Button>
          <Button color="inherit">
            <Link to="/profile" className="text-white">Profile</Link>
          </Button>
          <Button color="inherit">
            <Link to="/learning-modules" className="text-white">Learning Modules</Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
