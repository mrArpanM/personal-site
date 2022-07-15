import React from 'react'
import Image from 'next/image'
import mypic from '../public/dp.jpg'
import { ReactNode } from 'react';
import {
  Link,
  Button,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <div className='flex justify-center p-4'>
      <div className='rounded-full px-1.5 pt-1.5 bg-emerald-500 shadow-2xl shadow-emerald-600 hover:bg-pink-700 hover:shadow-pink-800 bg-blend-lighten'>
      <Image
            src={mypic}
            alt="Avatar of Arpan M"
            width="150px"
            height="150px"
            className='rounded-full'
            placeholder='blur'
      />
      </div>
      </div>
        <div className='flex justify-center font'>
          <h2>Arpan M with ❤ </h2>
        </div>

        <div>
          I am into
          ....
        </div>

        <div>
          Email,address
        </div>

        <div>
          <button>
            Contact Me
          </button>
        </div>

      <div>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </div>
        
    </div>
  )
}

export default Sidebar  