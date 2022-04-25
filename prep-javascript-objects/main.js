const person = {
  firstName: 'Bob',
  lastName: 'DaBuilder',
  hobby: 'building',
  job: 'construction',
  previousJob: 'wood salesman'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is:', fullName);

console.log('Bob\'s job is:', person.job);

console.log('Bob\'s previous job was:', person.previousJob);

console.log('The complete person object:', person);
