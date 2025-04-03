import React from 'react'
import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import StatusDisplay from './StatusDisplay'

const TicketCard = () => {
  return (
    <div className='flex flex-col card rounded-md shadow-lg p-3 m-2'>
        <div className='flex mb-3'>
            <PriorityDisplay />
            <div className='ml-auto'>
                <DeleteBlock />
            </div>
        </div>
        <h4>Ticket Title</h4>
        <h4 className='h-px border-0 bg-page mb-2'/>
        <p className='whitespace-pre-wrap'>Ticket description! please do this task</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
            <div className="flex flex-col">
                <p className='text-xs my-1'>04/03/25 6:00AM</p>
                <ProgressDisplay />
            </div>
        </div>
        <div className="ml-auto flex items-end">
            <StatusDisplay/>

        </div>
    </div>

  )
}

export default TicketCard
