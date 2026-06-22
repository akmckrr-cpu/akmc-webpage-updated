import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, company, city, items, message } = body;

    if (!name || !phone || !city || !items || items.length === 0) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = createAdminClient();

    const { error } = await supabase.from("quote_requests").insert({
      name,
      phone,
      email: email || null,
      company: company || null,
      city,
      items,
      message: message || null,
      status: "pending",
    });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: "Failed to save quote" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
