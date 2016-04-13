import 'es6-shim';
import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';


@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  static get parameters() {
    return [[IonicApp], [Platform], [MenuController]];
  }

  constructor(app, platform, menu) {
    // set up our app
    this.app = app;
    this.platform = platform;
    this.menu = menu;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Acceuil', component: HelloIonicPage },
      { title: 'Action', component: ListPage },
      { title: 'Animation', component: ListPage },
      { title: 'Arts Martiaux', component: ListPage },
      { title: 'Aventure', component: ListPage },
      { title: 'Biographique', component: ListPage },
      { title: 'Comédie', component: ListPage },
      { title: 'Comédie Drama', component: ListPage },
      { title: 'Danse', component: ListPage },
      { title: 'Documentaire', component: ListPage },
      { title: 'Drame', component: ListPage },
      { title: 'Epouvante Horreur', component: ListPage },
      { title: 'Espionnage', component: ListPage },
      { title: 'Fantastique', component: ListPage },
      { title: 'Famille', component: ListPage },
      { title: 'Divers', component: ListPage },
      { title: 'Guerre', component: ListPage },
      { title: 'Historique', component: ListPage },
      { title: 'Musical', component: ListPage },
      { title: 'Péplum', component: ListPage },
      { title: 'Policier', component: ListPage },
      { title: 'Romance', component: ListPage },
      { title: 'Science-Fiction', component: ListPage },
      { title: 'Spectacle', component: ListPage },
      { title: 'Sport', component: ListPage },
      { title: 'Triller', component: ListPage },
      { title: 'Western', component: ListPage }
   



    ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = HelloIonicPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
