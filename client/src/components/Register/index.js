import React, { useState, useEffect } from 'react'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = () => {

    };

    const handleChange = () => {

    };


    return (
        <div className='login'>
            <h2>Login</h2>
            <div className='row'>
                <form className='col s12' onSubmit={e => submitForm(e)}>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input
                                type="email"
                                name='email'
                                id='email'
                                className='validate'
                                value={email}
                                onChange={e => handleChange(e)}
                            />
                            <label htmlFor="email">Email</label>
                            <span
                                className='helper-text'
                                data-error='Invalid email'
                                data-success='right'
                            />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='input-field col s12'>
                            <input
                                type="password"
                                name='password'
                                id='password'
                                className='validate'
                                value={password}
                                onChange={e => handleChange(e)}
                            />
                            <label htmlFor="password">Password</label>
                            <span
                                className='helper-text'
                                data-error='Invalid password'
                                data-success='right'
                            />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col s12'>
                            <button
                                className='btn waves-effect red lighten-2'
                                type='submit'
                                name='action'
                                onClick={submitForm}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
