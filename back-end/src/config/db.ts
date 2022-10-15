import pkg from "@prisma/client";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();
export default prisma;

(async function (database, locale) {

    const now = `${new Date().toLocaleDateString(locale)} : ${new Date().toLocaleTimeString(locale)}`;
    const failure = (err: string) => console.error(`\n\nError connecting to Database:\n${err}\nDate: ${now}\n`);
    const sucess = () => console.log(`Connected to Database ${database} ${now}`);

    await prisma.$connect().then(sucess).catch(err => (failure(err)));

})(process.env.POSTGRES_DB, process.env.LOCALE);