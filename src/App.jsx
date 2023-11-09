
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router'

function App() {

  return (
    <>
    <RouterProvider router={router} />
     <h1 className='text-secondary'>Kamrul Islam</h1>
    </>
  )
}

export default App
