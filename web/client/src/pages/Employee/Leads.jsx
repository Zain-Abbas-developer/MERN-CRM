import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiEdit2 } from 'react-icons/fi';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import DataTable from '../../components/tables/DataTable';
import { getInitials, formatDate, getStatusColor } from '../../utils/helpers';
import api from '../../lib/api.js';

const Leads = () => {
  const { user } = useAuth();
  const [allLeads, setAllLeads] = useState([]);
  const myLeads = allLeads;

  //api call here
  useEffect(() => {
    const eL = async () => {
      try {
        const response = await api.get('/employee/leads');
        setAllLeads(response.data.data || []);
      } catch (error) {
        toast.error('Failed to load the data!')
      }
    };
    eL();
  }, []);

  const handleStatusChange = async (leadId, newStatus) => {
  try {
    await api.put(`/employee/lead/${leadId}`, {
      status: newStatus,
    });

    toast.success("Task status updated!");

    // Local state update
    setAllLeads((prev) =>
      prev.map((lead) =>
        lead._id === leadId
          ? { ...lead, status: newStatus }
          : lead
      )
    );

  } catch (error) {
    toast.error("Failed to update lead!");
    console.log(error);
  }
};

  const columns = [
    {
      header: 'Lead', accessor: 'name',
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
            <span className="text-orange-400 text-xs font-semibold">{getInitials(row.name)}</span>
          </div>
          <div>
            <p className="text-sm font-medium text-white">{row.name}</p>
            <p className="text-xs text-gray-500">{row.company}</p>
          </div>
        </div>
      ),
    },
    { header: 'Email', accessor: 'email' },
    { header: 'Source', accessor: 'source', render: (row) => <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">{row.source}</span> },
    { header: 'Value', accessor: 'value', render: (row) => <span className="text-white font-medium">₨ {Number(row.value).toLocaleString()}</span> },
    {
      header: 'Status', accessor: 'status',
      render: (row) => (
        <select
          value={row.status}
          onChange={(e) => handleStatusChange(row._id, e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="text-xs bg-[#151515] border border-[#2a2a2a] text-gray-300 rounded px-2 py-1 focus:border-orange-500"
        >
          {['new', 'contacted', 'qualified', 'converted', 'lost'].map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      ),
    },
    { header: 'Date', accessor: 'createdAt', render: (row) => <span className="text-gray-400 text-sm">{formatDate(row.createdAt)}</span> },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='space-y-6'>
      <div>
        <h2 className="text-lg font-semibold text-white">My Leads</h2>
        <p className="text-sm text-gray-500">{myLeads.length} leads assigned to you</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {['new', 'contacted', 'qualified', 'converted', 'lost'].map((status) => (
          <div key={status} className="bg-[#1a1a1a]/80 backdrop-blur-xl border border-[#2a2a2a]/50 rounded-xl p-3 text-center hover:border-orange-500/20 duration-150">
            <p className="text-xl font-bold text-white">{myLeads.filter((l) => l.status === status).length}</p>
            <p className="text-xs text-gray-400 capitalize mt-1">{status}</p>
          </div>
        ))}
      </div>

      <DataTable columns={columns} data={myLeads} searchPlaceholder="Search leads..." />

    </motion.div>
  )
}

export default Leads
