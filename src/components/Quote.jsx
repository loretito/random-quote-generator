import React from 'react'
import { Line } from './Line'

export const Quote = ({text, mt = ''}) => {
  return (
    <div className={`flex justify-center md:${mt} mt-16`}>
        <div className="relative">
            <Line />
        </div>
        <div className="lg:w-[38rem] md:w-[30rem] w-[16rem]">
          <p className="md:text-4xl text-2xl">"{text}"</p>
        </div>

      </div>
  )
}
