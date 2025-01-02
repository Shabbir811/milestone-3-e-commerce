import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div className='hidden lg:block '>
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                <Link
                className="navbar-link no-underline relative "
                href={"/"}
                >
                    HOME
                </Link>
                <Link
                className="navbar-link no-underline relative "
                href={"/"}
                >
                    CATAEGORIES
                </Link>
                <Link
                className="navbar-link no-underline relative "
                href={"/"}
                >
                    MEN&apos;S
                </Link>
                <Link
                className="navbar-link no-underline relative "
                href={"/"}
                >
                    WOMEN&apos;S
                </Link>
            </div>
        </div>
      
    </div>
  )
}
