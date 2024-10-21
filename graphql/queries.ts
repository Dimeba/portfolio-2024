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
