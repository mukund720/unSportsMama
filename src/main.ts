/*!

=========================================================
* Argon Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.unsportsmama.com/product/argon-design-system-angular
* Copyright 2021 UnSports Mama (https://www.unsportsmama.com?)
* Licensed under MIT (https://github.com/mukund720/unSportsMama/blob/master/LICENSE.md)

* Coded by UnSports Mama

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
