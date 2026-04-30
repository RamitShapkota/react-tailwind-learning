import React from 'react'
import { Clock } from "lucide-react";

function ActivityFeed() {
    return (
        <div className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50'>
            <div className='p-6 border-b border-slate-20/50 dark:border-slate-700/50'>
                <div className='flex items-center justify-between'>
                    <div className='flex-1'>
                        <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                            Activity Feed
                        </h3>
                        <p className='text-sm text-slate-500 dark:text-slate-400'>
                            Recent System Activities
                        </p>
                    </div>
                    <button className='text-blue-500 hover:text-blue-700 text-sm font-medium'>View All</button>
                </div>
            </div>

            <div className='p-6'>
                <div className='space-y-4'>
                    <div className='flex items-start space-x-4 p-3  rounded-xl hover:bg-slate-50  dark:hover:bg-slate-800/50 transition-colors'>
                    <div className={`p-2 rounded-lg`}>icon</div>
                    <div className='flex-1 min-w-0'>
                        <h4 className='text-sm font-semibold text-slate-800 dark:text-white'>
                            Activity Time
                        </h4>
                        <p className='text-wm text-slate-600 dark:text-slate-400 truncate'>
                            Activity Description
                        </p>
                        <div className='flex items-center-safe space-x-1 mt-1'>
                            <Clock className='w-3 h-3 text-slate-400' />
                            <span className='text-xs text-slate-500 dark:text-slate-400'>
                                Activity Time
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ActivityFeed
