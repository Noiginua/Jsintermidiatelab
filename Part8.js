// a
const phoneBookDEF = new Map();
//b
const phoneBookDEF = new Map([
    ['David', '0499123456'],
    ['Emily', '0411222333'],
    ['Frank', '0433555777'],
  ]);
//c  
phoneBookABC.set('Caroline', '0477665544');
//d
const printPhoneBook = (contacts) => {
    for (const [name, phoneNumber] of contacts) {
      console.log(`${name}: ${phoneNumber}`);
    }
  };
//e  
const phoneBook = new Map([...phoneBookABC.entries(), ...phoneBookDEF.entries()]);
//f
const allNames = Array.from(phoneBook.keys());
console.log(allNames);

