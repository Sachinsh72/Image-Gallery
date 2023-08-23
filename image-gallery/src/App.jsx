import { useState } from 'react'
import ImageGallery from './Component/ImageGallery/ImageGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ImageGallery/>
    </>
  )
}

export default App
