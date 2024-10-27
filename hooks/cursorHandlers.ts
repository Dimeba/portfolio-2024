import { AppDispatch } from '@/redux/store'
import { ReactNode } from 'react'

import {
	setCursorSize,
	setShowCursor,
	setIcon,
	resetCursor,
	CursorSize,
	Icon
} from '@/redux/slices/cursorSlice'

export const handleMouseEnter = (dispatch: AppDispatch, icon: Icon): void => {
	dispatch(setCursorSize(CursorSize.LARGE))
	dispatch(setShowCursor(true))
	dispatch(setIcon(icon))
}

export const handleMouseLeave = (dispatch: AppDispatch): void => {
	dispatch(resetCursor())
}
