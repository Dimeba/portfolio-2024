// styles
import styles from './Hero.module.scss'

// components
import Social from './Social'
import { BsArrowRight } from 'react-icons/bs'

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

				<a className={styles.resume} href={resume.url} target='_blank'>
					View Resume
					<BsArrowRight size={20} />
				</a>
			</div>

			<Social />
		</section>
	)
}

export default Hero
