'use client'

// styles
import styles from './CustomCursor.module.scss'

// components
import { HiArrowUpRight } from 'react-icons/hi2'

// hooks
import { useEffect, useState } from 'react'

const CustomCursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent): void => {
			setPosition({ x: e.clientX, y: e.clientY })
		}

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return (
		<>
			<div
				className={styles.cursorBackground}
				style={{
					top: position.y,
					left: position.x
				}}
			></div>
			{/* <div
				className={styles.cursorElement}
				style={{
					top: position.y,
					left: position.x
				}}
			>
				<HiArrowUpRight size={32} />
			</div> */}
		</>
	)
}

export default CustomCursor
