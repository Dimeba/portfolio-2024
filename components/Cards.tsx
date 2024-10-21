'use client'

// styles
import styles from './Card.module.scss'

// components
import Skills from './Skills'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import { LuLink } from 'react-icons/lu'
import { HiArrowUpRight } from 'react-icons/hi2'

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

	const handleHoverCard = (index: number) => {
		setHoveredCard(index)
	}

	const toggleOpacity = () => {
		setLowOpacity(!lowOpacity)
	}

	const openLinkInNewTab = (url: string) => {
		window.open(url, '_blank', 'noopener,noreferrer')
	}

	return (
		<div
			className={styles.cards}
			onMouseEnter={toggleOpacity}
			onMouseLeave={toggleOpacity}
		>
			{items.map((item, index) => (
				<a
					key={item.sys.id}
					href={item.link}
					aria-label={`Link to ${item.subtitle} website.`}
					target='_blank'
				>
					<div
						className={`${styles.card} ${item.image ? styles.reverse : ''}`}
						onMouseEnter={() => handleHoverCard(index)}
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
							<div className={styles.titleContainer}>
								<div className={styles.title}>
									<h3>{item.title}</h3> <HiArrowUpRight size={14} />
								</div>
								{item.subtitle && <p>◦ {item.subtitle}</p>}
							</div>
							<div className={styles.description}>
								{documentToReactComponents(item.description.json)}
							</div>

							{item.referencesCollection.items.length > 0 && (
								<div className={styles.references}>
									{item.referencesCollection.items.map((reference, index) => (
										<div
											key={index}
											onClick={() => openLinkInNewTab(reference.link)}
											aria-label={`Link to ${reference.title} website.`}
											className={styles.reference}
										>
											<LuLink size={12} />
											<p>{reference.title}</p>
										</div>
									))}
								</div>
							)}

							{item.skills && <Skills skills={item.skills} />}
						</div>
					</div>
				</a>
			))}
		</div>
	)
}

export default Card
