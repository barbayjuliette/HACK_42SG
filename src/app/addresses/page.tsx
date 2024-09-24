"use client";
import React, { useState } from 'react';
import Address from '@/components/address';
import CloseButton from '@/components/close-button';

export default function Addresses() {
  const [addresses, setAddresses] = useState([
    { id: 1, address: '8 Somapah Rd, Singapore 487372', notificationsEnabled: false },
    { id: 2, address: '8 Somapah Rd, Singapore 487372', notificationsEnabled: true },
    { id: 3, address: '8 Somapah Rd, Singapore 487372', notificationsEnabled: false },
  ]);

  const toggleNotification = (id: number) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((address) =>
        address.id === id
          ? { ...address, notificationsEnabled: !address.notificationsEnabled }
          : address
      )
    );
  };

  return (
    <div className="flex flex-col w-screen bg-panda_bg">
      <div className="flex items-center p-4 bg-pink-500">
        <div className="flex-shrink-0">
            <CloseButton />
        </div>
      <p className="ml-12 text-white text-lg font-semibold">Addresses</p>
    </div>
      <div className="flex flex-col gap-4 px-8">
        {addresses.map((address) => (
          <Address
            key={address.id}
            address={address.address}
            notificationsEnabled={address.notificationsEnabled}
            onToggleNotifications={() => toggleNotification(address.id)}
          />
        ))}
      </div>
    </div>
  );
}