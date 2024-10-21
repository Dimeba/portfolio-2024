// components
import Hero from '@/components/Hero'
import Content from '@/components/Content'

// lib
import apolloClient from '@/lib/apolloClient'
import { GET_HOME_PAGE } from '@/graphql/queries'

// types
import { Suspense } from 'react'
import {
	HomepageEntry,
	GetHomepageEntriesResponse
} from '@/types/contentfulTypes'

export default async function Home() {
	const { data } = await apolloClient.query<GetHomepageEntriesResponse>({
		query: GET_HOME_PAGE
	})

	const homepageEntry: HomepageEntry = data.homepageCollection.items[0]

	return (
		<main>
			<Suspense fallback={<div>Loading...</div>}>
				<Hero jobTitle={homepageEntry.jobTitle} about={homepageEntry.about} />
				<Content />
			</Suspense>
		</main>
	)
}
