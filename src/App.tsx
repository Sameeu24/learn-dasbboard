import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import SearchBar from './components/SearchBar';
import ProfileHeader from './components/ProfileHeader';
import ProfileInfo from './components/ProfileInfo';
import AttendanceGrid from './components/AttendanceGrid';
import CompleteTasks from './components/CompleteTasks';
import Leaderboard from './components/Leaderboard';

export default function App() {
  const attendanceData = Array(48)
    .fill(0)
    .map(() => Math.random() > 0.3);

  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar />
      
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-medium">Profile</h1>
            <SearchBar />
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
              <ProfileHeader
                name="Edwin Emmanuel Roy"
                stats={{
                  karmaPoints: 24.56,
                  avgKarma: 2.59,
                  ranking: 14458,
                }}
              />
              <hr className="border-gray-100" />
              <ProfileInfo
                institution="College of Engineering Trivandrum"
                careerPath="UI/UX Designer"
                interests={['UI Design', 'UI/UX', 'Graphic Design', 'Photoshop', 'Figma', 'Design Thinking']}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                <AttendanceGrid
                  attendance={attendanceData}
                  percentage={48}
                  totalSessions={124}
                />
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                  <CompleteTasks />
                </div>
                <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                  <Leaderboard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}