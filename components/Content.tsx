// styles
import styles from './Content.module.scss'

// components
import Bio from './Bio'
import Cards from './Cards'

// lib
import apolloClient from '@/lib/apolloClient'
import { GET_CONTENT_ITEM } from '@/graphql/queries'

// types
import {
	RichText,
	ContentItemsEntry,
	ContentItemEntry,
	GetContentItemResponse
} from '@/types/contentfulTypes'

interface Props {
	bio: RichText
	experience: ContentItemsEntry
	selectProjects: ContentItemsEntry
}

const Content: React.FC<Props> = async ({
	bio,
	experience,
	selectProjects
}) => {
	const experienceitems: ContentItemEntry[] = []
	const selectProjectsitems: ContentItemEntry[] = []

	for (const item of experience.contentCollection.items) {
		const { data } = await apolloClient.query<GetContentItemResponse>({
			query: GET_CONTENT_ITEM,
			variables: { id: item.sys.id }
		})

		experienceitems.push(data.contentItem)
	}

	for (const item of selectProjects.contentCollection.items) {
		const { data } = await apolloClient.query<GetContentItemResponse>({
			query: GET_CONTENT_ITEM,
			variables: { id: item.sys.id }
		})

		selectProjectsitems.push(data.contentItem)
	}

	return (
		<section className={styles.content}>
			<Bio bio={bio} />

			<div className={styles.section}>
				<h2>{experience.title}</h2>
				<Cards items={experienceitems} />
			</div>

			<div className={styles.section}>
				<h2>{selectProjects.title}</h2>
				<Cards items={selectProjectsitems} />
			</div>
		</section>
	)
}

export default Content
