import { BIN, VERSION } from "fetch-yadb-server";
import fs from "fs/promises";

console.log(VERSION);
fs.readFile(BIN).then(console.log);
