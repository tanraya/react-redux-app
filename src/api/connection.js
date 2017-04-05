import firebase from 'firebase'
import config from './config.json'

window.firebase = firebase.initializeApp(config)
