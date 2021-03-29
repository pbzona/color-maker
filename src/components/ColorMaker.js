import { useState, useEffect } from 'react';
import ColorBox from './ColorBox';

import generateColorRamp from '../lib/generateColorRamp'
import styles from '../css/ColorMaker.module.css';

const DEFAULT_LEFT = '#FFFFFF'
const DEFAULT_RIGHT = '#111111'

function ColorMaker() {
  const [size, setSize] = useState(4)
  const [leftColor, setLeftColor] = useState(DEFAULT_LEFT)
  const [rightColor, setRightColor] = useState(DEFAULT_RIGHT)
  const [colors, setColors] = useState(new Array(size))

  useEffect(() => {
    let generatedColors = generateColorRamp(leftColor, rightColor, size)
    console.log(generatedColors)
    setLeftColor(generatedColors[0])
    setRightColor(generatedColors[generatedColors.length - 1])
    setColors([leftColor, ...generatedColors, rightColor])
  }, [])

  return (
    <div className={styles.container}>
      {/* Controls */}
      <div className={styles.ramp}>
        {colors.map(color => {
          return (
            <ColorBox color={color} />
          )
        })}
      </div>
    </div>
  )
}

export default ColorMaker;