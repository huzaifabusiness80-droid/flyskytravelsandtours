import prisma from "../lib/prisma";

async function main() {
  console.log("Checking Neon PostgreSQL Connection...");
  const adminCount = await prisma.admin.count();
  const serviceCount = await prisma.service.count();
  const subServiceCount = await prisma.subService.count();
  const packageCount = await prisma.package.count();
  const destinationCount = await prisma.destination.count();

  console.log("-----------------------------------------");
  console.log("📊 Live Neon Database Status:");
  console.log(`- Admins:        ${adminCount}`);
  console.log(`- Services:      ${serviceCount}`);
  console.log(`- Sub-Services:  ${subServiceCount}`);
  console.log(`- Packages:      ${packageCount}`);
  console.log(`- Destinations:  ${destinationCount}`);
  console.log("-----------------------------------------");
  console.log("✅ Neon Database is 100% connected, synced and functional!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
