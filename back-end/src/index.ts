import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

app.listen(process.env.PORT, () => {

    (function () {

        const MODE = process.env.NODE_ENV;
        const PORT = process.env.PORT;
        const DB = process.env.POSTGRES_DB;
        const DB_PORT = process.env.POSTGRES_PORT;
        const DB_HOST = process.env.POSTGRES_HOST;

        const print = `\nApp Mode: ${MODE}\nDatabase: ${DB}\nDB Port: ${DB_PORT}\nDB Host: ${DB_HOST}\n`;
        console.log(print + "\n" + `Server is running on port ${PORT}`);
    })()
});