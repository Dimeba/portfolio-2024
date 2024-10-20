// styles
import styles from './Content.module.scss'

// components
import Bio from './Bio'
import Cards from './Cards'

const Content = () => {
	return (
		<section className={styles.content}>
			<Bio />

			<div className={styles.section}>
				<h2>Experience</h2>
				<Cards />
			</div>
		</section>
	)
}

export default Content
