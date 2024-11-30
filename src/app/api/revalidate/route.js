import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req) {
  try {
    const body = await req.json();

    // Revalidiraj cijelu stranicu bloga
    revalidatePath("/blog");

    // Revalidiraj specifičnu stranicu pojedinačnog bloga na temelju sluga
    if (body.slug?.current) {
      revalidatePath(`/blog/${body.slug.current}`);
    }

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error("Error during revalidation:", err);
    return NextResponse.json({ revalidated: false }, { status: 500 });
  }
}
