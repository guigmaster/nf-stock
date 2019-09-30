import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

import config from '../config/firebase';

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  async setPlanData(data) {
    return this.db.doc(`users/${this.auth.currentUser.uid}`).set(data);
  }
}

export default new Firebase();
