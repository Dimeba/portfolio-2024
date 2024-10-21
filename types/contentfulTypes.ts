import { Document } from '@contentful/rich-text-types'

export type Sys = {
	id: string
}

export type Asset = {
	fileName: string
	url: string
}

export type RichText = {
	json: Document
}

export type Reference = {
	sys: Sys
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
export type ContentItemsEntry = {
	sys: Sys
	title: string
	contentCollection: {
		items: Reference[]
	}
}

export type ContentItemsCollection = {
	items: ContentItemsEntry[]
}

export type GetContentItemsResponse = {
	contentItemsCollection: ContentItemsCollection
}

// Content Item
export type ContentItemEntry = {
	sys: Sys
	title: string
	subtitle: string
	link: string
	date: string
	image: Asset | null
	description: RichText
	referencesCollection: {
		items: ReferenceProject[]
	}
	skills: string[]
}

export type GetContentItemResponse = {
	contentItem: ContentItemEntry
}

// Reference Project
export type ReferenceProject = {
	title: string
	link: string
}
