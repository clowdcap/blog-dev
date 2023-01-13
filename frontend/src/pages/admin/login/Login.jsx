import React from 'react'

import './../admin.scss'

const Login = () => {
    return (
        <section className='login'>
            <div className="container__login center">
                <h1>Login</h1>
                <form>
                    <input type="text" name="usuario" id="usuario" placeholder='Your username' required />
                    <input type="password" name="password" id="password" placeholder='Your password' required />
                    <div className="remember__box">
                        <input type="checkbox" name="remember" id="remember" />
                        <span>Remember me</span>
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </section>
    )
}

export default Login