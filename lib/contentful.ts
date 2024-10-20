import { createClient } from 'contentful'

const client = createClient({
	space: process.env.space || '',
	accessToken: process.env.accessToken || ''
})

export async function getEntries(contentType: string) {
	const content = await client.getEntries({
		content_type: contentType,
		order: ['sys.createdAt']
	})

	return content
}

export async function getEntry(id: string) {
	const item = await client.getEntry(id)

	return item
}
