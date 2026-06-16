import React from 'react';

export default function FigureLabel({ number, title }) {
  return (
    <div className="text-center py-3 px-4">
      <p className="text-xs text-muted-foreground italic">
        Figure {number}: {title}
      </p>
    </div>
  );
}