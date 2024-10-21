import { Document } from '@contentful/rich-text-types'

type Sys = {
	id: string
}

type Asset = {
	fileName: string
	url: string
}

export type RichText = {
	json: Document
}

// Homepage

export type HomepageEntry = {
	sys: Sys
	title: string
	jobTitle: string
	about: string
	resume: Asset
	bio: RichText
	disclaimer: RichText
}

export type HomepageCollection = {
	items: HomepageEntry[]
}

export type GetHomepageEntriesResponse = {
	homepageCollection: HomepageCollection
}

// Content Items

export type ContentItemEntry = {
	sys: Sys
	title: string
}

export type ContentItemsCollection = {
	items: ContentItemEntry[]
}

export type GetContentItemsResponse = {
	contentItemsCollection: ContentItemsCollection
}
