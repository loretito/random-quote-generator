import React from 'react'
import { Line } from './Line'

export const Quote = ({text, mt = ''}) => {
  return (
    <div className={`flex justify-center ${mt}`}>
        <div className="relative">
            <Line />
        </div>
        <div className="w-[38rem]">
          <p className="text-4xl">"{text}"</p>
        </div>

      </div>
  )
}
