import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600 mt-10">
       © {new Date().getFullYear()} Wanderlogue. All rights reserved.
    </footer>
  )
}

export default Footer