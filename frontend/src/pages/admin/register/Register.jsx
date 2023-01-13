import React from 'react'

const Register = () => {
    return (
        <section className="register">
            <div className="container__register center">
                <h1>Register</h1>
                <form>
                    <input type="text" name="usuario" id="usuario" placeholder='Your username*' required />
                    <input type="text" name="nome" id="nome" placeholder='Your name' />
                    <input type="text" name="sobrenome" id="sobrenome" placeholder='Your sobrename' />
                    <input type="text" name="telefone" id="telefone" placeholder='Your phone' />
                    <input type="password" name="password" id="password" placeholder='Your password*' required />
                    <input type="re-password" name="re-password" id="re-password" placeholder='Repeat your password*' required />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </section>
    )
}


export default Register