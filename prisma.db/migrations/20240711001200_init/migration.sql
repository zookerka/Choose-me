/*
  Warnings:

  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "codeLanguages";

-- CreateTable
CREATE TABLE "dev" (
    "id" UUID NOT NULL,
    "authorId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "unProvedSkills" "Skills"[] DEFAULT ARRAY[]::"Skills"[],
    "provedSkills" "Skills"[] DEFAULT ARRAY[]::"Skills"[],
    "achievements" "Achievements"[] DEFAULT ARRAY[]::"Achievements"[],
    "enabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "dev_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devsIdCollection" (
    "devId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "dev_authorId_key" ON "dev"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "devsIdCollection_devId_key" ON "devsIdCollection"("devId");
