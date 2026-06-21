import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  console.log("New lead:", data);
  // TODO: wire to email / Firestore / CRM
  return NextResponse.json({ ok: true });
}
