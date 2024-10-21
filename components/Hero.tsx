// styles
import styles from './Hero.module.scss'

// components
import Header from './Header'
import Social from './Social'

// types
import { EntryFieldTypes } from 'contentful'

interface Props {
	jobTitle: string
	about: string
}

const Hero: React.FC<Props> = ({ jobTitle, about }) => {
	return (
		<section className={styles.hero}>
			<div className={styles.info}>
				<div>
					<h1>Filip Stojanović</h1>
					<h2>{jobTitle}</h2>
					<p>{about}</p>
				</div>

				<Header />
			</div>

			<Social />
		</section>
	)
}

export default Hero
