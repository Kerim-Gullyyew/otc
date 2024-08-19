import LoadingSpinner from '@/app/components/LoadingSpinner'
import React from 'react'

interface loadingProps {

}

const loading: React.FC<loadingProps> = ({ }) => {
  return (
    <LoadingSpinner />
  )
}

export default loading