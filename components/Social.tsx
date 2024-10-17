'use client'

// styles
import styles from './Social.module.scss'

//  Icons
import { IconType } from 'react-icons'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaBehance } from 'react-icons/fa'

// hooks
import { useState } from 'react'

const Social = () => {
	const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

	const handleMouseEnter = (icon: string): void => {
		setHoveredIcon(icon)
	}

	const handleMouseLeave = (): void => {
		setHoveredIcon(null)
	}

	interface SocialMedia {
		name: string
		icon: IconType
		url: string
	}

	const socialMediaLinks: SocialMedia[] = [
		{
			name: 'GitHub',
			icon: FaGithub,
			url: 'https://github.com/Dimeba'
		},
		{
			name: 'LinkedIn',
			icon: FaLinkedin,
			url: 'https://www.linkedin.com/in/filip-stojanovic-9b45a990/'
		},
		{
			name: 'Behance',
			icon: FaBehance,
			url: 'https://www.behance.net/filipstojanovic'
		}
	]

	return (
		<div className={styles.social}>
			{socialMediaLinks.map((media, index) => (
				<a
					key={index}
					href={media.url}
					aria-label={`Link to ${media.name} profile`}
					onMouseEnter={() => handleMouseEnter(media.name)}
					onMouseLeave={handleMouseLeave}
				>
					<media.icon
						color={hoveredIcon === media.name ? '#e2e8f0' : '#94a3b8'}
						size={24}
					/>
				</a>
			))}
		</div>
	)
}

export default Social
