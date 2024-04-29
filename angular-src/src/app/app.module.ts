// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';

// Services
import {MessageService} from './services/message.service';
import { MessagelistComponent } from './messagelist/messagelist.component';

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
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
