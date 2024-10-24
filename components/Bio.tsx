// styles
import styles from './Bio.module.scss'

// components
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// types
import { RichText } from '@/types/contentfulTypes'

interface Props {
	bio: RichText
}

const Bio: React.FC<Props> = ({ bio }) => {
	return (
		<div className={styles.bio} id='about'>
			{documentToReactComponents(bio.json)}
		</div>
	)
}

export default Bio
