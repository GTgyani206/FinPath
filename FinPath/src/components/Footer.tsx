import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 FinPath. All rights reserved.</p>
        <p className="mt-2">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms" className="ml-4 hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
