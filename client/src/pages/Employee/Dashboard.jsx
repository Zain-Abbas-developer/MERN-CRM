import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineClipboardList, HiOutlineTrendingUp, HiOutlineCheckCircle } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { formatDate, getStatusColor, getPriorityColor } from '../../utils/helpers';
import api from '../../lib/api.js'

//container & item for animation
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const Dashboard = () => {
  const { user } = useAuth();
  const [allTasks, setAllTasks] = useState([]);
  const [allLeads, setAllLeads] = useState([]);
  const myTasks = allTasks;
  const myLeads = allLeads;

  //api call here
  useEffect(() => {
    const eD = async () => {
      try {
        const response = await api.get('/employee/dashboard');
        setAllTasks(response.data.data.tasks || []);
        setAllLeads(response.data.data.leads || []);
      } catch (error) {
        console.error("Failed to fetch dahsboard data: ", error)
      }
    };
    eD();
  },[])

  const stats = [
    { label: 'My Tasks', value: myTasks.length, icon: HiOutlineClipboardList, color: 'primary', link: '/employee/tasks' },
    { label: 'Completed', value: myTasks.filter((t) => t.status === 'completed').length, icon: HiOutlineCheckCircle, color: 'emerald' },
    { label: 'My Leads', value: myLeads.length, icon: HiOutlineTrendingUp, color: 'blue', link: '/employee/leads' },
    { label: 'Converted', value: myLeads.filter((l) => l.status === 'converted').length, icon: HiOutlineTrendingUp, color: 'amber' },
  ];

  const colorMap = {
    primary: { bg: 'bg-orange-500/10', text: 'text-orange-500' },
    emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-500' },
    blue: { bg: 'bg-blue-500/10', text: 'text-blue-500' },
    amber: { bg: 'bg-amber-500/10', text: 'text-amber-500' },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className='space-y-6'>
      <motion.div variants={item} className="bg-[#1a1a1a]/80 backdrop-blur-xl border border-[#2a2a2a]/50 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Welcome, {user?.name?.split(' ')[0]}!</h2>
        <p className="text-sm text-gray-400 mt-1">Here's your work summary for today.</p>
      </motion.div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <motion.div key={idx} variants={item}>
            <div className="bg-[#1a1a1a]/80 backdrop-blur-xl border border-[#2a2a2a]/50 rounded-xl p-5 flex flex-col gap-2">
              <div className={`p-2.5 rounded-lg ${colorMap[stat.color].bg} w-fit`}>
                <stat.icon size={20} className={colorMap[stat.color].text} />
              </div>
              <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Tasks */}
        <motion.div variants={item} className="bg-[#1a1a1a]/80 backdrop-blur-xl border border-[#2a2a2a]/50 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-white">My Tasks</h3>
            <Link to="/employee/tasks" className="text-orange-500 text-sm flex items-center gap-1 hover:text-orange-400">
              View All <FiArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-3">
            {myTasks.slice(0, 5).map((task) => (
              <div key={task._id} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a]/50 transition-colors">
                <div className="flex-1 min-w-0 mr-3">
                  <p className="text-sm font-medium text-white truncate">{task.title}</p>
                  <p className="text-xs text-gray-500">Due: {formatDate(task.dueDate)}</p>
                </div>
                <span className={getStatusColor(task.status)}>{task.status.replace('_', ' ')}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Leads */}
        <motion.div variants={item} className="bg-[#1a1a1a]/80 backdrop-blur-xl border border-[#2a2a2a]/50 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-white">My Leads</h3>
            <Link to="/employee/leads" className="text-orange-500 text-sm flex items-center gap-1 hover:text-orange-400">
              View All <FiArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-3">
            {myLeads.slice(0, 5).map((lead) => (
              <div key={lead._id} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a]/50 transition-colors">
                <div className="flex-1 min-w-0 mr-3">
                  <p className="text-sm font-medium text-white truncate">{lead.name}</p>
                  <p className="text-xs text-gray-500">{lead.company}</p>
                </div>
                <span className={getStatusColor(lead.status)}>{lead.status}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Dashboard
