import { Entry, Asset, EntrySkeletonType, EntryFieldTypes } from 'contentful'
import { Document } from '@contentful/rich-text-types'

// Reference Interface
export interface Reference {
	sys: {
		id: string
		linkType: string
		type: string
	}
}

// ReferenceProject Skeleton and Type
export interface ReferenceProjectSkeleton extends EntrySkeletonType {
	contentTypeId: 'referenceProject'
	fields: {
		title: string
		link: string
	}
}
export type ReferenceProject = Entry<ReferenceProjectSkeleton>

// ContentItem Skeleton and Type
export interface ContentItemSkeleton extends EntrySkeletonType {
	contentTypeId: 'contentItem'
	fields: {
		title: EntryFieldTypes.Symbol
		subtitle: EntryFieldTypes.Symbol
		link: EntryFieldTypes.Symbol
		date: EntryFieldTypes.Symbol
		image: Asset
		description: Document
		references: Reference[]
		skills: EntryFieldTypes.Symbol[]
	}
}

export type ContentItem = Entry<ContentItemSkeleton>

// Homepage Skeleton and Type
export interface HomepageSkeleton extends EntrySkeletonType {
	contentTypeId: 'homepage'
	fields: {
		title: EntryFieldTypes.Symbol
		jobTitle: EntryFieldTypes.Symbol
		about: EntryFieldTypes.Text
		resume: Asset
		bio: Document
		experience: ContentItem[]
		projects: ReferenceProject[]
		disclaimer: Document
	}
}
export type Homepage = Entry<HomepageSkeleton>
