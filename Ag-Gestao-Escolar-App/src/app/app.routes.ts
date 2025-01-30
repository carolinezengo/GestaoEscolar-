import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path:'',
    children:[{
      path:'',
      redirectTo:'root/home',
      pathMatch:'full'
    },
   //Rotas dos Sistema
   {
   path:'cadastros',
   loadChildren:()=>
    import('./../app/modules/cadastros/cadastros.module').then
   (m => m.CadastrosModule)
   },
   {
   path:'lancamentos',
   loadChildren:()=>
    import('./../app/modules/lancamentos/lancamentos.module').then
   (m => m.LancamentosModule)
   }
  ]

 }
];
