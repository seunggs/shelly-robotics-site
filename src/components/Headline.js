import React from 'react'

const Headline = ({ children, size = 'lg', className = 'mb-5 font-medium' }) => {
  const sizeMap = {
    sm: { fontSize: '1.5rem', lineHeight: '2rem' },
    md: { fontSize: '2rem', lineHeight: '2.75rem' },
    lg: { fontSize: '2.75rem', lineHeight: '3.25rem' },
    xl: { fontSize: '3.5rem', lineHeight: '3.75rem' },
  }
  const sizeStyle = sizeMap[size]

  return (
    <h2 className={`${className}`} style={sizeStyle}>{children}</h2>
  )
}

export default Headline