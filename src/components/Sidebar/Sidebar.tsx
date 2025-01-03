import React from 'react';
import { Users, MessageCircle, Trophy, Briefcase, Bell, Settings } from 'lucide-react';
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen p-4 flex flex-col border-r border-gray-100">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary-500 ml-4">μLearn</h1>
      </div>
      
      <nav className="space-y-1">
        <SidebarItem icon={Users} label="Profile" active />
        <SidebarItem icon={Users} label="Interest Groups" />
        <SidebarItem icon={MessageCircle} label="Learning Circles" />
        <SidebarItem icon={Trophy} label="Leaderboard" />
        <SidebarItem icon={Briefcase} label="Opportunities" />
        <SidebarItem icon={Bell} label="Notifications" />
        <SidebarItem icon={Settings} label="Settings" />
      </nav>
    </div>
  );
}