import React,{useState} from 'react';
import axios from 'axios';
function Login() {
const [userName,setUserName]=useState('');
const [password,setPassword]=useState('');
const [err,setErr]=useState('');

    const handleLogin =async  ()=>{
const response = await axios.post('https://fakestoreapi.com/auth/login',JSON.stringify({
    username: userName,
    password: password
})

).then().then(res=>console.log(res))

.catch(err=>console.log(err))
console.log(response);
console.log(userName)   
}

  return (
    <div className='flex justify-center items-center min-h-[100vh]' >

        <div  
        className='
        rounded-md
        flex flex-col justify-center items-center shadow-2xl
        p-5'
        >

<h1 className='font-bold  text-[1.8rem] 
pt-2
pb-5
'>Login</h1>
            <input
            
            className='border-[2px]
            border-solid
            px-5
            py-1
            rounded-md
            my-1
            '
            type="text" 
         onChange={(e)=>{
            setUserName(e.target.value)
         }}
            placeholder='Username' />
            <input 
                 onChange={(e)=>{
                    setPassword(e.target.value)
                 }}
               className='border-[2px]
               border-solid
               px-5
               py-1
               rounded-md
               my-1
               '
            
            
            type="passwod" placeholder='Password' />
        
        <button 
        
        onClick={ async ()=>{
            await handleLogin();
        }}
        className='px-5 py-1  bg-[#8a4af3] font-semibold text-white mt-5 rounded-md shadow-lg hover:scale-110 hover:shadow-2xl'>
            Login
        </button>
        </div>
    </div>
  )
}

export default Login