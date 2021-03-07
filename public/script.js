var app;

document.addEventListener('DOMContentLoaded', function() {
    const loadEl = document.querySelector('#main');
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.firestore().doc('/foo/bar').get().then(() => { });
    // firebase.functions().httpsCallable('yourFunction')().then(() => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    // firebase.analytics(); // call to activate
    // firebase.analytics().logEvent('tutorial_completed');
    // firebase.performance(); // call to activate
    //
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // try {
    //   app = firebase.app();
    //   let features = [
    //     'auth', 
    //     'database', 
    //     'firestore',
    //     'functions',
    //     'messaging', 
    //     'storage', 
    //     'analytics', 
    //     'remoteConfig',
    //     'performance',
    //   ].filter(feature => typeof app[feature] === 'function');
    // } catch (e) {
    //   console.error(e);
    // }

    const analytics = firebase.analytics();
    if(!document.cookie) {
        document.cookie = 'user =  ' + Math.random();
    }
    analytics.logEvent('site opened!', {
        user: document.cookie
    });

    document.getElementById('home').addEventListener('click', (e) => analytics.logEvent('home_clicked', {user: document.cookie}));
    document.getElementById('blog').addEventListener('click', (e) => analytics.logEvent('blog_clicked', {user: document.cookie}));
    document.getElementById('hackathons').addEventListener('click', (e) => analytics.logEvent('hackathons_clicked', {user: document.cookie}));
    document.getElementById('projects').addEventListener('click', (e) => analytics.logEvent('projects_clicked', {user: document.cookie}));

});