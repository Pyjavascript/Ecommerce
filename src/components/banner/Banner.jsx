import {useState} from 'react'

function Banner() {
    const [state,Setstate] = useState(true);

    function handleState(){
        Setstate(prev => !prev)
    }
  return (
    <>
    <div className={`h-screen w-screen absolute top-0 left-0 bg-[rgba(0,0,0,.3)] backdrop-blur-sm z-10 justify-center items-center ${state ? 'flex' : 'hidden'} `}>
        <div className='md:h-5/6 md:w-[60vw] h-screen w-screen bg-white md:rounded-3xl md:p-14 p-4  flex items-center relative'>
        <div className='flex flex-col gap-10'>
        <div>
            <p className='font-bold text-yellow-400 '>Deal of the Day</p>
            <h1 className='font-black text-4xl'>Organic fruit for<br/>your family's health</h1>
        </div>
        <div className='flex items-center gap-2'>
            <p className='font-extrabold text-6xl text-[#3bb77e]'>$38</p>
            <div>
                <p className='font-bold text-yellow-300'>26% off</p>
                <p className='font-bold line-through text-2xl text-slate-300'>$52</p>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-slate-400'>Hurry Up! Offer End In:</p>
            <div className='flex gap-4'>
                <div className='h-14 w-14 rounded-md border-2 border-green-400'>

                </div>
                <div className='h-14 w-14 rounded-md border-2 border-green-400'>

                </div>
                <div className='h-14 w-14 rounded-md border-2 border-green-400'>

                </div>
                <div className='h-14 w-14 rounded-md border-2 border-green-400'>

                </div>
            </div>
            <div className='flex flex-col items-start gap-3'>
            <div className='flex gap-2 items-center'>
            <div className='bg-red-300 h-3 w-14 stars'>
            </div>
            <p className='text-sm font-semibold'>3.2k rates</p>
            </div>
            <button className='flex justify-center items-center gap-4 bg-[#3bb77e] text-white p-2 px-3 rounded-md'>
                <p>Shop Now</p>
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
            </div>
        </div>
        </div>
        <div className='hidden md:block md:w-2/3 md:h-2/3 md:absolute right-2 top-10 overflow-visible'>
        <img className='' src="./popup-1.png"/>
        </div>
        <div className='absolute top-3 right-3 text-4xl text-slate-300' onClick={handleState}>
        <ion-icon name="close-outline"></ion-icon>
        </div>
        </div>
    </div>
    </>
  )
}

export default Banner