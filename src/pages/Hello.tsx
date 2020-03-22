import React, { useState, useEffect } from 'react'
import SimpleLineChart from '../examples/SimpleLineChart'
import { fetchStates } from '../api/endpoints'

// Interface for incoming props via match.params (URL params)
interface HelloProps {
  match: {
    params: {
      state: string
    }
  }
}

// https://stackoverflow.com/questions/25469244/how-can-i-define-an-interface-for-an-array-of-objects-with-typescript/25470775
interface State {
  state: string
  name: string
}

// Separate interface for list of State objects
interface StateList extends Array<State> {}

const Hello = (props: HelloProps) => {
  const [loading, setLoading] = useState(false)
  const [states, setStates] = useState<StateList>([])

  useEffect(() => {
    const retrieveStates = async () => {
      // REST call to fetch all states (unable to do so in GraphQL given the schema)
      const results = await fetchStates()
      console.log(results)
      setStates(results)
      setLoading(false)
    }

    setLoading(true)
    retrieveStates()
  }, [])

  const stateName = props.match.params.state

  const statesList = loading ? (
    <div>LOADING</div>
  ) : (
    states.map(state => {
      console.log(typeof state)
      console.log(state)
      return <div>{state.name}</div>
    })
  )

  return (
    <div className="App">
      <div>{stateName}</div>
      <div>{statesList}</div>
      <header className="App-header">
        <SimpleLineChart />
      </header>
    </div>
  )
}

export default Hello
