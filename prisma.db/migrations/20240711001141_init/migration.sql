-- CreateEnum
CREATE TYPE "Skills" AS ENUM ('noSkills', 'python', 'java', 'go', 'kotlin', 'cpp', 'javascript', 'typescript');

-- CreateEnum
CREATE TYPE "Achievements" AS ENUM ('noAchievements', 'apple', 'microsoft', 'senior', 'middle', 'teamlead', 'amazon');

-- CreateEnum
CREATE TYPE "codeLanguages" AS ENUM ('noCodeLanguages', 'python', 'java', 'go', 'kotlin', 'cpp', 'javascript', 'typescript');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "hashedRt" TEXT,
    "likedPosts" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "feedPosts" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "userId" UUID NOT NULL,
    "unProvedSkills" "Skills"[],
    "provedSkills" "Skills"[],
    "achievements" "Achievements"[],
    "education" TEXT NOT NULL,
    "codeLanguages" "codeLanguages"[],

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
