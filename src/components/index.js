import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


const container = document.createElement('div')
container.id = 'root'
document.body.appendChild(container)

ReactDOM.render(
          <App />, 
  container
)
