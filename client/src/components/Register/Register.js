import React, {useState} from 'react';

function Register() {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const submitForm = () => {

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
                                name='first'
                                id='first'
                                className='validate'
                                value={first}
                                onChange={e => setFirst(e.target.value)}
                            />
                            <label className='active' htmlFor="first">firstname</label>
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
                                name='last'
                                id='last'
                                className='validate'
                                value={last}
                                onChange={e => setLast(e.target.value)}
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

export default Register;
