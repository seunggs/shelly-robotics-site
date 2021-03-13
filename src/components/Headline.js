import React from 'react'

const Headline = ({
  size = 'lg',
  color = 'gray-900',
  weight = 'medium',
  className = 'mb-3',
  style = {},
  children,
}) => {
  const sizeMap = {
    sm: 'text-xl leading-7',
    md: 'text-2xl leading-9',
    lg: 'text-4xl leading-10',
    xl: 'text-5xl leading-10',
  }
  const sizeClassName = sizeMap[size]

  return (
    <h2 className={`${color} ${weight} ${sizeClassName} ${className}`} style={style}>{children}</h2>
  )
}

export default Headline