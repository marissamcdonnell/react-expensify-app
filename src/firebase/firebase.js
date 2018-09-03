import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

export { firebase, database as default };


// //child_removed
//   database.ref('expenses').on('child_removed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val());
//   });
//
// //child_changed
//   database.ref('expenses').on('child_changed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val());
//   });
//
//   //child_added
//   database.ref('expenses').on('child_added', (snapshot) => {
//       console.log(snapshot.key, snapshot.val());
//   });



  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //       const expenses = [];
  //
  //       snapshot.forEach((childSnapshot) => {
  //           expenses.push({
  //               id: childSnapshot.key,
  //               ...childSnapshot.val()
  //           })
  //       })
  //       console.log(expenses)
  //   });

    // database.ref('expenses').on('value', (snapshot) => {
    //     const expenses = [];
    //
    //     snapshot.forEach((childSnapshot) => {
    //         expenses.push({
    //             id: childSnapshot.key,
    //             ...childSnapshot.val()
    //         })
    //     })
    //     console.log(expenses)
    // })
    //

  // database.ref('expenses').push({
  //     description: 'new bill',
  //     note: 'was gross',
  //     amount: 65,
  //     createdAt: '02/24/18'
  // })


  // const onChangeValue = database.ref().on('value', (snapshot) => {
  //     const val = snapshot.val()
  //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
  // }, (e) => {
  //     console.log('this didnt work'), e
  // });

  // database.ref('location/city')
  // .once('value')
  // .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  // })
  // .catch((e) => {
  //     console.log('Error fetching data', e)
  // })


  // database.ref().set({
  //     name: 'Marissa',
  //     age: 26,
  //     stressLevel: 6,
  //     job: {
  //         title: 'Software Developer',
  //         company: 'Google'
  //     },
  //     location: {
  //         city: 'Phoenix',
  //         country: 'United States'
  //     }
  // }).then(() => {
  //     console.log('Data Saved!');
  // }).catch((e) => {
  //     console.log('This failed', e);
  // });
  //
  // database.ref().update({
  //     stressLevel: 9,
  //     'job/company': 'Amazon',
  //     'location/city': 'Seattle'
  // })

  // database.ref('isSingle').remove()
  // .then(() => {
  //     console.log('removed success');
  // })
  // .catch((e) => {
  //     console.log('failed to remove', e)
  // });
