import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const CONTENTFUL_SPACE_ID = process.env.space!
const CONTENTFUL_ACCESS_TOKEN = process.env.accessToken!

const apolloClient = new ApolloClient({
	link: new HttpLink({
		uri: `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
		headers: {
			Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`
		}
	}),
	cache: new InMemoryCache()
})

export default apolloClient
