import React from 'react';

const LoginForm = () => {

    return(
        <form>
            <label>
                LOGIN

            </label>
            <br />
            <label>
            Username:
            <input type="text"
                name="username"
                id="username"
                type="text"
                placeholder="Username or email address"
                required="required"
            />
            </label>

            <br />

            <label>
            Password: 
            <input type="text"
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                required="required"
            />
            </label>

            <br />

            <button type="submit">
            Login
            </button>

        </form>
    );
};

export default LoginForm;