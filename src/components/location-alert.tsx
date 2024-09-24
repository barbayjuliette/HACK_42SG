import React, { useState } from 'react';
import { SewingPinIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const LocationAlert = () => {
  const [show, setShow] = useState(true);

  const handleContinue = () => {
    setShow(false);
    // Perform actions when the user clicks "Yes"
    console.log('Continuing...');
  };

  const handleCancel = () => {
    setShow(false);
    // Perform actions when the user clicks "No"
    console.log('Canceling...');
  };

  return (
    show && (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded shadow-lg z-50">
        <div className="flex justify-center mb-2">
          <SewingPinIcon />
        </div>
        <div className="text-center mb-5">
          We have detected that you are not in the delivery area.
          <br />
          Continue ordering?
        </div>
        <div className="flex justify-center">
            <Link href="/order/selection">
                <button onClick={handleContinue} className="bg-panda text-white px-4 py-2 rounded mr-2">
                  Yes
                </button>
            </Link>
          <button onClick={handleCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">
            No
          </button>
        </div>
      </div>
    )
  );
};

export default LocationAlert;