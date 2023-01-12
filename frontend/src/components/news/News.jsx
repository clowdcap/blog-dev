import React from 'react'
import './news.scss'

const News = () => {
  return (
    <div className="newsletter">
        <div className="container__news">
            <div className="texto__news">
                <h2>Sign up for the newsletter</h2>
                <p>If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared.</p>
            </div>

            <form className="form__news">
                <input type="text" name="enail" id="email" placeholder='Enter your email...'/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default News