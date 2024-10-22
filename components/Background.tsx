// styles
import styles from './Background.module.scss'

const Background = () => {
	return (
		<div className={styles.container}>
			<div className={styles.lines}>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</div>
		</div>
	)
}

export default Background
