// styles
import styles from './Hero.module.scss'

// components
import Header from './Header'
import Social from './Social'

const Hero = () => {
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

				<Header />
			</div>

			<Social />
		</section>
	)
}

export default Hero
