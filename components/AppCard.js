import React from 'react';

function AppCard({ img, alt, title, desc, site }) {
  return (
    <div className='card card-compact w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src={img} alt={alt} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{desc}</p>
        <div className='card-actions justify-end'>
          <a href={site} target='_blank' className='btn btn-primary'>
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}

export default AppCard;
