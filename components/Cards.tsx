'use client'

// styles
import styles from './Card.module.scss'

// components
import Skills from './Skills'

// hooks
import { useState } from 'react'

const Card = () => {
	// temp data
	const content: number[] = [1, 2, 3, 4]
	const skills: string[] = [
		'JavaScript',
		'TypeScript',
		'HTML',
		'CSS',
		'Sass',
		'C#'
	]

	const [hoveredCard, setHoveredCard] = useState<number | null>(null)
	const [lowOpacity, setLowOpacity] = useState<boolean>(false)

	const handleHover = (index: number) => {
		setHoveredCard(index)
	}

	const toggleOpacity = () => {
		setLowOpacity(!lowOpacity)
	}

	return (
		<div
			className={styles.cards}
			onMouseEnter={toggleOpacity}
			onMouseLeave={toggleOpacity}
		>
			{content.map((item, index) => (
				<div
					key={index}
					className={styles.card}
					onMouseEnter={() => handleHover(index)}
					onMouseLeave={() => setHoveredCard(null)}
					style={{
						// opacity: hoveredCard === null || hoveredCard === index ? 1 : 0.5
						opacity: !lowOpacity || hoveredCard == index ? 1 : 0.5
					}}
				>
					{/* Background */}
					{hoveredCard === index && <div className={styles.background}></div>}

					{/* Content */}
					<div className={styles.date}>
						<p>2014 - 2018</p>
					</div>

					<div className={styles.content}>
						<h3>Ariel Property Advisors</h3>
						<p>Card</p>

						<Skills skills={skills} />
					</div>
				</div>
			))}
		</div>
	)
}

export default Card
