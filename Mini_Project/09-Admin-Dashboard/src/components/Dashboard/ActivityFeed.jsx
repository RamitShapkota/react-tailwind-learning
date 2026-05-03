import React from 'react'
import { AlertCircle, Clock, DollarSign, ShoppingCart, UserPlus } from "lucide-react";

const activities = [
    {
        id: 1,
        type: "order",
        icon: ShoppingCart,
        title: "New order received",
        description: "Order #12345 from John Doe",
        time: "5 minutes ago",
        bgColor: "bg-blue-100 dark:bg-blue-900/20",
        color: "text-blue-600 dark:text-blue-400",
    },
    {
        id: 2,
        type: "user",
        icon: UserPlus,
        title: "New user registered",
        description: "Sarah Jenkins joined the platform",
        time: "1 hour ago",
        bgColor: "bg-green-100 dark:bg-green-900/20",
        color: "text-green-600 dark:text-green-400",
    },
    {
        id: 3,
        type: "system",
        icon: AlertCircle,
        title: "System update",
        description: "Server maintenance completed successfully",
        time: "2 hours ago",
        bgColor: "bg-purple-100 dark:bg-purple-900/20",
        color: "text-purple-600 dark:text-purple-400",
    },
    {
        id: 4,
        type: "payout",
        icon: DollarSign,
        title: "Payout processed",
        description: "Monthly revenue sent to your bank",
        time: "5 hours ago",
        bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
        color: "text-yellow-600 dark:text-yellow-400",
    }
];

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
                    {activities.map((Activity) => {
                        return (
                            <div className='flex items-start space-x-4 p-3  rounded-xl hover:bg-slate-50  dark:hover:bg-slate-800/50 transition-colors'>
                                <div className={`p-2 rounded-lg  ${Activity.bgColor}`}>
                                    <Activity.icon  className={`w-4 h-4 ${Activity.color}`}/>
                                </div>
                                <div className='flex-1 min-w-0'>
                                    <h4 className='text-sm font-semibold text-slate-800 dark:text-white'>
                                        {Activity.title}
                                    </h4>
                                    <p className='text-sm text-slate-600 dark:text-slate-400 truncate'>
                                        {Activity.description}
                                    </p>
                                    <div className='flex items-center-safe space-x-1 mt-1'>
                                        <Clock className='w-3 h-3 text-slate-400' />
                                        <span className='text-xs text-slate-500 dark:text-slate-400'>
                                            {Activity.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


        </div>
    )
}

export default ActivityFeed
