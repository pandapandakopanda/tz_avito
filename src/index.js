import * as React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import rootStore from './core/rootStore'

import {Provider} from 'mobx-react'

console.log('store: ', rootStore);

const container = document.createElement('div')
container.id = 'root'
document.body.appendChild(container)

ReactDOM.render(
  <Provider store={rootStore}>
    <App />
  </Provider>
, container)
