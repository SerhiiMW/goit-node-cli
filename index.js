import * as contactsService from "./contacts.js";
import { program } from "commander";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      return console.log(allContacts);
      break;

    case "get":
      const oneContacts = await contactsService.getContactById(id);
      return console.log(oneContacts);
      break;

    case "add":
      const newContacts = await contactsService.addContact(name, email, phone);
      return console.log(newContacts);
      break;

    case "remove":
      const deleteContacts = await contactsService.removeContact(id);
      return console.log(deleteContacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);

