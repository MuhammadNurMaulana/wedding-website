import { db } from "./prisma"

export const getUcapan = async () => {
  try {
    const ucapan = await db.ucapan.findMany()
    return ucapan
  } catch (error) {
    throw new Error("Failed fetch ucapan data")
  }
}
