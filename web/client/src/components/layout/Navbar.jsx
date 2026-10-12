import React from 'react';
import { FiSearch, FiBell, FiMenu } from 'react-icons/fi';
import useAuth from '../../hooks/useAuth';
import { getInitials } from '../../utils/helpers';

const Navbar = ({ onToggleSidebar, title }) => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = React.useState('');
  
  return (
    <header className="h-16 bg-[#111111]/80 backdrop-blur-xl border-b border-[#2a2a2a] flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 text-gray-400 hover:text-white hover:bg-[#1a1a1a] rounded-lg transition-colors lg:hidden"
        >
          <FiMenu size={20} />
        </button>
        {title && (
          <h1 className="text-xl font-semibold text-white hidden sm:block">{title}</h1>
        )}
      </div>

      {/* Center - Search */}
      {/* <div className="hidden md:flex flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-dark-300 border border-dark-50 text-white placeholder-gray-500 rounded-lg pl-10 pr-4 py-2 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
          />
        </div>
      </div> */}

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-white hover:bg-[#1a1a1a] rounded-lg transition-colors">
          <FiBell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
        </button>

        {/* User Avatar */}
        <div className="flex items-center gap-3 pl-3 border-l border-[#2a2a2a]">
          <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
            <span className="text-orange-400 text-xs font-semibold">
              {getInitials(user?.name)}
            </span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-white">{user?.name}</p>
            <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
