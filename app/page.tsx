// components
import Hero from '@/components/Hero'
import Content from '@/components/Content'

// lib
import { getEntries } from '@/lib/contentful'

// types
import { HomepageFields } from '@/types/contentfulTypes'

export default async function Home() {
	const pages = await getEntries('homepage')
	const homepage = pages.items[0].fields

	const jobTitle: string =
		typeof homepage.jobTitle === 'string' ? homepage.jobTitle : ''

	const about: string = typeof homepage.about === 'string' ? homepage.about : ''

	return (
		<main>
			<Hero jobTitle={jobTitle} about={about} />
			<Content />
		</main>
	)
}
