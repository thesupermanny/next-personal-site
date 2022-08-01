import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

function AppContact(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nqbu8a9',
        'template_byzczo8',
        form.current,
        'EKGAvm7Ste6nU8pNo'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className='flex justify-center'>
        <h2 className='text-lg m-4'>
          Contact <span className='badge badge-md'>ME</span>
        </h2>
      </div>
      <div className='flex justify-center'>
        <div className='card  w-96 lg:w-1/2 bg-base-100 shadow-xl'>
          <div className='card-body '>
            <h2 className='card-title'>Send me a message!</h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              class='form-control w-full max-w-xs lg:max-w-full'
            >
              <label class='label'>
                <span class='label-text'>What is your name?</span>
              </label>
              <input
                type='text'
                name='fromName'
                placeholder='Name'
                class='input input-bordered w-full max-w-xs lg:max-w-full'
                required
              />
              <label class='label'>
                <span class='label-text'>What is your email?</span>
              </label>
              <input
                type='email'
                name='fromEmail'
                placeholder='Email'
                class='input input-bordered w-full max-w-xs lg:max-w-full'
                required
              />
              <label class='label'>
                <span class='label-text'>Your message</span>
              </label>
              <textarea
                name='message'
                class='textarea textarea-primary h-60'
                placeholder='Your awesome message...'
                required
              ></textarea>
              <div className='card-actions justify-end mt-4'>
                <input
                  className='btn btn-primary '
                  type='submit'
                  value='Send'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppContact;
