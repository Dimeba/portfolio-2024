// styles
import styles from './Content.module.scss'

// components
import Bio from './Bio'
import Cards from './Cards'
import { Suspense } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BsArrowRight } from 'react-icons/bs'

// lib
import apolloClient from '@/lib/apolloClient'
import { GET_CONTENT_ITEM } from '@/graphql/queries'

// types
import {
	RichText,
	Asset,
	ContentItemsEntry,
	ContentItemEntry,
	GetContentItemResponse
} from '@/types/contentfulTypes'

interface Props {
	bio: RichText
	experience: ContentItemsEntry
	selectProjects: ContentItemsEntry
	disclaimer: RichText
	resume: Asset
}

const Content: React.FC<Props> = async ({
	bio,
	experience,
	selectProjects,
	disclaimer,
	resume
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

			<div className={styles.section} id='experience'>
				<div>
					<h2>{experience.title}</h2>

					<Suspense fallback={<p>Loading...</p>}>
						<Cards items={experienceitems} />
					</Suspense>
				</div>

				<a href={resume.url} aria-label='Link to my resume.' target='_blank'>
					<div className={styles.resumeLink}>
						<p>View Full Résumé</p>
						<BsArrowRight size={20} />
					</div>
				</a>
			</div>

			<div className={styles.section} id='projects'>
				<div>
					<h2>{selectProjects.title}</h2>

					<Suspense fallback={<p>Loading...</p>}>
						<Cards items={selectProjectsitems} />
					</Suspense>
				</div>
			</div>

			<div className={styles.disclaimer}>
				{documentToReactComponents(disclaimer.json)}
			</div>
		</section>
	)
}

export default Content
