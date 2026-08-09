import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiFlag } from 'react-icons/fi';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { formatDate, getStatusColor, getPriorityColor } from '../../utils/helpers';
import api from '../../lib/api.js';


const Tasks = () => {
  const { user } = useAuth();
  const [allTasks, setAllTasks] = useState([]);
  const myTasks = allTasks;

  //api call here
  useEffect(() => {
    const eT = async () => {
      try {
        const response = await api.get('/employee/tasks');
        setAllTasks(response.data.data || []);
      } catch (error) {
        toast.error('Failed to load data!')
      }
    };
    eT();
  },[]);

  const handleStatusChange = async (taskId, newStatus) => {
  try {
    await api.put(`/employee/task/${taskId}`, {
      status: newStatus,
    });

    toast.success("Task status updated!");

    // Local state update
    setAllTasks((prev) =>
      prev.map((task) =>
        task._id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    );

  } catch (error) {
    toast.error("Failed to update task");
    console.log(error);
  }
};

  const statusGroups = [
    { label: 'To Do', status: 'to do', color: 'border-amber-500' },
    { label: 'In Progress', status: 'in_progress', color: 'border-blue-500' },
    { label: 'Completed', status: 'completed', color: 'border-emerald-500' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='space-y-6'>
      <div>
        <h2 className="text-lg font-semibold text-white">My Tasks</h2>
        <p className="text-sm text-gray-500">{myTasks.length} tasks assigned to you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statusGroups.map((group) => {
          const groupTasks = myTasks.filter((t) => t.status === group.status);
          return (
            <div key={group.status} className={`bg-[#1a1a1a]/80 backdrop-blur-xl border border-[#2a2a2a]/50 rounded-xl p-4 border-t-2 ${group.color}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white">{group.label}</h3>
                <span className="text-xs text-gray-500 bg-[#1a1a1a] px-2 py-0.5 rounded-full">{groupTasks.length}</span>
              </div>
              <div className="space-y-3">
                {groupTasks.length > 0 ? groupTasks.map((task) => (
                  <motion.div key={task._id} layout className="bg-[#151515] border border-[#2a2a2a] rounded-lg p-4 hover:border-orange-500/20 transition-all">
                    <h4 className="text-sm font-medium text-white mb-1">{task.title}</h4>
                    <p className="text-xs text-gray-500 mb-3 line-clamp-2">{task.description}</p>
                    {task.customerName && <p className="text-xs text-orange-400 mb-2">Customer: {task.customerName}</p>}
                    <div className="flex items-center justify-between">
                      <span className={getPriorityColor(task.priority)}><FiFlag size={10} className="inline mr-1" />{task.priority}</span>
                      <span className="text-[10px] text-gray-500 flex items-center gap-1"><FiCalendar size={10} />{formatDate(task.dueDate)}</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-[#2a2a2a]">
                      <select value={task.status} onChange={(e) => handleStatusChange(task._id, e.target.value)} className="w-full text-xs bg-[#111111] border border-[#2a2a2a] text-gray-300 rounded px-2 py-1.5 focus:border-orange-500 transition-colors">
                        <option value="to do">To Do</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                  </motion.div>
                )) : (
                  <p className="text-xs text-gray-500 text-center py-6">No tasks</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  )
}

export default Tasks
