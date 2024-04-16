import { createWriteStream } from "fs";
import { generate } from "gerador-validador-cpf";
import { randomUUID } from "crypto";

// const NUMBER_LINE = 2e6;
const NUMBER_LINE = 100000;
async function execute() {
  const file = createWriteStream(`${randomUUID()}.csv`);
  file.write("cpf;detalhes" + "\n");
  for (let i = 0; i < NUMBER_LINE; i++) {
    const details = `Teste ${i + 1}`;
    const cpf = generate();
    file.write(`${cpf};${details}` + "\n");
    console.log(`Line ${i + 1} processed`);
  }
}

execute();
