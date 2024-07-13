import Link from 'next/link'
import React from 'react'
import { Button } from './button'

const Header = () => {
  return (
    <header className='flex fixed w-full bg-background justify-center items-center px-4 py-2 lg:px-6'>
      <nav className='flex w-full flex-row justify-between items-center max-w-7xl'>
        <Link
          href={'/'}
          className='max-w-[32px]'
        >
          Logo
        </Link>
        <ul className='flex flex-row gap-4 items-center'>
          <li>
            <Button variant='link'>
              <Link href={'/link'}>link 1</Link>
            </Button>
          </li>
          <li>
            <Button variant='link'>
              <Link href={'/link'}>link 1</Link>
            </Button>
          </li>
          <li>
            <Button variant='link'>
              <Link href={'/link'}>link 1</Link>
            </Button>
          </li>
        </ul>
        <div className='flex flex-row justify-center items-center gap-4'>
          <Button>Get Started</Button>
        </div>
      </nav>
    </header>
  )
}

export default Header
