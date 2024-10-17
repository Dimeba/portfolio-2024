import React from 'react'

const Header = () => {
	interface MenuItem {
		title: string
		link: string
	}

	const menuItems: MenuItem[] = [
		{ title: 'About', link: '#about' },
		{ title: 'Experience', link: '#experience' },
		{ title: 'Projects', link: '#projects' }
	]

	return (
		<nav>
			{menuItems.map((item, index) => (
				<a key={index} href={item.link}>
					{item.title}
				</a>
			))}
		</nav>
	)
}

export default Header
