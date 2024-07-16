import Link from 'next/link'
import React from 'react'

const JobItem = ({ title, description, company, link, location, date }) => {
  return (
    <div className='flex flex-col w-full w-max-[700px] bg-white rounded-md shadow-md px-4 py-2'>
      <h2 className='text-xl font-bold'>
        <Link
          href={link}
          target='_blank'
        >
          {title}
        </Link>
      </h2>
      <p className=' mt-3'>{description}</p>
      <div className='mt-3 text-slate-500 flex gap-2'>
        <span>{location}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}

export default JobItem
