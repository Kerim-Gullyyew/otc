import React from 'react'

const LoadingSpinner: React.FC = () => {
  return (
    <div className='flex items-center justify-center pt-10'>
      <div className="animate-spin inline-block w-10 h-10 border-[6px] border-current border-t-transparent text-primary rounded-full" role="status" aria-label="loading">

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default LoadingSpinner