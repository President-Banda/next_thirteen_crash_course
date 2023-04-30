import React from 'react'

const RepoPage = ({ params }) => {
    console.log(params)
  return (
    <div className='card'>
        <h2>
            { params.name }
        </h2>
    </div>
  )
}

export default RepoPage