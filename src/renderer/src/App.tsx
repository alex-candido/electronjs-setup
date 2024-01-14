import { RouterProvider } from 'react-router-dom'
import ReduxProvider from './Providers/ReduxProvider'
import Router from './routes'

const App = () => {
  return (
    <>
      <ReduxProvider>
        <RouterProvider router={Router} />
      </ReduxProvider>
    </>
  )
}

export default App
