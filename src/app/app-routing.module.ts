import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircuitComponent } from './pages/circuit/circuit.component';
import { CircuitsComponent } from './pages/circuits/circuits.component';
import { ConstructorComponent } from './pages/constructor/constructor.component';
import { ConstructorsComponent } from './pages/constructors/constructors.component';
import { DriverComponent } from './pages/driver/driver.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { HomeComponent } from './pages/home/home.component';
import { StandingsComponent } from './pages/standings/standings.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'standings', component: StandingsComponent, pathMatch: 'full' },
  { path: 'circuits/:season', component: CircuitsComponent },
  { path: 'circuits/circuit/:circuitId', component: CircuitComponent },
  { path: 'drivers/:season', component:DriversComponent },
  { path: 'drivers/driver/:driverId', component: DriverComponent },
  { path: 'constructors/:season', component: ConstructorsComponent },
  { path: 'constructors/constructor/:constructorId', component: ConstructorComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
