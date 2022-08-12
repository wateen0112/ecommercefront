import {React,useState} from 'react'
import Badge from '@mui/material/Badge';
import {Link} from 'react-router-dom';
function Navbar() {
    const [navOpened , setOpened] =useState(false);
    const toggleMobNav =function (){
        setOpened(!navOpened);
        console.log(navOpened)
    }
    const mobNavStyle ='absolute top-0 left-0 z-10 w-[100px] h-[100px] tablet:hidden  p-2 mt-[70px] border-[#999] border-1 border-solid rounded-md  bg-white';
    const navItemStyle= 'ml-[6px] mr-[6px] font-bold cursor-pointer hover:text-[#8a4af3]';
  return (
    <div
    className='navbar h-[60px] shadow-md relative z-10'
    >
        <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center">
            
        {/* div1  left */}
            <div    className='left flex flex-1 items-center'>
                <div  className='language cursor-pointer text-[16px] sm:hidden'>En</div>
                <div className='tablet:hidden   border-[#999] border-[1px] px-2 py-1 rounded-md border-solid'> <i onClick={toggleMobNav} className="fa fa-navicon text-[#999]"></i></div>
                <div className='searchInput border-[2px] border-solid  border-lightgrey ml-[10px] rounded-md   flex items-center
                focus-within:border-[#8a4af3] transition-all md:hidden sm:hidden
                '>
                    <input type="text" className='input outline-none pl-[6px] ' placeholder='Search' />
                    <i className='fa fa-search mr-[5px] text-[#aaa]'></i>
                </div>
            </div>
            {/* Div2 center */}
            <div className=' center  logo  flex flex-1 text-center  font-bold '>
                <div className='  text-center text-lg text-bold'><Link to="/">RODES GIFTS</Link></div>
            </div>
            {/* Div3 Right */}
            <div className=' right flex flex-1 items-center  justify-end'>
                <div className={navItemStyle +' sm:hidden'}>Register</div>
              <Link to='login'>  <div className={navItemStyle +' sm:hidden'} >Login</div></Link>
               <Link to='/cart'> <Badge badgeContent ={2} color="primary" className={navItemStyle}> <i className='fa fa-shopping-cart'></i></Badge></Link>
            </div>
          
        </div>
        <div className={ !navOpened? mobNavStyle+' hidden':mobNavStyle}>
        <div className={navItemStyle +' mb-5' }>Register</div>
                <div className={navItemStyle } >Login</div>
        </div>
    </div>
  )
}

export default Navbar