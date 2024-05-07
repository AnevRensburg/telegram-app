// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MessagelistComponent } from './message-list/messagelist.component';

// Services
import {MessageService} from './services/message.service';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    MessageComponent,
    MessagelistComponent
  ],
  imports: [
    // Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  // Services
  bootstrap: [AppComponent],
  providers: [MessageService]
})
export class AppModule { }
