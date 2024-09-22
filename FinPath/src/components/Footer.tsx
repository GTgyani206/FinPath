import React from "react";
import { Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6 text-center">
      <Typography variant="body2" className="text-gray-400">
        © {new Date().getFullYear()} FinPath | All rights reserved.
      </Typography>
      <div className="mt-2">
        <Link href="#" color="inherit" className="text-gray-400 mx-2">Privacy Policy</Link>
        <Link href="#" color="inherit" className="text-gray-400 mx-2">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
