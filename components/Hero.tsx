// styles
import styles from './Hero.module.scss'

// components
import Skills from './Skills'

//  Icons
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaBehance } from 'react-icons/fa'

const Hero = () => {
	const languages: string[] = [
		'JavaScript',
		'TypeScript',
		'HTML',
		'CSS',
		'Sass',
		'C#'
	]

	const frameworks: string[] = [
		'React',
		'Next JS',
		'Svelte',
		'Redux',
		'React Native',
		'Expo'
	]

	const tools: string[] = [
		'GitHub',
		'Netlify',
		'Firebase',
		'Contentful',
		'Prismic',
		'Adobe CC',
		'Figma',
		'Unity'
	]

	return (
		<section className={styles.hero}>
			<div className={styles.info}>
				<div>
					<h1>Filip Stojanović</h1>
					<h2>Front-End Developer & Designer</h2>
					<p>
						I build creative, high-impact solutions from concept to launch
						across diverse industries.
					</p>
				</div>

				<div className={styles.skills}>
					<div>
						<h3>Programming Languages</h3>
						<ul>
							<Skills skills={languages} />
						</ul>
					</div>

					<div>
						<h3>Libraries & Frameworks</h3>
						<ul>
							<Skills skills={frameworks} />
						</ul>
					</div>

					<div>
						<h3>Tools & Platforms</h3>
						<ul>
							<Skills skills={tools} />
						</ul>
					</div>
				</div>
			</div>

			<div className={styles.social}>
				<a href='https://github.com/Dimeba' aria-label='Link to GitHub profile'>
					<FaGithub color='#94a3b8' size={24} />
				</a>
				<a
					href='https://www.linkedin.com/in/filip-stojanovic-9b45a990/'
					aria-label='Link to LinkedIn profile'
				>
					<FaLinkedin color='#94a3b8' size={24} />
				</a>
				<a
					href='https://www.behance.net/filipstojanovic'
					aria-label='Link to Behance profile'
				>
					<FaBehance color='#94a3b8' size={24} />
				</a>
			</div>
		</section>
	)
}

export default Hero
