"use client"
import React, { useState } from 'react'
import StatusCart from './components/statusCart'
import { OptionalTaskData } from '../Data/OptionalTask'
import StatusNav from './components/statusNav'

const page = () => {
    const [taskData, setTaskData] = useState();
  return (
    <div className='mt-40 py-20 md:py-8 md:mt-0 min-h-custom-min-h container'>
        <StatusNav />
        <StatusCart />
    </div>
  )
}

export default page