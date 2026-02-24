import Header from "./Header.js";
import { useState } from "react";

const Login = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputError, setInputError] = useState("");
    const [inputTouch, setInputTouch] = useState(false);

    const isPhone = /^\d+$/.test(inputValue);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setInputTouch(false);
    }
    const touchChange = (e) => {
        const inputData = e.target.value;

        const regexText = /^[^@\s]+@[^@\s]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;
        setInputTouch(true);
        
         if (!inputData.trim()) {
            setInputError("Email or Phone is required");
         }
         if(isPhone) {
             if (!phoneRegex.test(inputData)) {
                setInputError("Phone format not correct");
            }
        }
        else {
            if (!regexText.test(inputData)) {
                setInputError("Email format not correct");
            }
        }
    }
    return (
        <div className="login h-lvh bg-[url(https://occ.a.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png)]">
            <Header/>
            <div className = "login py-10 text-white">
                <h1 className="text-[44px] capitalize font-semibold">Enter your info to sign in</h1>
                <p className="text-[20px]">Or get started with a new account</p>
                <form className="py-4 flex flex-col w-full max-w-[400px] mx-auto gap-4">
                      {/* Show dropdown only if phone */}
                        {isPhone && (
                            <select className="bg-black text-white mr-2 outline-none">
                            <option value="+91">+91</option>
                            <option value="+1">+1</option>
                            <option value="+44">+44</option>
                            </select>
                        )}
                    <input className="p-3 bg-black rounded-sm border border-[#563d3d]" 
                    name= "identifier"
                    type="text" value = {inputValue} 
                    placeholder="Email or mobile number" onChange={handleChange} onBlur = {touchChange}
                    onFocus={() => setInputError("")}></input>
                    {inputTouch && inputError.length > 0 && <span className="text-red-700">{inputError}</span>}
                    <button className = "p-3 bg-red-700 rounded-sm" type="submit">Continue</button>
                </form>
            </div>
        </div>
    )
}

export default Login;