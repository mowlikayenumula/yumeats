import React from 'react'

const QuickDeliveryComponent = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
        <h3 className='text-orange-500 font-bold text-2xl text-center '>Quick Delivery APP</h3>
        <div className='mx-auto grid md:grid-cols-2 sm:grid-cols-1'>
           <img className='w-[550px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'/>
           <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>Get the App</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
            voluptate reprehenderit dolore autem cum ullam sed odit
            perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
            </p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
           </div>
        </div>
    </div>
  )
}

export default QuickDeliveryComponent