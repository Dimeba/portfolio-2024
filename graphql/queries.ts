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
				contentCollection {
					items {
						sys {
							id
						}
					}
				}
			}
		}
	}
`

export const GET_CONTENT_ITEM = gql`
	query GetContentItem($id: String!) {
		contentItem(id: $id, locale: "en-US") {
			sys {
				id
			}
			title
			subtitle
			link
			date
			image {
				fileName
				url
			}
			description {
				json
			}
			referencesCollection {
				items {
					title
					link
				}
			}
			skills
		}
	}
`
