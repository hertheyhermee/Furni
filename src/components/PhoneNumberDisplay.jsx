import React from 'react';

// Formatting function
function formatPhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return phoneNumber; // Return the original string if it's not 11 characters
  }
  return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7)}`;
}

const PhoneNumberDisplay = ({ phoneNumber }) => {
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

  return (
    <div>
      <p className='mb-0'>{formattedPhoneNumber}</p>
    </div>
  );
};

export default PhoneNumberDisplay;