import gql from 'graphql-tag'

export const GET_STATE_NAMES = gql`
  {
    states(ids: ["CA"]) {
      name
    }
  }
`
