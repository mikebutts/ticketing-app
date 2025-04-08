import EditTicketForm from '../../(components)/TicketForm'

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    
    return res.json();
  } catch (error) {
    console.log(error);
  }
};


const TicketPage = async ({ params }) => {
  const {id} = await params;
  const EDITMODE = id === "new" ? false : true;

  let updateTicketData = {}

  if (EDITMODE) {
    
    updateTicketData = await getTicketById(id);

    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditTicketForm ticket={updateTicketData} />;
};

export default TicketPage;