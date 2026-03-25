// pages/api/revalidate.ts
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidated: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Validasi token
  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({
      revalidated: false,
      message: "Insert correct token",
    });
  }

  // Validasi parameter
  if (req.query.data !== "produk") {
    return res.status(400).json({
      revalidated: false,
      message: "Invalid query parameter. Expected 'data=produk'.",
    });
  }

  try {
    // On-Demand Revalidation
    await res.revalidate("/produk");

    return res.status(200).json({
      revalidated: true,
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return res.status(500).json({
      revalidated: false,
      message: "Error revalidating",
    });
  }
}