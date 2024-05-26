"use server"
import { z } from "zod"
import { db } from "./prisma"

const ucapanSchema = z.object({
  nama: z.string().min(2),
  pesan: z.string().min(6),
})

export const addUcapan = async (prevState: any, formData: FormData) => {
  const dataUcapan = ucapanSchema.safeParse(Object.fromEntries(formData.entries()))
  if (!dataUcapan.success) {
    return {
      Error: dataUcapan.error.flatten().fieldErrors,
    }
  }

  try {
    await db.ucapan.create({
      data: {
        nama: dataUcapan.data.nama,
        pesan: dataUcapan.data.pesan,
      },
    })
  } catch (error) {
    return { message: "Failed to create ucapan" }
  }
}
