import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

export default function SidebarItem({ icon: Icon, label, active }: SidebarItemProps) {
  return (
    <button 
      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium
        ${active ? 'bg-primary-50 text-primary-500' : 'text-gray-600 hover:bg-gray-50'}`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
}