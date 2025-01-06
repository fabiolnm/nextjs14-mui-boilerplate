import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  console.info('Hello World')
}

async function main() {
  try {
    await seed()
  } catch (e) {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
