import React from 'react'
import Dictionary from './compnent/Dictionary'
import Footer from './compnent/Footer'


function App() {
  return (
    <div className='text-center h-auto w-screen'>
      <h1 className="text-3xl font-bold pt-20">Dictionary</h1>
      <div className='mb-10'>
      <Dictionary/>
      </div>
      <Footer />
    </div>
  )
}

export default App