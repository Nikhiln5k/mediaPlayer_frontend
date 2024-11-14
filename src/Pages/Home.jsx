import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'

function Home() {
  //  create state to do state-lifting
  const [uploadVideoStatus, setUploadVideoStatus] = useState({})

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="add-videos">
          <Add setUploadVideoStatus={setUploadVideoStatus} />
        </div>
        <Link to={'/watchhistory'} style={{textDecoration:'none', color:'white',}} className='fs-md-4'>Watch History</Link>
      </div>

      <div className="container-fluid w-100 mt-5 mb-5 d-flex flex-md-row flex-column justify-content-between">
          <div className="all-videos col-lg-9 col-12">
            <h4 className='mb-5'>All Videos</h4>
            <View uploadVideoStatus={uploadVideoStatus} />
          </div>

          <div className="category mt-5 col-lg-3 col-12">
            <Category />
          </div>
      </div>
    </>
  )
}

export default Home