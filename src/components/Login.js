import Header from "./Header.js";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {auth} from "../utils/firebase.js";
import { addUsers } from "../utils/userSlice.js";



const Login = () => {
    const [formState, setFormState] = useState(false);
    const [inputValue, setInputValue] = useState({name: "", email:"", password:""});
    const [inputError, setInputError] = useState({});
    const [inputTouch, setInputTouch] = useState({name: false, email: false, password: false});
     const navigate = useNavigate();
     const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputValue(prev => ({
            ...prev,
            [name] : value
        }))

        setInputError(prev => ({...prev, [name] : ""}))
    }

    const validateField = (name, value) => {
         const regexText = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
         if (name === 'name') {
            if (!value.trim()) return "Please Enter the Name";
        }

        if (name === 'email') {
            if (!value.trim()) return "Please Enter the Email";
            if (!regexText.test(value)) return "Please enter the correct format";
        }

        if (name === 'password') {
            if (!value.trim()) return "Please Enter the Password";
            if (value.length < 6) return "Password too short";
        }   
        return "";
    }
    const touchChange = (e) => {
         const {name, value} = e.target;
         setInputTouch(prev => ({...prev, [name]: true}));
         const error = validateField(name, value);
         setInputError(prev => ({...prev, [name]: error}));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Object.entries(inputError).map((key, value) => console.log(value));
        const checkVal = Object.values(inputError).every(err => err.length === 0);
        if(!checkVal) return;
            
        // sign in or sign up
        if(formState) {
            // sign up
            console.log(formState);

            createUserWithEmailAndPassword(auth, inputValue.email, inputValue.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // Signed up 
                    updateProfile(user, {
                    displayName: inputValue.name
                    }).then(() => {
                        const {uid, email, displayName} = auth.currentUser;
                         dispatch(addUsers({
                            uid: uid,
                            email: email,
                            displayName: displayName
                        }));
                        navigate("/browse");
                    }).catch((error) => {
                        setInputError(prev => ({...prev, error: error}))
                    });
                    console.log(user);

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
        else {
            console.log(formState);
            signInWithEmailAndPassword(auth, inputValue.email, inputValue.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
               console.log(user);
               navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const errorData = errorCode + errorMessage;
                setInputError(prev => ({...prev, error: errorData}))
            });
        }
    }
    return (
        <div className="login h-lvh bg-[url(https://occ.a.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png)]">
            <Header/>
            <div className = "login py-10 text-white">
                <form className="py-4 flex flex-col w-full max-w-[400px] mx-auto gap-4" onSubmit = {handleSubmit}>
                    <h1 className="text-[44px] capitalize font-semibold">{formState ? "Enter your info to sign up" : "Enter your info to login"}</h1>
                     {formState && <input className="p-3 bg-black rounded-sm border border-[#563d3d]" 
                    type="text" name ="name" value = {inputValue.name} 
                    placeholder="Enter Name" onChange={handleChange} onBlur = {touchChange}
                    ></input>}
                    {formState && inputTouch.name && inputError.name && <span className="text-red-700">{inputError.name}</span>} 
                    <input className="p-3 bg-black rounded-sm border border-[#563d3d]" 
                    type="text" name ="email" value = {inputValue.email} 
                    placeholder="Enter Email" onChange={handleChange} onBlur = {touchChange}
                    ></input>
                    {inputTouch.email && inputError.email && <span className="text-red-700">{inputError.email}</span>} 
                    <input className="p-3 bg-black rounded-sm border border-[#563d3d]" name="password"
                    type="password" value = {inputValue.password} 
                    placeholder="Enter Password" onChange={handleChange} onBlur = {touchChange}
                    ></input>
                    {inputTouch.password && inputError.password && <span className="text-red-700">{inputError.password}</span>}
                    {inputError.error ? <div className="text-red-700">{inputError.error}</div> : null}
                    <button className = "p-3 bg-red-700 rounded-sm" type="submit">Continue</button>
                </form>
                <span>click here for <button className="underline" onClick = {() => setFormState(prev => !prev)}>{!formState ? "singup" : "signin" }</button></span>
            </div>
        </div>
    )
}

export default Login;