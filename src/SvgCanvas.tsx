import React, { useState } from 'react';
import CustomRectangle from './CustomRectangle';

const SvgCanvas: React.FC = () => {
  const [rectangles, setRectangles] = useState<any[]>([]);

  const addCustomRectangle = () => {
    setRectangles([
      ...rectangles,
      {
        x: 50,
        y: 50,
        width: 200,
        height: 150,
        topGap: { start: 50, length: 30 },
        rightGap: { start: 50, length: 30 },
        bottomGap: { start: 50, length: 30 },
        leftGap: { start: 50, length: 30 }
      }
    ]);
  };

  return (
    <div>
      <button onClick={addCustomRectangle}>Add Custom Rectangle</button>
      <svg width="500" height="500" style={{ border: '1px solid black' }}>
        {rectangles.map((rect, index) => (
          <CustomRectangle key={index} {...rect} />
        ))}
      </svg>
    </div>
  );
};

export default SvgCanvas;
