-- CreateEnum
CREATE TYPE "roleType" AS ENUM ('user', 'admin', 'guest', 'agent');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "rol" "roleType" NOT NULL DEFAULT 'user';
