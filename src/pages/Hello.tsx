import React from 'react'
import SimpleLineChart from '../examples/SimpleLineChart'

interface HelloProps {
  match: {
    params: {
      state: string
    }
  }
}

const Hello = (props: HelloProps) => {
  const stateName = props.match.params.state
  return (
    <div className="App">
      <div>{stateName}</div>
      <header className="App-header">
        <SimpleLineChart />
      </header>
    </div>
  )
}

export default Hello
