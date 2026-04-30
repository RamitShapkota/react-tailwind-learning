import React from 'react'
import StatsGrid from './StatsGrid'
import ChartSection from './ChartSection'
import TableSectaion from './TableSectaion'
import ActivityFeed from './ActivityFeed'

function Dashboard() {
  return (
    <div className='space-y-6'>
      {/* Stats Grid */}
      <StatsGrid />

      {/* chart section */}
      <ChartSection />

      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <div className='xl:col-span-2'>
          <TableSectaion />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
