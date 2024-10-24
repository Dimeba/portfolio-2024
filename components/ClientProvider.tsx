'use client'

import { Provider } from 'react-redux'
import { store } from '@/redux/store'

interface Props {
	children: React.ReactNode
}

const ClientProvider: React.FC<Props> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default ClientProvider
