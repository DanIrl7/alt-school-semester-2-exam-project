import React from 'react'

export default function ErrorBoundary() {
    function oops() { throw new Error('Mission failed succesfully')}
  return (
    <div>{oops}</div>
    
  )
}
