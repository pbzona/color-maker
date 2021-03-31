import { useState } from 'react'
import { useFlags } from 'launchdarkly-react-client-sdk'

import styles from '../css/ColorMakerList.module.css'
import ColorMaker from './ColorMaker'

function ColorMakerList() {
  const { multipleRamps } = useFlags()
  const [colorMakers, setColorMakers] = useState([new Date().getTime()])

  function onAddRamp() {
    setColorMakers([...colorMakers, new Date().getTime()])
  }

  return (
    <>
      <ul className={styles.list}>
        {colorMakers.map(colorMaker => {
          return (
            <li key={colorMaker.toString()} className={styles.listItem}>
              <ColorMaker/>
            </li>
          )
        })}
      </ul>
      <button className={styles.btn} onClick={onAddRamp} disabled={!multipleRamps}>
        { multipleRamps ? 'Add Ramp' : 'Add Ramp (Pro/Beta only)'}
      </button>
    </>
  )
}

export default ColorMakerList