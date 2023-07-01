import React from 'react';

const AccountPicture = ({ imageUrl }) => {
  return (
    <img
      src={imageUrl}
      alt="Account"
      className="h-8 w-8 rounded-full mr-2 cursor-pointer"
    />
  );
};

export default AccountPicture;
