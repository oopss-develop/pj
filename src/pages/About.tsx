import React from 'react';
import { Outlet } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">교회소개</h1>
      <Outlet />
    </div>
  );
};

export default About; 