import { BIN, VERSION } from "fetch-yadb-server";

console.log(VERSION);
fetch(BIN)
    .then((res) => res.arrayBuffer())
    .then(console.log);
