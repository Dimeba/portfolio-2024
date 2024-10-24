'use client'

// styles
import styles from './CustomCursor.module.scss'

// hooks
import { useEffect, useState } from 'react'

// redux
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const CustomCursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const cursorSize = useSelector((state: RootState) => state.cursor.cursorSize)
	const showCursor = useSelector((state: RootState) => state.cursor.showCursor)
	const icon = useSelector((state: RootState) => state.cursor.icon)

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
			{showCursor && (
				<div
					className={styles.cursorElement}
					style={{
						top: position.y,
						left: position.x,
						width: cursorSize
					}}
				>
					{icon}
				</div>
			)}
		</>
	)
}

export default CustomCursor
