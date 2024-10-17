'use client'

// styles
import styles from './Social.module.scss'

//  Icons
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

	return (
		<div className={styles.social}>
			<a
				href='https://github.com/Dimeba'
				aria-label='Link to GitHub profile'
				onMouseEnter={() => handleMouseEnter('github')}
				onMouseLeave={handleMouseLeave}
			>
				<FaGithub
					color={hoveredIcon === 'github' ? '#e2e8f0' : '#94a3b8'}
					size={24}
				/>
			</a>
			<a
				href='https://www.linkedin.com/in/filip-stojanovic-9b45a990/'
				aria-label='Link to LinkedIn profile'
				onMouseEnter={() => handleMouseEnter('linkedin')}
				onMouseLeave={handleMouseLeave}
			>
				<FaLinkedin
					color={hoveredIcon === 'linkedin' ? '#e2e8f0' : '#94a3b8'}
					size={24}
				/>
			</a>
			<a
				href='https://www.behance.net/filipstojanovic'
				aria-label='Link to Behance profile'
				onMouseEnter={() => handleMouseEnter('behance')}
				onMouseLeave={handleMouseLeave}
			>
				<FaBehance
					color={hoveredIcon === 'behance' ? '#e2e8f0' : '#94a3b8'}
					size={24}
				/>
			</a>
		</div>
	)
}

export default Social
