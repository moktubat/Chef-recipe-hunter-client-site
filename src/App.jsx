import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} >
      
    </RouterProvider>
      
    </>
  )
}

export default App
