
class AddressBook {

    constructor() {
        this.name;
        this.phone;
        this.email;
        this.relation;
    }
    add(info) {
        this.contacts.push([

            this.name=name,
            this.email=email,
            this.phone=phone,
            this.relation=relation
     ]);
     }

    
    deleteAt() {

    }
    print() {
        document.write(contact);
    }
}
class Contact {
    constructor() {
        this.name = "Frank";
        this.phone = "706-245-1345";
        this.email = "frank@frank.com";
        this.relation = "friend";
    }
}
const contact = new Contact();
const book = new AddressBook();

contact.print();
