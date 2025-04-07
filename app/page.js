import React from "react";
import TicketCard from "./(components)/TicketCard";
import { headers } from "next/headers";
import Link from "next/link";


const getTickets = async () => {
  try {
    const headersList = headers();
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
    const host = headersList.get('host');
    const baseUrl = `${protocol}://${host}`;

    const res = await fetch(`${baseUrl}/api/tickets`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch tickets');
    }

    return await res.json();
  } catch (error) {
    console.error('Error loading tickets:', error);
    return { tickets: [] };
  }
};

const Dashboard = async() => {
  const data = await getTickets();

  if (!data?.tickets) {
    return <p>No tickets.</p>;
  }
  const tickets = data.tickets;

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <>
      <h1>Dashboard</h1>
      <div className="p-5">
        <div>
          {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets.filter((ticket) => ticket.category === uniqueCategory).map((filterTicket, _index) =>
                  
                    <TicketCard id={_index} key={_index} ticket={filterTicket} />
                
                )}
              </div>
              </div>
          ))}
        </div>
      </div>
    </>

  );
}


export default Dashboard;