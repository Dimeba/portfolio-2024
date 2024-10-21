import { Document } from '@contentful/rich-text-types'

type Sys = {
	id: string
}

type Asset = {
	fileName: string
	url: string
}

// Homepage

export type HomepageEntry = {
	sys: Sys
	title: string
	jobTitle: string
	about: string
	resume: Asset
	bio: Document
	disclaimer: Document
}

export type HomepageCollection = {
	items: HomepageEntry[]
}

export type GetHomepageEntriesResponse = {
	homepageCollection: HomepageCollection
}
