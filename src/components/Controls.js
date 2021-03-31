import { useState } from 'react';

import { DEFAULT_LEFT, DEFAULT_RIGHT } from './ColorMaker';

function Controls({ onSizeChange }) {
  const [size, setSize] = useState(4)
  const [leftColor, setLeftColor] = useState(DEFAULT_LEFT)
  const [rightColor, setRightColor] = useState(DEFAULT_RIGHT)

  function handleSizeChange(event) {
    setSize(event.target.value)
    onSizeChange(event.target.value)
  }

  function handleLeftColorChange(event) {
    setLeftColor(event.target.value)
  }

  function handleRightColorChange(event) {
    setRightColor(event.target.value)
  }

  return (
    <div>
      <label htmlFor="size">Size:</label>
      <input type="range" max="8" min="2" step="1" value={size} onChange={handleSizeChange} />
      <p>{size}</p>

      <label htmlFor="left-color">Left Color: </label>
      <input type="color" name="left-color" value={leftColor} onChange={handleLeftColorChange}></input>
      <p>{leftColor}</p>

      <label htmlFor="right-color">Right Color: </label>
      <input type="color" name="right-color" value={rightColor} onChange={handleRightColorChange}></input>
      <p>{rightColor}</p>
    </div>
  )
}

export default Controls