import React from 'react'
import {BsFacebook, BsTwitter} from 'react-icons/bs'


const ShareComp = () => {
  return (
    <div className="share__box box__complete">
      <div className="box__share">
        <BsFacebook className='share__icon' />
        <p className='text__icon'>Share on Facebook</p>
      </div>
      <div className="sep">|</div>
      <div className="box__share">
        <BsTwitter className='share__icon' />
        <p className="text__icon">Share on Twitter</p>
      </div>
    </div>
  )
}

export default ShareComp