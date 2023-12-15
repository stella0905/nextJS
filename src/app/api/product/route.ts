import { getProducts } from "@/app/service/Products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const products = await getProducts();
  return NextResponse.json({ products });
}
