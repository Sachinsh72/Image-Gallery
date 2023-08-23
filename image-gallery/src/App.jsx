import { useState } from 'react'
// import ImageGallery from './Component/ImageGallery/ImageGallery'
import CustomRoutes from './routes/CustomRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomRoutes/>
    </>
  )
}

export default App
