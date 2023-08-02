import React from 'react'

const Hero = ({ children }) => {

    return (
        <main className='w-full h-[50vh] bg-pink-400 flex items-center justify-center flex-1'>
            <div className='w-1/2 bg-pink-600 h-1/2 border rounded-lg border-white '>
                <img className='w-full object-contain h-40' src="https://png.pngtree.com/thumb_back/fw800/back_pic/04/29/94/9458401a0ca2e51.jpg" alt="asdasd" />
                <div className='border-t border-t-black p-4 flex items-center justify-center flex-1'>
                    {
                        children
                    }
                </div>
            </div>

        </main>
    )
}

export default Hero