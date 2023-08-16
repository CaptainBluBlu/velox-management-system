const { PrismaClient, PremiseType } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
	const clkb = await prisma.customer.create({
		data: {
			companyName: 'CLKB',
			email: 'clkb@gmail.com',
			phone: ' 017 - 777 7792',
			fax: '07 - 434 5599',
			premiseType: PremiseType.COMMERCIAL,
			personInCharge: 'Mr. Tan',
			personInChargePhone: '012 - 777 7792',
		},
	});

	const jingyi = await prisma.customer.create({
		data: {
			companyName: 'JING YI GOLD SDN BHD',
			email: 'jingyi@gmail.com',
			phone: '012 - 289 3376',
			fax: '07 - 434 5599',
			premiseType: PremiseType.RESIDENTIAL,
			personInCharge: 'LIAW TSUEY YIT',
			personInChargePhone: '012 - 289 3376',
		},
	});

	console.log({ clkb, jingyi });

	const dealer1 = await prisma.dealer.createMany({
		data: [
			{
				dealerName: 'Velox',
				dealerPhone: null,
			},
			{
				dealerName: 'Darren Chong (Satelite City)',
				dealerPhone: '013 - 625 4006',
			},
		],
	});

	console.log({ dealer1 });
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
