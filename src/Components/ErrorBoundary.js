import React from 'react'
import MyErrorBoundary from '../Error'

export default function ErrorBoundary(){
function oops()  { throw new Error('Mission failed succesfully')}


  return (
    <MyErrorBoundary>
    <div>{oops}</div>
    </MyErrorBoundary>
  )
}

