import React from "react";

const InputContacto = ({
  children,
  value,
  set,
  min = -200,
  max = 200,
  step,
}) => {
  return (
    <label>
      <code>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
        step={step}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
      />
    </label>
  );
};

export default InputContacto;
