"use client";
import React from 'react';
import { Calendar, Clock, Video, MapPin, Users } from 'lucide-react';
import { ReusableTable } from '@/components/dashboard/reusuable-table';

// Mock data based on the Figma design
const interviewsData = [
  {
    id: 1,
    candidateName: "Harvin Tanolia",
    candidateAvatar: "/_static/40x40.svg",
    candidateEmail: "harvin@example.com",
    jobPosting: "Product Manager",
    interviewType: "Technical Interview",
    interviewers: [
      { name: "John Doe", avatar: "/_static/40x40.svg" },
      { name: "Jane Smith", avatar: "/_static/40x40.svg" },
      { name: "Mike Johnson", avatar: "/_static/40x40.svg" }
    ],
    date: "12 June, 2025",
    time: "14:30 (30min)",
    meetingType: "Phone Interview",
    meetingLink: "Link",
    status: "Upcoming"
  },
  {
    id: 2,
    candidateName: "May Park",
    candidateAvatar: "/_static/40x40.svg",
    candidateEmail: "may@example.com",
    jobPosting: "Data Analyst",
    interviewType: "Technical Interview",
    interviewers: [
      { name: "Sarah Wilson", avatar: "/_static/40x40.svg" },
      { name: "Tom Brown", avatar: "/_static/40x40.svg" }
    ],
    date: "12 June, 2025",
    time: "15:00 (45min)",
    meetingType: "Phone Interview",
    meetingLink: "Link",
    status: "Upcoming"
  },
  {
    id: 3,
    candidateName: "Lara Rose",
    candidateAvatar: "/_static/40x40.svg",
    candidateEmail: "lara@example.com",
    jobPosting: "Database Administrator",
    interviewType: "Technical Interview",
    interviewers: [
      { name: "Alex Chen", avatar: "/_static/40x40.svg" },
      { name: "Lisa Wang", avatar: "/_static/40x40.svg" }
    ],
    date: "12 June, 2025",
    time: "16:00 (30min)",
    meetingType: "Phone Interview",
    meetingLink: "Link",
    status: "Upcoming"
  },
  {
    id: 4,
    candidateName: "Albert Flores",
    candidateAvatar: "/_static/40x40.svg",
    candidateEmail: "albert@example.com",
    jobPosting: "Business Intelligence Developer",
    interviewType: "Technical Interview",
    interviewers: [
      { name: "David Miller", avatar: "/_static/40x40.svg" },
      { name: "Emma Davis", avatar: "/_static/40x40.svg" }
    ],
    date: "13 June, 2025",
    time: "09:30 (45min)",
    meetingType: "Phone Interview",
    meetingLink: "Link",
    status: "Upcoming"
  },
  {
    id: 5,
    candidateName: "Kathryn Murphy",
    candidateAvatar: "/_static/40x40.svg",
    candidateEmail: "kathryn@example.com",
    jobPosting: "DevOps Engineer",
    interviewType: "Technical Interview",
    interviewers: [
      { name: "Chris Taylor", avatar: "/_static/40x40.svg" },
      { name: "Amy Johnson", avatar: "/_static/40x40.svg" }
    ],
    date: "13 June, 2025",
    time: "11:00 (60min)",
    meetingType: "Phone Interview",
    meetingLink: "Link",
    status: "Upcoming"
  }
];

// Simple ReusableTable component (simplified version for demo)

