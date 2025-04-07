import EditTicketForm from '@/app/(components)/TicketForm'
import React from 'react'

const TicketPage = ({params}) => {
  return (
    <div>
      <h1>TicketPage {params.id}</h1>
      <EditTicketForm/>
    </div>
  )
}

export default TicketPage
