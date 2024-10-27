import type { Metadata } from 'next'

// styles
import './globals.scss'

// components
import Background from '@/components/Background'
import Header from '@/components/Header'
import { Suspense } from 'react'
import Loader from '@/components/Loader'
import CustomCursor from '@/components/CustomCursor'
import ClientProvider from '@/components/ClientProvider'

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
	},
	openGraph: {
		title: 'Filip Stojanovic',
		description:
			'Front web developer & designer with a passion for delivering creative, high-impact solutions from concept to launch.',
		url: 'https://filip-stojanovic.dev/',
		images: [
			{
				url: '/cover.jpg',
				width: 1200,
				height: 630,
				alt: "Default sharing image for Filip Stojanovic's website"
			}
		],
		type: 'website'
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
				<Suspense fallback={<Loader />}>
					<ClientProvider>
						<CustomCursor />
						<Header />
						<Background />
						{children}
					</ClientProvider>
				</Suspense>
			</body>
		</html>
	)
}
