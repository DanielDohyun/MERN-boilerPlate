import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import {loginUser} from '../actions/user_actions'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const dispatch = useDispatch();

    const isFormValid = (email, password) => email && password;

    // const displayErr = (err) => {
    //     err.map((e, i) => <p key={i}>{e}</p>)
    // }

    const submitForm = (e) => {
        e.preventDefault();
        let data = {
            email,
            password
        };

        if (isFormValid(email, password)) {
            setErr([]);
            dispatch(loginUser(data))
                .then(res => {
                    if (res.payload.loginSuccess) {
                        this.props.history.push('/')
                    } else {
                        setErr('Failed to login, check your email and password')
                        // setErr(err.concat('Failed to login, check your email and password'))
                    console.log(err)
                    }
                })
        } else {
            setErr('Form is invalid')
            // setErr(err.concat('Form is invalid'))
            console.log(err)
        }
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
                                onChange={e => setEmail(e.target.value)}
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
                                onChange={e => setPassword(e.target.value)}
                            />
                            <label htmlFor="password">Password</label>
                            <span
                                className='helper-text'
                                data-error='Invalid password'
                                data-success='right'
                            />
                        </div>
                    </div>

                    {
                        err.length > 0 && (
                            <div>
                                {/* {displayErr(err)} */}
                                <p>{err}</p>
                            </div>
                        )
                    }

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

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Login);
