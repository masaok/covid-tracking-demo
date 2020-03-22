import gql from 'graphql-tag'

export const QUERY_STATE_NAMES = gql`
  query StateNames {
    states(ids: ["CA"]) {
      name
    }
  }
`
