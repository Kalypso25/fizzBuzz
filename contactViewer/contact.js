"use strict";

const contacts = [
    "1|Scott|scott@murach.com|1-559-555-5555",
    "2|Joel|joel@murach.com|1-409-555-5555",
    "3|Mike|mike@murach.com|1-363-555-5555"
];

const menuString = "COMMAND MENU\n" +
    "list - List all contacts\n" +
    "get # - Get contact with the specified number\n" +
    "exit - Exit program";

// Keep accepting commands until user exits
while (true) {
    const command = prompt(menuString);

    // Exit if user clicks Cancel or types exit
    if (command === null || command === "exit") {
        break;

        // List all contacts
    } else if (command === "list") {
        let list = "";
        for (let contact of contacts) {
            const parts = contact.split("|");
            list += parts[0] + " - " + parts[1] + "\n";
        }
        alert(list);

        // Get specific contact by number
    } else if (command.startsWith("get")) {
        const num = command.split(" ")[1];
        let found = false;
        for (let contact of contacts) {
            const parts = contact.split("|");
            if (parts[0] === num) {
                alert("Number: " + parts[0] + "\n" +
                    "Name: " + parts[1] + "\n" +
                    "Email: " + parts[2] + "\n" +
                    "Phone: " + parts[3]);
                found = true;
                break;
            }
        }
        if (!found) {
            alert("Contact " + num + " not found.");
        }

        // Invalid command
    } else {
        alert("Invalid command. Please try again.");
    }
}