'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const {id} = useParams()
  return (
    <div>
      ini halaman detail job dengan id {id}
    </div>
  )
}

export default page
