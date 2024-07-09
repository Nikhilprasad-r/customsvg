import React from 'react';

interface Gap {
  start: number;
  length: number;
}

interface CustomRectangleProps {
  x: number;
  y: number;
  width: number;
  height: number;
  topGap?: Gap;
  rightGap?: Gap;
  bottomGap?: Gap;
  leftGap?: Gap;
  stroke?: string;
  strokeWidth?: number;
}

const CustomRectangle: React.FC<CustomRectangleProps> = ({
  x, y, width, height,
  topGap, rightGap, bottomGap, leftGap,
  stroke = 'black', strokeWidth = 1
}) => {
  const path = calculatePath(x, y, width, height, topGap, rightGap, bottomGap, leftGap);

  return <path d={path} stroke={stroke} strokeWidth={strokeWidth} fill="none" />;
};

const calculatePath = (
  x: number, y: number, width: number, height: number,
  topGap?: Gap, rightGap?: Gap, bottomGap?: Gap, leftGap?: Gap
): string => {
  let path = `M ${x} ${y}`;
  
  // Top side
  if (topGap) {
    path += ` H ${x + topGap.start} M ${x + topGap.start + topGap.length} ${y}`;
  }
  path += ` H ${x + width}`;
  
  // Right side
  if (rightGap) {
    path += ` V ${y + rightGap.start} M ${x + width} ${y + rightGap.start + rightGap.length}`;
  }
  path += ` V ${y + height}`;
  
  // Bottom side
  if (bottomGap) {
    path += ` H ${x + width - bottomGap.start} M ${x + width - bottomGap.start - bottomGap.length} ${y + height}`;
  }
  path += ` H ${x}`;
  
  // Left side
  if (leftGap) {
    path += ` V ${y + height - leftGap.start} M ${x} ${y + height - leftGap.start - leftGap.length}`;
  }
  path += ` V ${y}`;
  
  return path;
};

export default CustomRectangle;
