import React from 'react';
import { ImCross } from 'react-icons/im';

const VideoPopup = ({ src, setSrc }) => {

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 transition duration-350' >
            <div className='fixed top-0 left-0 right-0 bottom-0  bg-gray-900 opacity-40 transition duration-350'></div>
            <div className='absolute top-[20%] left-[10%] right-[10%] md:left-[30%] md:right-[30%] rounded-md bg-white opacity-100 p-5'>
            <div className='flex justify-end mb-4'>
                    <ImCross className='cursor-pointer hover:text-secondary' onClick={()=> setSrc(null)} />
                </div>
                <div className='flex items-center'>
                    <iframe
                        width="500"
                        height="315"
                        src={src}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
                </div>
                
            </div>
        </div>
    );
};

export default VideoPopup;