// styles
import styles from './Hero.module.scss'

// components
import Skills from './Skills'
import Social from './Social'

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

			<Social />
		</section>
	)
}

export default Hero
