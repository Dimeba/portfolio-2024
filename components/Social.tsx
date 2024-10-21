// styles
import styles from './Social.module.scss'

//  Icons
import { IconType } from 'react-icons'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaBehance } from 'react-icons/fa'

const Social = () => {
	interface SocialMedia {
		name: string
		icon: IconType
		url: string
	}

	const socialMediaLinks: SocialMedia[] = [
		{
			name: 'GitHub',
			icon: FaGithub,
			url: 'https://github.com/Dimeba'
		},
		{
			name: 'LinkedIn',
			icon: FaLinkedin,
			url: 'https://www.linkedin.com/in/filip-stojanovic-9b45a990/'
		},
		{
			name: 'Behance',
			icon: FaBehance,
			url: 'https://www.behance.net/filipstojanovic'
		}
	]

	return (
		<div className={styles.social}>
			{socialMediaLinks.map((media, index) => (
				<a
					key={index}
					href={media.url}
					aria-label={`Link to ${media.name} profile`}
					className={styles.icon}
				>
					<media.icon size={24} />
				</a>
			))}
		</div>
	)
}

export default Social
