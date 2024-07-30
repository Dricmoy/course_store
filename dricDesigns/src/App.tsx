import './App.css'
import Header from './components/Header.tsx'
import Product from './pages/Product.tsx'
import thumbnailimg from './assets/thumbnail.jpg'

function App() {
  return (
    <>
      <Header title="WEBROAD"/>
      <Product title='Complete Web Development Bundle' description='Learn to build websites with HTML, CSS, JAVASCRIPT, React, Node' images={[{ src: thumbnailimg, alt: 'Thumbnail image'}]} price={13.99}/>
    </>
  )
}

export default App
