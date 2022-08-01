import React from 'react';

function AppPosts(props) {
  return (
    <div class='flex flex-col w-full lg:flex-row'>
      <div class='grid flex-grow h-32 card bg-base-300 rounded-box place-items-center'>
        content
      </div>
      <div class='divider lg:divider-horizontal'>OR</div>
      <div class='grid flex-grow h-32 card bg-base-300 rounded-box place-items-center'>
        content
      </div>
    </div>
  );
}

export default AppPosts;
