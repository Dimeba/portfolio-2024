'use client'

// styles
import styles from './Header.module.scss'

// components
import Image from 'next/image'
import { Spin as Hamburger } from 'hamburger-react'

// hooks
import { useState, useEffect } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const Header = () => {
	const [targetRef, isIntersecting] = useIntersectionObserver() as [
		React.MutableRefObject<HTMLDivElement>,
		boolean
	]

	// Mobile Menu
	const [menuOpen, setMenuOpen] = useState<boolean>(false)
	const [isMobile, setIsMobile] = useState<boolean>(false)

	// Check if mobile and close menu on resize
	useEffect(() => {
		const handleResize = (): void => {
			setIsMobile(window.innerWidth < 1024)
			setMenuOpen(false)
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const toggleMenu = (): void => {
		setMenuOpen(!menuOpen)
	}

	const closeMenu = (): void => {
		setMenuOpen(false)
	}

	interface MenuItem {
		title: string
		link: string
	}

	const menuItems: MenuItem[] = [
		{ title: 'About Me', link: '#about' },
		{ title: 'Experience', link: '#experience' },
		{ title: 'Projects', link: '#projects' }
	]

	return (
		<div ref={targetRef}>
			<header className={styles.header}>
				<div className={styles.container}>
					<a href='/#hero' aria-label='Link to top screen'>
						<Image src='/logo.svg' alt='logo' width={50} height={50} />
					</a>

					<nav className={menuOpen ? styles.open : ''}>
						{((isIntersecting && !isMobile) || menuOpen) && (
							<div className={styles.menu}>
								{menuItems.map((item, index) => (
									<a
										key={index}
										href={item.link}
										className={styles.link}
										onClick={closeMenu}
									>
										{item.title}
									</a>
								))}
							</div>
						)}

						{(!isIntersecting || isMobile || menuOpen) && (
							<div className={styles.hamburger}>
								<Hamburger
									// color={isIntersecting && !menuOpen ? 'white' : 'black'}
									size={20}
									toggled={menuOpen}
									toggle={toggleMenu}
								/>
							</div>
						)}
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Header
