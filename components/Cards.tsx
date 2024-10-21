'use client'

// styles
import styles from './Card.module.scss'

// components
import Skills from './Skills'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'

// hooks
import { useState } from 'react'

// types
import { ContentItemEntry } from '@/types/contentfulTypes'

interface Props {
	items: ContentItemEntry[]
}

const Card: React.FC<Props> = ({ items }) => {
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
			{items.map((item, index) => (
				<div
					key={item.sys.id}
					className={`${styles.card} ${item.image ? styles.reverse : ''}`}
					onMouseEnter={() => handleHover(index)}
					onMouseLeave={() => setHoveredCard(null)}
					style={{
						opacity: !lowOpacity || hoveredCard == index ? 1 : 0.5
					}}
				>
					{/* Background */}
					{hoveredCard === index && <div className={styles.background}></div>}

					{/* Content */}
					<div className={styles.leftColumn}>
						{item.date && <p>{item.date}</p>}
						{item.image && (
							<div className={styles.image}>
								<Image
									src={item.image.url}
									alt={item.image.fileName}
									fill
									style={{ objectFit: 'cover' }}
								/>
							</div>
						)}
					</div>

					<div className={styles.content}>
						<div className={styles.title}>
							<h3>{item.title}</h3>
							{item.subtitle && <p>{item.subtitle}</p>}
						</div>
						<div className={styles.description}>
							{documentToReactComponents(item.description.json)}
						</div>

						{item.skills && <Skills skills={item.skills} />}
					</div>
				</div>
			))}
		</div>
	)
}

export default Card
