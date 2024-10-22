// styles
import styles from './Hero.module.scss'

// components
import Social from './Social'

interface Props {
	jobTitle: string
	about: string
}

const Hero: React.FC<Props> = ({ jobTitle, about }) => {
	return (
		<section className={styles.hero} id='hero'>
			<div className={styles.info}>
				<div>
					<h1>Filip Stojanović</h1>
					<h2>{jobTitle}</h2>
					<p>{about}</p>
				</div>
			</div>

			<Social />
		</section>
	)
}

export default Hero
