import { Entry, Asset } from 'contentful'
import { Document } from '@contentful/rich-text-types'

export interface Service extends Entry {
	fields: { title: string; description: string; image: Asset }
}

export interface ReferenceProject extends Entry {
	fields: {
		title: string
		link: string
	}
}

export interface ContentItem extends Entry {
	fields: {
		title: string
		subtitle: string
		link: string
		date: string
		image: Asset
		description: Document
		references: { sys: { id: string } }[]
		skills: string[]
	}
}

export interface HomepageFields {
	title: string
	jobTitle: string
	about: string
	resume: Asset
	bio: Document
	experience: { sys: { id: string } }[]
	projects: { sys: { id: string } }[]
	disclaimer: Document
}

export interface Homepage extends Entry {
	fields: {
		title: string
		jobTitle: string
		about: string
		resume: Asset
		bio: Document
		experience: { sys: { id: string } }[]
		projects: { sys: { id: string } }[]
		disclaimer: Document
	}
}
