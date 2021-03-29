import { useState } from 'react'

import styles from '../css/ColorMakerList.module.css'
import ColorMaker from './ColorMaker'

function ColorMakerList() {
  const [colorMakers, setColorMakers] = useState([0])

  return (
    <ul className={styles.list}>
      {colorMakers.map(colorMaker => {
        return (
          <li key={colorMaker.toString()} className={styles.listItem}>
            <ColorMaker/>
          </li>
        )
      })}
    </ul>
  )
}

export default ColorMakerList