import React from 'react'

export default function Footer() {
    let date=new Date().getFullYear()
  return (
    <div className='border-2 bg-gray-100 p-8'>
       <h1 className='text-center text-xl '> © Copyright reseved {date}</h1>
        </div>
  )
}
