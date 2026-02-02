import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full flex flex-col p-8 justify-between'>
            <h2 className='bg-white rounded-full font-bold text-2xl h-14 w-14 justify-center items-center flex'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-2xs text-xl leading-10 font-semibold text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed similique autem at exercitationem. Voluptatum.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className= 'text-white hite font-semibold px-7 py-3 rounded-full'>{props.tag} </button>
                    <button className='text-white font-semibold px-5 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent
