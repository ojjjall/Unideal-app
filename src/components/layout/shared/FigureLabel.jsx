import React from 'react';

const FigureLabel = ({ number, title }) => {
  return (
    <div className="text-center text-sm text-gray-500 py-2">
      <p>Figure {number}: {title}</p>
    </div>
  );
};

export default FigureLabel;