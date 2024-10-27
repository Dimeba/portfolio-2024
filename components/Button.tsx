'use client'

// styles
import styles from './Button.module.scss'

// components
import { BsArrowRight } from 'react-icons/bs'

// hooks
import { handleMouseEnter, handleMouseLeave } from '@/hooks/cursorHandlers'

// redux
import { useDispatch } from 'react-redux'
import { Icon } from '@/redux/slices/cursorSlice'

interface Props {
	text: string
	link: string
	label: string
	box: boolean
}

const Button: React.FC<Props> = ({ text, link, label, box }) => {
	const dispatch = useDispatch()

	return (
		<a
			href={link}
			aria-label={label}
			className={box ? styles.boxButton : styles.button}
			target='_blank'
			onMouseEnter={() => handleMouseEnter(dispatch, Icon.ARROW_RIGHT)}
			onMouseLeave={() => handleMouseLeave(dispatch)}
		>
			{text}
			<BsArrowRight size={20} />
		</a>
	)
}

export default Button
