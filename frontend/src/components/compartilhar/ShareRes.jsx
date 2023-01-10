import React from 'react'
import './share.scss'
import {BsFacebook, BsTwitter} from 'react-icons/bs'


const ShareRes = () => {
  return (
    <div className="share__box">
      <div className="box__share"><BsFacebook className='share__icon' /></div>
        <div className="sep">|</div>
      <div className="box__share"><BsTwitter className='share__icon' /></div>
    </div>
  )
}

export default ShareRes