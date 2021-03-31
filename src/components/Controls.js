import { useState } from 'react';

function Controls({ onSizeChange }) {
  const [size, setSize] = useState(4)

  function handleSizeChange(event) {
    setSize(event.target.value)
    onSizeChange(event.target.value)
  }

  return (
    <div>
      <label htmlFor="size">Size:</label>
      <input type="range" max="8" min="2" step="1" value={size} onChange={handleSizeChange} />
      <p>{size}</p>
    </div>
  )
}

export default Controls