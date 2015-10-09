var AddressBook = function () {
    this.contacts = [];
    this.initialComplete = false;
};

AddressBook.prototype.getInitialContact = function (callback) {
    var self = this;
    setTimeout(function () {
        self.initialComplete = true;
        if (callback) { callback(); }
        return;
    }, 3);
};

AddressBook.prototype.addContact = function (contact) {
    this.contacts.push(contact);
};

AddressBook.prototype.getContact = function (index) {
    return this.contacts[index];
};

AddressBook.prototype.deleteContact = function (index) {
    this.contacts.splice(index, 1);
};

