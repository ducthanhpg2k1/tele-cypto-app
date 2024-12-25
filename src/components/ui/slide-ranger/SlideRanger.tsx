import React, { useState } from 'react';
export default function SlideRanger({
  marks = [0, 25, 50, 75, 100],
  onChange,
  min,
  max,
  step,
}: {
  marks?: number[];
  onChange?: (value: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  const [value, setValue] = useState<number>(0);
  return (
    <div className="slider-container">
      <div className="marks">
        <div className="process">
          <div
            className="process-bar"
            style={{ width: `${value}%` }}
          />
        </div>
        {marks.map((m, key) => {
          return (
            <span
              className={`mark ${value >= m && 'active'}`}
              key={key}
            />
          );
        })}
      </div>
      <input
        onChange={(e) => {
          setValue(Number(e.target.value));
          onChange && onChange(Number(e.target.value));
        }}
        type="range"
        id="slider"
        min={min}
        max={max}
        value={value}
        step={step}
      />
    </div>
  );
}
