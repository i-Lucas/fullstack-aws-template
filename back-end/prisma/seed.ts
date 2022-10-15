import prisma from "../src/config/db.js";

async function main() {

	// data array here

};

main().catch((e) => {

	console.log(e);
	process.exit(1);

}).finally(async () => await prisma.$disconnect());