import * as React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'

import App from './App'
import rootStore from './core/rootStore'

const container = document.createElement('div')
container.id = 'root'
document.body.appendChild(container)

ReactDOM.render(
  <Provider store={rootStore}>
    <App />
  </Provider>
, container)
