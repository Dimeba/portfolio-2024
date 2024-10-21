// styles
import styles from './Content.module.scss'

// components
import Bio from './Bio'
import Cards from './Cards'

// types
import { RichText, ContentItemEntry } from '@/types/contentfulTypes'

interface Props {
	bio: RichText
	experience: ContentItemEntry
	selectProjects: ContentItemEntry
}

const Content: React.FC<Props> = ({ bio, experience, selectProjects }) => {
	return (
		<section className={styles.content}>
			<Bio bio={bio} />

			<div className={styles.section}>
				<h2>{experience.title}</h2>
				<Cards />
			</div>

			<div className={styles.section}>
				<h2>{selectProjects.title}</h2>
				<Cards />
			</div>
		</section>
	)
}

export default Content
