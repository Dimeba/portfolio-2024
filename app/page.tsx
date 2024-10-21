// components
import { Suspense } from 'react'
import Hero from '@/components/Hero'
import Content from '@/components/Content'

// lib
import apolloClient from '@/lib/apolloClient'
import { GET_HOME_PAGE, GET_CONTENT_ITEMS } from '@/graphql/queries'

// types
import {
	HomepageEntry,
	GetHomepageEntriesResponse,
	ContentItemsEntry,
	GetContentItemsResponse
} from '@/types/contentfulTypes'

export default async function Home() {
	// fetch homepage data
	const { data: homepageData } =
		await apolloClient.query<GetHomepageEntriesResponse>({
			query: GET_HOME_PAGE
		})

	const homepageEntry: HomepageEntry = homepageData.homepageCollection.items[0]

	// fetch content items
	const { data: contentItemsData } =
		await apolloClient.query<GetContentItemsResponse>({
			query: GET_CONTENT_ITEMS
		})

	// Experience data
	const experience: ContentItemsEntry =
		contentItemsData.contentItemsCollection.items.find(
			title => title.title === 'Experience'
		) ??
		(() => {
			throw new Error('Experience content item not found')
		})()

	// Select Projects data
	const selectProjects: ContentItemsEntry =
		contentItemsData.contentItemsCollection.items.find(
			title => title.title === 'Select Projects'
		) ??
		(() => {
			throw new Error('Experience content item not found')
		})()

	return (
		<main>
			<Suspense fallback={<p>Loading...</p>}>
				<Hero jobTitle={homepageEntry.jobTitle} about={homepageEntry.about} />
				<Content
					bio={homepageEntry.bio}
					experience={experience}
					selectProjects={selectProjects}
				/>
			</Suspense>
		</main>
	)
}
