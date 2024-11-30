import {useState,useEffect} from 'react'

function Loading() {
    const [show,SetShow] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            SetShow(prev => !prev)
        },1000)

        return () => clearTimeout(timer)
    },[])


  return (
    <div>
        {
        show && (
            <div className='z-50 absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-white'>
        <img src="src/assets/loading.gif"/>
    </div>
        )
    }
    </div>
  )
}

export default Loading