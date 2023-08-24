import React from 'react'
import "./Activity.css"
import { meta } from '../../assets'
const Activity = () => {
  return (
    <div className='activityContainer'>
        <div className='activityHeading'>
        <span className='activityHeadingspan'>
        Our Latest <span className='activityHeadingspan1'>Activity</span>
        </span>  
        <p className='activityHeadingspan2'>We help you to build high-quality digital solutions and products as well as deliver a wide range of related professional services. We are providing world-class service to our clients and products.</p>      
        </div>
        <div className='activityImageContainer'>
            <img src={meta} alt='meta' className='activityImage' />
        </div>
    </div>
  )
}

export default Activity

