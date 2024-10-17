import type { Metadata } from 'next'

// styles
import './globals.scss'

// fonts
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// metadata
export const metadata: Metadata = {
	title: 'Filip Stojanovic',
	description:
		'Front web developer & designer with a passion for delivering creative, high-impact solutions from concept to launch across diverse industries.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
