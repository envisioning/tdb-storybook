import { createClass } from 'asteroid';
import { addProjeto, removeProjeto, updateProjeto } from '../actions';
import store from '../store';

const Asteroid = createClass();
// Connect to a Meteor backend
const asteroid = new Asteroid({
    endpoint: 'ws://tdbstaging.meteorapp.com/websocket'
});

// Use real-time collections
window.asteroid = asteroid;

asteroid.loginWithPassword({
  email: 'admin@admin.com',
  password: 'q1w2e3'
}).then(result => {
  console.log('result', result)
}).catch(err => {
  console.log('err', err)
})
//
// asteroid.ddp.on('added', ({collection, id, fields}) => {
//   console.log('--add--')
//   console.log('collection: ', collection)
//   console.log('id: ', id)
//   console.log('fields: ', fields)
//   console.log('----------------------------')
// });
//
// asteroid.ddp.on('removed', ({collection, id}) => {
//   console.log('--removed--')
//   console.log('collection: ', collection)
//   console.log('id: ', id)
//   console.log('fields: ', fields)
//   console.log('----------------------------')
// });
//
// asteroid.ddp.on('changed', ({collection, id, fields}) => {
//   console.log('--changed--')
//   console.log('collection: ', collection)
//   console.log('id: ', id)
//   console.log('fields: ', fields)
//   console.log('----------------------------')
// });
// Login
//asteroid.loginWithPassword({username, email, password});

// Call method and use promises
// asteroid.call('projetos.add', {
//   nome: 'novo projeto'
// })
// .then(result => {
//     console.log('Success');
//     console.log(result);
// })
// .catch(error => {
//     console.log('Error');
//     console.error(error);
// });


export default asteroid;
