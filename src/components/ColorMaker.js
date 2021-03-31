import { useState, useEffect } from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';
import ColorBox from './ColorBox';

import generateColorRamp from '../lib/generateColorRamp'
import styles from '../css/ColorMaker.module.css';
import Controls from './Controls';

const DEFAULT_LEFT = '#FFFFFF'
const DEFAULT_RIGHT = '#111111'

function ColorMaker() {
  const { colormakerControlPanel } = useFlags()
  console.log(useFlags())
  const [size, setSize] = useState(4)
  const [leftColor, setLeftColor] = useState(DEFAULT_LEFT)
  const [rightColor, setRightColor] = useState(DEFAULT_RIGHT)
  const [colors, setColors] = useState(new Array(size))

  useEffect(() => {
    let generatedColors = generateColorRamp(leftColor, rightColor, size)
    setLeftColor(generatedColors[0])
    setRightColor(generatedColors[generatedColors.length - 1])
    setColors([leftColor, ...generatedColors, rightColor])
    setSize(colors.length)
  }, [])

  return (
    <div className={styles.container}>
      { colormakerControlPanel && <Controls /> }
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