"use client";
import React from 'react';
import { FC } from 'react';
import { HomeIcon, Pencil2Icon } from '@radix-ui/react-icons';
import { Switch } from "@/components/ui/switch";

interface AddressProps {
  address: string;
  notificationsEnabled: boolean;
  onToggleNotifications: () => void;
}

const Address: FC<AddressProps> = ({ address }) => {
    return (
      <div className="flex items-start p-4 border-b border-gray-200">
        <HomeIcon className="w-6 h-6 text-gray-500" />
        <div className="flex-1 ml-4">
          <div className="text-sm font-semibold">Home</div>
          <div className="text-sm text-gray-600">{address}</div>
          <div className="flex items-center mt-2">
            <div className="text-sm text-gray-500">pandagather Notifications</div>
            <Switch className="ml-2" />
          </div>
        </div>
        <button className="ml-4">
          <Pencil2Icon className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    );
  };

export default Address;