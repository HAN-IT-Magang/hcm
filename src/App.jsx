import { RouterProvider } from 'react-router-dom'
import './i18n'
import { router } from './routes'

function App() {
  return <RouterProvider router={router} />
}

export default App
