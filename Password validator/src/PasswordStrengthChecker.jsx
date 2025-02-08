import React, { useState } from 'react'
import './PasswordStrengthChecker.css'

const PasswordStrengthChecker = () => {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");

    const checkstrength = (password) => {
        let strengthLevel = 0;

        // Define the rules.
        if (password.length > 8) strengthLevel++;
        if (/[A-Z]/.test(password)) strengthLevel++;
        if (/[a-z]/.test(password)) strengthLevel++;
        if (/[0-9]/.test(password)) strengthLevel++;
        if (/[^A-Za-z0-9]/.test(password)) strengthLevel++;


        // check strength as per password case match...
        switch (strengthLevel) {
            case 5:
                return 'Strong';
            case 4:
                return 'Good';
            case 3:
                return 'Moderate';
            default:
                return 'Weak';
        }
    }

    // Handle password input chnage
    const handlePasswordChange = (e) =>{
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        const passwordStrength = checkstrength(inputPassword);
        setStrength(passwordStrength)
    };

    const clearInput = () =>{
        setPassword("")
        setStrength("")
    }


    return (
        <div className='container'>
            <h1>password strength checker</h1>
            <p>Password Strength: <strong>{strength}</strong></p>
            <div className='button_container'>
                <input type='text' value={password} onChange={handlePasswordChange} placeholder='Enter your Password'></input>
                <button onClick={handlePasswordChange}>checkstrength</button>
                <button onClick={clearInput}>Clear input</button>
            </div>
        </div>
    )
}

export default PasswordStrengthChecker