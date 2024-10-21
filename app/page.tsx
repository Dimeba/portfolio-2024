// components
import Hero from '@/components/Hero'
import Content from '@/components/Content'

// lib
import apolloClient from '@/lib/apolloClient'
import { GET_HOME_PAGE, GET_CONTENT_ITEMS } from '@/graphql/queries'

// types
import { Suspense } from 'react'
import {
	HomepageEntry,
	GetHomepageEntriesResponse,
	ContentItemEntry,
	GetContentItemsResponse
} from '@/types/contentfulTypes'
import { title } from 'process'

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
	const experience: ContentItemEntry =
		contentItemsData.contentItemsCollection.items.find(
			title => title.title === 'Experience'
		) ??
		(() => {
			throw new Error('Experience content item not found')
		})()

	// Select Projects data
	const selectProjects: ContentItemEntry =
		contentItemsData.contentItemsCollection.items.find(
			title => title.title === 'Select Projects'
		) ??
		(() => {
			throw new Error('Experience content item not found')
		})()

	return (
		<main>
			<Suspense fallback={<div>Loading...</div>}>
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
