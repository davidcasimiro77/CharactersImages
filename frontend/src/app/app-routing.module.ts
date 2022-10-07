import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-characters',
    pathMatch: 'full'
  },
  {
    path: 'add-character',
    loadChildren: () => import('./add-character/add-character.module').then( m => m.AddCharacterPageModule)
  },
  {
    path: 'list-characters',
    loadChildren: () => import('./list-characters/list-characters.module').then( m => m.ListCharactersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
