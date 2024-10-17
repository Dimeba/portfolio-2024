// styles
import styles from './Skills.module.scss'

interface Props {
	skills: string[]
}

const Skills: React.FC<Props> = ({ skills }) => {
	return (
		<ul className={styles.skills}>
			{skills.map((language: string) => (
				<li key={language}>{language}</li>
			))}
		</ul>
	)
}

export default Skills
