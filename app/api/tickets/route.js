// app/api/tickets/route.js
import { NextResponse } from "next/server";
import connectDB from "../../(lib)/mongodb";
import Ticket from "../../(models)/Ticket";

// GET /api/tickets
export async function GET() {
  await connectDB();

  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error fetching tickets", error: err }, { status: 500 });
  }
}

// POST /api/tickets
export async function POST(req) {
  await connectDB();

  try {
    const body = await req.json();
    const newTicket = await Ticket.create(body);

    return NextResponse.json({ message: "Ticket created", ticket: newTicket }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error creating ticket", error: err }, { status: 500 });
  }
}
