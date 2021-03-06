import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { firebase, database as default }



// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })
// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })


// database.ref('expenses').once('value')
//   .then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses)
//   })

// database.ref('expenses').push({
//   description: 'first',
//   note: '',
//   amount: 123,
//   createdAt: 3
// })



//database.ref('notes/-LjKj_m40txzwtlmjFWC').remove()

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native'
// })

// const firebaseNotes = {
//   notes: {
//     asdfasdf: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     qwerqwer: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is my note'
// }]

// database.ref('notes').set(notes)

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(val.name + ' is a ' + val.job.title + ' at ' + val.job.company)
// })


// database.ref('location/city').once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   }).catch((e) => {
//     console.log('Error fetching data', e)
//   })


// database.ref().set({
//   name: 'Jaeha Lee',
//   age: 24,
//   stressLevel : 6,
//   job: {
//     title: 'Software Engineedr',
//     company: 'Codeit'
//   },
//   location: {
//     city: 'Seoul',
//     country: 'Korea'
//   }
// }).then(() => {
//   console.log('Data is saved!')
// }).catch((e) => {
//   console.log('This failed', e)
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed')
//   }).catch((e) => {
//     console.log('Did not remove data', e)
//   })

