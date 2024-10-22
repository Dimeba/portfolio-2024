import type { Metadata } from 'next'

// styles
import './globals.scss'

// components
import Background from '@/components/Background'
import Header from '@/components/Header'

// fonts
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// metadata
export const metadata: Metadata = {
	title: 'Filip Stojanovic',
	description:
		'Front web developer & designer with a passion for delivering creative, high-impact solutions from concept to launch.',
	icons: {
		icon: '/favicon.svg'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon.svg' type='image/svg+xml' />
			</head>
			<body className={inter.className}>
				<Header />
				<Background />
				{children}
			</body>
		</html>
	)
}
