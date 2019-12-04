import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GameselectorComponent } from './gameselector/gameselector.component';
import { HowtoplayComponent } from './howtoplay/howtoplay.component';
import { ServerbrowserComponent } from './serverbrowser/serverbrowser.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import { MakegameComponent } from './makegame/makegame.component';
import { SetmakerComponent } from './setmaker/setmaker.component';
import { GamescreenComponent } from './gamescreen/gamescreen.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';






const appRoutes: Routes = [
  { path: 'mainmenu', component: MainmenuComponent },
  { path: 'howtoplay', component: HowtoplayComponent },
  { path: 'serverbrowser', component: ServerbrowserComponent},
  { path: 'gameselector', component: GameselectorComponent },
  { path: 'makegame', component: MakegameComponent },
  { path: 'gamescreen', component: GamescreenComponent },
  { path: 'setmaker', component: SetmakerComponent },
  { path: '', redirectTo: '/mainmenu', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    TopbarComponent,
    MainmenuComponent,
    PagenotfoundComponent,
    GameselectorComponent,
    HowtoplayComponent,
    ServerbrowserComponent,
    MakegameComponent,
    SetmakerComponent,
    GamescreenComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
