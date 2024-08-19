import React from 'react'
import LoadingSpinner from '../components/LoadingSpinner'

interface loadingProps {

}

const loading: React.FC<loadingProps> = ({ }) => {
  return (
    <LoadingSpinner />
  )
}

export default loading