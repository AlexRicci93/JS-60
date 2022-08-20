const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];




function fetchPersonById(id) {

return new Promise((resolve, reject) => {
  if(persons.find(obj => obj.id === id)) {
     resolve(persons.find(obj => obj.id === id))  
  }
  else {
    reject(new Error('Errore'))
  }

})
};



function fetchJobById(id) {


return new Promise((resolve, reject) => {
  let job = (jobs.find(obj => obj.id === id))
  if(job) {
    resolve(job.jobTitle)
    
  }
  else {
    reject(new Error('Errore'))
  }

})

}



Promise.all([fetchPersonById(3), fetchJobById(3)])
.then(console.log)
.catch(error => console.log(error.message))
