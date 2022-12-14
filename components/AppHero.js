import React from 'react';

import Link from 'next/link';

function AppHero(props) {
  return (
    <div>
      <div id='about' className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row mt-16 lg:mt-0'>
          <img
            src='/images/profile2640.png'
            className='max-w-sm rounded-lg shadow-2xl '
          />
          <div>
            <h1 className='text-5xl font-bold'>Emanuel Guevara</h1>
            <p className='py-6'>
              Hello my name is Emanuel Guevara. I am a software engineer who is
              looking forward to explore full stack roles. I would like to be
              part of a team that provides mentorship, and help build
              applications that make a difference in peoples lives.{' '}
            </p>
            <div className='btn-group'>
              <a
                className='btn btn-active'
                href='https://www.linkedin.com/in/emanuelguevara'
                target='_blank'
              >
                LinkedIn
              </a>
              <a
                className='btn'
                href='https://www.github.com/thesupermanny'
                target='_blank'
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHero;
