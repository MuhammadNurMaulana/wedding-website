-- CreateTable
CREATE TABLE "Ucapan" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "pesan" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ucapan_pkey" PRIMARY KEY ("id")
);
