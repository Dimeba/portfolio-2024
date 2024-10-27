import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// components
import { HiArrowUpRight } from 'react-icons/hi2'
import { BsArrowRight } from 'react-icons/bs'

export enum CursorSize {
	SMALL = '1rem',
	LARGE = '3rem'
}

export enum Icon {
	ARROW_UP_RIGHT = 'HiArrowUpRight',
	ARROW_RIGHT = 'BsArrowRight'
}

type CursorState = {
	cursorSize: CursorSize
	showCursor: boolean
	icon: Icon | null
}

const initialState: CursorState = {
	cursorSize: CursorSize.SMALL,
	showCursor: false,
	icon: null
}

const cursorSlice = createSlice({
	name: 'cursor',
	initialState,
	reducers: {
		setCursorSize(state, action: PayloadAction<CursorSize>) {
			state.cursorSize = action.payload
		},
		setShowCursor(state, action: PayloadAction<boolean>) {
			state.showCursor = action.payload
		},
		setIcon(state, action: PayloadAction<Icon>) {
			state.icon = action.payload
		},
		resetCursor(state) {
			state.cursorSize = initialState.cursorSize
			state.showCursor = initialState.showCursor
			state.icon = initialState.icon
		}
	}
})

export const { setCursorSize, setShowCursor, setIcon, resetCursor } =
	cursorSlice.actions
export default cursorSlice.reducer
