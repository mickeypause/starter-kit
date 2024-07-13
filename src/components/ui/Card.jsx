import React from 'react'

const Card = () => {
  const { id, name, description, financials } = {
    id: 1,
    name: 'Company Name',
    description: 'Company Description',
    financials: {
      revenue: 'Revenue',
      profit: 'Profit',
      employees: 'Employees',
    },
  }
  return (
    <div
      key={id}
      className='rounded-lg bg-background shadow-lg transition-shadow duration-300 hover:shadow-xl'
    >
      <div className='flex items-center gap-4 p-4'>
        <img
          src='/placeholder.svg'
          alt={name}
          width={48}
          height={48}
          className='rounded-full'
        />
        <div>
          <h3 className='text-lg font-bold'>{name}</h3>
          <p className='text-muted-foreground text-sm'>
            {financials.revenue} | {financials.profit}| {financials.employees}{' '}
            employees
          </p>
        </div>
      </div>
      <div className='p-4'>
        <p className='text-muted-foreground'>{description}</p>
      </div>
    </div>
  )
}

export default Card
