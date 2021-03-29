import styles from '../css/ColorBox.module.css';

function ColorBox({ color }) {
  return (
    <div className={styles.box} style={{ backgroundColor: color }} />
  )
}

export default ColorBox;