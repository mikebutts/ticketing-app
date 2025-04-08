import Ticket from "../../../(models)/Ticket";
import { NextResponse } from "next/server";
import connectDB from "../../../(lib)/mongodb";

export async function GET(req, context) {
    const { id } = await context.params; // Await params before destructuring
  
    await connectDB();
    const foundTicket = await Ticket.findOne({ _id: id });
  
    return NextResponse.json({ foundTicket }, { status: 200 });
  }
  
  export async function PUT(req, context) {
    try {
      const { id } = await context.params; // Await params before destructuring
  
      const body = await req.json();
      const ticketData = body.formData;
        console.log(body)
        console.log(ticketData)
      await connectDB();
    
      const updatedTicket = await Ticket.findByIdAndUpdate(id, body, { new: true });

  
      return NextResponse.json({ message: "Ticket updated", updatedTicket }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error updating ticket", error: error.message }, { status: 500 });
    }
  }
  
  export async function DELETE(req, context) {
    try {
      const { id } = await context.params; // Await params before destructuring
  
      await connectDB();
      await Ticket.findByIdAndDelete(id);
  
      return NextResponse.json({ message: "Ticket deleted" }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error deleting ticket", error: error.message }, { status: 500 });
    }
  }
  