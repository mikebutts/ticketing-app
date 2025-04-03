import TicketCard from "./(components)/TicketCard";


export default function Home() {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="p-5">
        <div className="lg:grid grid-cols-2 xl:grid-cols-4">
          <TicketCard />
          <TicketCard />
          <TicketCard />
        </div>
      </div>
    </>

  );
}
