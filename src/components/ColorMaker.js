import { useState, useEffect } from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';
import ColorBox from './ColorBox';

import generateColorRamp from '../lib/generateColorRamp'
import styles from '../css/ColorMaker.module.css';
import Controls from './Controls';

export const DEFAULT_LEFT = '#2c7dbf'
export const DEFAULT_RIGHT = '#b836d9'

function ColorMaker() {
  const { colormakerControlPanel } = useFlags()
  const [size, setSize] = useState(4)
  const [leftColor, setLeftColor] = useState(DEFAULT_LEFT)
  const [rightColor, setRightColor] = useState(DEFAULT_RIGHT)
  const [colors, setColors] = useState(new Array(size))

  useEffect(() => {
    let generatedColors = generateColorRamp(leftColor, rightColor, size)
    setColors([leftColor, ...generatedColors, rightColor])
    setSize(colors.length)
  }, [])

  // Recalculate size on all changes to color
  useEffect(() => {
    setSize(colors.length)
  }, [colors])

  function onSizeChange(updatedSize) {
    let generatedColors = generateColorRamp(leftColor, rightColor, updatedSize)
    setColors([leftColor, ...generatedColors, rightColor])
  }

  return (
    <div className={styles.container}>
      { colormakerControlPanel && <Controls onSizeChange={onSizeChange}/> }
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