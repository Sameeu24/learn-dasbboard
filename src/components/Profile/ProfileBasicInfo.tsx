import React from 'react';
import { User } from 'lucide-react';

interface ProfileBasicInfoProps {
  name: string;
  avatarUrl?: string;
}

export default function ProfileBasicInfo({ name, avatarUrl }: ProfileBasicInfoProps) {
  return (
    <div className="flex items-center gap-4">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
      ) : (
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <User className="w-6 h-6 text-gray-600" />
        </div>
      )}
      <div>
        <h2 className="text-base font-medium">{name}</h2>
        <button className="text-sm text-blue-600 hover:underline">
          View Public Profile
        </button>
      </div>
    </div>
  );
}