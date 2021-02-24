import React from 'react'

const SubHeadline = ({ children, size = 'md', className = 'blue mb-3' }) => {
  const sizeMap = {
    md: { fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: '500' },
  }
  const sizeStyle = sizeMap[size]

  return (
    <div className={`${className}`} style={sizeStyle}>{children}</div>
  )
}

export default SubHeadline