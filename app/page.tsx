// components
import Hero from '@/components/Hero'
import Content from '@/components/Content'

// lib
import { getEntries } from '@/lib/contentful'

// types
import { HomepageSkeleton, Homepage } from '@/types/contentfulTypes'
import { EntryCollection } from 'contentful'

export default async function Home() {
	const pages: EntryCollection<HomepageSkeleton> =
		await getEntries<HomepageSkeleton>({
			content_type: 'homepage',
			order: ['sys.createdAt'],
			locale: 'en-US'
		})

	const homepageEntry: Homepage = pages.items[0]

	return (
		<main>
			<Hero
				jobTitle={homepageEntry.fields.jobTitle as string}
				about={homepageEntry.fields.about as string}
			/>
			<Content />
		</main>
	)
}
