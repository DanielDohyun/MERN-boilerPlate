import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions/user_actions';

function Register() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [err, setErr] = useState('');

    const isFormValid = () => {
        let err = ''

        if (!isFormEmpty()) {
            err ='fill in all fields'
            setErr('fill in all fields')
        } else if (isPasswordValid()) {
            setErr('invalid password');
        } else {
            return true;
        }
    }

    const isPasswordValid = () => {
        if (password.length < 6 || passwordCheck.length < 6) {
            return false;
        } else if (password !== passwordCheck) {
            return false;
        } else {
            return true;
        }
    }
    
    const isFormEmpty = () => {
        return (
            !name.length ||
            !lastname.length ||
            !email.length ||
            !password.length ||
            !passwordCheck.length
        )
    }

    const submitForm = (e) => {
        e.preventDefault();

        let data = {
            name,
            lastname,
            email,
            password,
            err,
            passwordCheck
        }
        console.log(data)


        if (isFormValid()) {
            setErr('');
            dispatch(registerUser(data))
                .then(res => {
                    console.log(res)
                    if (res.payload.success) {
                        this.props.history.push('/login')
                    } else {
                        setErr(err('failed to send data to DB'))
                    }
                })
                .catch(e => setErr(e))
        } else {
            console.error('form is not valid')
        }
    }

    return (
        <div className='register'>
            <h2>Sign up</h2>
            <div className='row'>
                <form className='col s12' onSubmit={e => submitForm(e)}>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input
                                type="text"
                                name='name'
                                id='name'
                                className='validate'
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <label className='active' htmlFor="name">firstname</label>
                            <span
                                className='helper-text'
                                data-error='Invalid password'
                                data-success='right'
                            />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='input-field col s12'>
                            <input
                                type="text"
                                name='lastname'
                                id='lastname'
                                className='validate'
                                value={lastname}
                                onChange={e => setLastname(e.target.value)}
                            />
                            <label className='active' htmlFor="last">lastname</label>
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
                                type="email"
                                name='email'
                                id='email'
                                className='validate'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <label className='active' htmlFor="email">Email</label>
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
                            <label className='active' htmlFor="password">Password</label>
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
                                Create an account 
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
};

export default connect(mapStateToProps)(Register);