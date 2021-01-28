import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/addContact");
const deleteContact = createAction("contacts/deleteContact");
const setFilter = createAction("contacts/setFilter");

// const addContactR = value => ({
//   type: 'contacts/addContact',
//   payload: value,
// });

// const deleteContactR = contactId => ({
//   type: 'contacts/deleteContact',
//   payload: contactId,
// });

// const setContactR = contactsArr => ({
//   type: 'contacts/setContacts',
//   payload: contactsArr,
// });

// const setFilterR = value => ({
//   type: 'contacts/setFilter',
//   payload: value,
// });
export { addContact, deleteContact, setFilter };
