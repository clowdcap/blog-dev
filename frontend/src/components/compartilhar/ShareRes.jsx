import React from 'react'
import './share.scss'

import {MdDelete} from 'react-icons/md'
import {AiFillEdit} from 'react-icons/ai'

const ShareRes = () => {
  return (
    <div className="share__box">
      <div className="box__share"><AiFillEdit className='share__icon' /></div>
        <div className="sep">|</div>
      <div className="box__share"><MdDelete className='share__icon' /></div>
    </div>
  )
}

export default ShareRes
