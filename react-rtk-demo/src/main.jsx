import { Provider } from 'react-redux'; // the encapsulation of our app with the store to would be used, as the context
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './app/store.js'; // importing the store from the our store created
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/*Under the hood this use context, to provide the info of the entire react tree  */}
      <App />
    </Provider>
  </StrictMode>,
);
