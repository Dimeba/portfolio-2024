// styles
import styles from './Hero.module.scss'

// components
import Social from './Social'
import Button from './Button'

// types
import { Asset } from '@/types/contentfulTypes'

interface Props {
	jobTitle: string
	about: string
	resume: Asset
}

const Hero: React.FC<Props> = ({ jobTitle, about, resume }) => {
	return (
		<section className={styles.hero} id='hero'>
			<div className={styles.info}>
				<div>
					<h1>Filip Stojanović</h1>
					<h2>{jobTitle}</h2>
					<p>{about}</p>
				</div>

				<Button
					text='View Resume'
					link={resume.url}
					label='Link to my resume.'
					box
				/>
			</div>

			<Social />
		</section>
	)
}

export default Hero