export default function InterviewsTable() {
  const handleRowClick = (interview) => {
    console.log('Interview clicked:', interview);
    // router.push(`/admin/interviews/${interview.id}`);
  };

  const columns = [
    {
      key: "candidateName",
      header: "Candidate",
      render: (value, row) => (
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 flex-shrink-0">
            <img 
              className="h-10 w-10 rounded-full object-cover" 
              src={row.candidateAvatar} 
              alt={value}
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(value)}&background=6366f1&color=ffffff`;
              }}
            />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">{value}</div>
            <div className="text-sm text-gray-500">{row.candidateEmail}</div>
          </div>
        </div>
      )
    },
    {
      key: "jobPosting",
      header: "Job Posting",
      render: (value) => (
        <div className="text-sm text-gray-900">{value}</div>
      )
    },
    {
      key: "interviewType",
      header: "Interview Type",
      render: (value) => (
        <div className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
          <Clock className="mr-1 h-3 w-3" />
          {value}
        </div>
      )
    },
    {
      key: "interviewers",
      header: "Interviewers",
      render: (interviewers) => (
        <div className="flex -space-x-2 overflow-hidden">
          {interviewers.slice(0, 3).map((interviewer, index) => (
            <img
              key={index}
              className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white"
              src={interviewer.avatar}
              alt={interviewer.name}
              title={interviewer.name}
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(interviewer.name)}&background=6366f1&color=ffffff&size=32`;
              }}
            />
          ))}
          {interviewers.length > 3 && (
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-500 ring-2 ring-white">
              +{interviewers.length - 3}
            </div>
          )}
        </div>
      )
    },
    {
      key: "date",
      header: "Date",
      render: (value, row) => (
        <div className="text-sm text-gray-900">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-gray-400" />
            <div>
              <div>{value}</div>
              <div className="text-xs text-gray-500">{row.time}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "meetingType",
      header: "Meeting Type",
      render: (value) => (
        <div className="inline-flex items-center text-sm text-gray-700">
          {value === "Phone Interview" ? (
            <Video className="mr-2 h-4 w-4 text-gray-400" />
          ) : (
            <MapPin className="mr-2 h-4 w-4 text-gray-400" />
          )}
          {value}
        </div>
      )
    },
    {
      key: "meetingLink",
      header: "Meeting Link or Location",
      render: (value) => (
        <div className="cursor-pointer text-sm text-blue-600 underline hover:text-blue-800">
          {value}
        </div>
      )
    },
    {
      key: "status",
      header: "Status",
      render: (value) => (
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium${
          value === 'Upcoming' 
            ? 'bg-green-100 text-green-800' 
            : value === 'Completed'
            ? 'bg-gray-100 text-gray-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          <div className={`mr-1.5 h-2 w-2 rounded-full${
            value === 'Upcoming' 
              ? 'bg-green-400' 
              : value === 'Completed'
              ? 'bg-gray-400'
              : 'bg-yellow-400'
          }`} />
          {value}
        </span>
      )
    }
  ];

  return (
    <div className="space-y-4">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-gray-400" />
            <span className="text-lg font-semibold text-gray-900">Interviews</span>
          </div>
          <span className="text-sm text-gray-500">({interviewsData.length} total)</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Calendar className="mr-2 h-4 w-4" />
            Select Date Range
          </button>
          <button className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Schedule New Interview
          </button>
        </div>
      </div>

      {/* Table */}
      <ReusableTable
        data={interviewsData}
        columns={columns}
        onRowClick={handleRowClick}
      />
    </div>
  );
}


/*

import LogOut from '@/components/dashboard/logout';
import ApiWrapper from '@/features/api/api-wrapper';
import withCandidate from '@/hoc/withCandidate';


export interface JobPosting {
  id: number;
  clientName: string;
  deadline: string; // Format: 'YYYY-MM-DD' (can be Date if parsed)
  description: string;
  employmentType: string;
  jobTitle: string;
  jobType: string;
  location: string;
  position: string;
  salary: number;
}

const ApiDemo = () => {
  return (
    <>
      <h2>Manual Fetch (via fetch API)</h2>
      <ApiWrapper<JobPosting[]>
        fallback={<p>Fetching from backend via ApiWrapper...</p>}
        route="/jobs/all-jobs"
      >
        {({ data }) => {
          console.log('ApiWrapper JOBS => ', data);
          return (
            <ul>
              {data?.map((job, index) => (
                <li key={index}>JOb TIELE : {job.jobTitle}</li>
              ))}
            </ul>
          );
        }}
      </ApiWrapper>
      <LogOut />
    </>
  );
};

export default withCandidate(ApiDemo);
*/
