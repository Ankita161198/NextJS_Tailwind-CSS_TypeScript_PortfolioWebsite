// import React from 'react'
// import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
// import { useForm, SubmitHandler } from 'react-hook-form'

// type Inputs = {
//   name: string,
//   email: string,
//   subject: string,
//   message: string
// }

// type Props = {}

// function ContactMe({}: Props) {
//   const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();

//   const onSubmit: SubmitHandler<Inputs> = (formData) => {
//     window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=shinde.ankita1603@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi Ankita,\n\nMy name is ${formData.name}. ${formData.message}`)}`, '_blank');

//     // Clear the form inputs
//     reset();
//   }
    
//   return (
//     <div className='h-screen flex relative flex-col text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center'>
//       <h3 className='absolute top-24 uppercase tracking-[20px] text-[#e0afa0] text-2xl'>
//         Contact Me
//       </h3>

//       <div className='flex flex-col space-y-10'>
//         <h4 className='text-4xl font-semibold text-center'>
//           I have got just what you need.{" "}
//           <span className='decoration-[#e0afa0]/50 underline'>Let&apos;s Talk</span>
//         </h4>

//         <div className='space-y-10'>
//           <div className='flex items-center space-x-5 justify-center'>
//             <PhoneIcon className='text-[#e0afa0] h-7 w-7 animate-pulse' />
//             <p className='text-2xl'>+1 (438)-920 4170</p>
//           </div>

//           <div className='flex items-center space-x-5 justify-center'>
//             <MapPinIcon className='text-[#e0afa0] h-7 w-7 animate-pulse' />
//             <p className='text-2xl'>Montreal, Quebec (Willing to relocate)</p>
//           </div>

//           <div className='flex items-center space-x-5 justify-center'>
//             <EnvelopeIcon className='text-[#e0afa0] h-7 w-7 animate-pulse' />
//             <p className='text-2xl'>shinde.ankita1603@gmail.com</p>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
//           <div className='flex space-x-2'>
//             <input
//               {...register('name', { required: true })}
//               className='contactInput'
//               type="text"
//               placeholder='Name'
//             />
//             <input
//               {...register('email', { required: true })}
//               className='contactInput'
//               type="email"
//               placeholder='Email'
//             />
//           </div>
//           {errors.name && <p className="text-red-500">Name is required</p>}
//           {errors.email && <p className="text-red-500">Email is required</p>}

//           <input
//             {...register('subject', { required: true })}
//             className='contactInput'
//             placeholder='Subject'
//           />
//           {errors.subject && <p className="text-red-500">Subject is required</p>}

//           <textarea
//             {...register('message', { required: false })}
//             className='contactInput'
//             placeholder='Message'
//           />
//           {errors.message && <p className="text-red-500">Message is required</p>}

//           <button type="submit" className='bg-[#e0afa0] py-5 px-10 rounded-md text-black font-bold'>
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ContactMe


import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=shinde.ankita1603@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi Ankita,\n\nMy name is ${formData.name}. ${formData.message}`)}`, '_blank');
    reset(); // Clear the form inputs
  };
    
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 md:top-24 uppercase tracking-[15px] md:tracking-[20px]
      text-[#e0afa0] text-lg md:text-2xl'>
        Contact Me
      </h3>

      <div className='flex flex-col space-y-2 md:space-y-10'>
        <h4 className='text-md md:text-4xl font-semibold text-center'>
          I have got just what you need.{" "}
          <span className='decoration-[#e0afa0]/50 underline'>Let's Talk</span>
        </h4>

        <div className='space-y-6 md:space-y-10'>
          <div className='flex items-center space-x-3 md:space-x-5 justify-center'>
            <PhoneIcon className='text-[#e0afa0] h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-md md:text-2xl'>+1 (438)-920 4170</p>
          </div>

          <div className='flex items-center space-x-3 md:space-x-5 justify-center'>
            <MapPinIcon className='text-[#e0afa0] h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-md md:text-2xl'>Montreal, Quebec (Willing to relocate)</p>
          </div>

          <div className='flex items-center space-x-3 md:space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#e0afa0] h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-md md:text-2xl'>shinde.ankita1603@gmail.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full md:w-fit  md:mx-auto'>
          <div className='flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0'>
            <input
              {...register('name', { required: true })}
              className='contactInput'
              type="text"
              placeholder='Name'
            />
            <input
              {...register('email', { required: true })}
              className='contactInput'
              type="email"
              placeholder='Email'
            />
          </div>
          {errors.name && <p className="text-red-500">Name is required</p>}
          {errors.email && <p className="text-red-500">Email is required</p>}

          <input
            {...register('subject', { required: true })}
            className='contactInput'
            placeholder='Subject'
          />
          {errors.subject && <p className="text-red-500">Subject is required</p>}

          <textarea
            {...register('message', { required: false })}
            className='contactInput'
            placeholder='Message'
          />
          {errors.message && <p className="text-red-500">Message is required</p>}

          <button type="submit" className='bg-[#e0afa0] py-3 md:py-5 px-8 md:px-10 rounded-md text-black font-bold'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
