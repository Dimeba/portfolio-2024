import { gql } from '@apollo/client'

export const GET_HOME_PAGE = gql`
	query GetHomepageEntries {
		homepageCollection(locale: "en-US") {
			items {
				sys {
					id
				}
				title
				jobTitle
				about
				resume {
					fileName
					url
				}
				bio {
					json
				}
				disclaimer {
					json
				}
			}
		}
	}
`

export const GET_CONTENT_ITEMS = gql`
	query GetContentItems {
		contentItemsCollection(locale: "en-US") {
			items {
				sys {
					id
				}
				title
			}
		}
	}
`
