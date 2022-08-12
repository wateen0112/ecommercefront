import { stepLabelClasses } from '@mui/material';
import {React, useState} from 'react';

function Announce() {

    const [announceStyle , setAnnounceStyle] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center ');
  const usestate = ()=>{
    setAnnounceStyle(announceStyle + ' hidden');
  }
    return (
    <div className={announceStyle}>Harry Up !! there is 40% 
 <i 
 onClick={usestate}
 className='fa fa-times  cursor-pointer mx-2'></i>

    </div>
  )
}

export default Announce;