import React from 'react';

function AppHero(props) {
  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row'>
          <img
            src='https://placeimg.com/260/400/arch'
            className='max-w-sm rounded-lg shadow-2xl'
          />
          <div>
            <h1 className='text-5xl font-bold'>Emanuel Guevara</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div class='btn-group'>
              <button class='btn btn-active'>LinkedIn</button>
              <button class='btn'>GitHub</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHero;
