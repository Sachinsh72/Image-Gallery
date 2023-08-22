import { useState } from 'react'
import './App.css'
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
