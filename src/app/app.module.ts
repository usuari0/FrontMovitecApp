import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { BodyComponent } from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LoginComponent } from './Pages/login/login.component';
import { PublicComponent } from './Pages/public/public.component';
import { ClientComponent } from './Pages/client/client.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { Interceptor1Service, interceptorProvider } from './Interceptors/interceptor1.service';
import { MenuAdminComponent } from './Components/menu-admin/menu-admin.component';
import { UsuariosAdminComponent } from './Components/usuarios-admin/usuarios-admin.component';
import { AdminClientesComponent } from './Pages/admin-clientes/admin-clientes.component';
import { AdminPlanesComponent } from './Pages/admin-planes/admin-planes.component';
import { AdminUsuariosComponent } from './Pages/admin-usuarios/admin-usuarios.component';
import { AdminEmpleadosComponent } from './Pages/admin-empleados/admin-empleados.component';
import { AdminEquiposComponent } from './Pages/admin-equipos/admin-equipos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    PublicComponent,
    ClientComponent,
    AdminComponent,
    MenuAdminComponent,
    UsuariosAdminComponent,
    AdminClientesComponent,
    AdminPlanesComponent,
    AdminUsuariosComponent,
    AdminEmpleadosComponent,
    AdminEquiposComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
