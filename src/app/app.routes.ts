import { Routes } from '@angular/router';
import { Portfolio } from './presentation/pages/portfolio/portfolio';
import { CatarinaPreview } from './presentation/pages/catarina-preview/catarina-preview';

export const routes: Routes = [
    {
        path: 'portfolio',
        component: Portfolio,
    },
    {
        path: 'catarina-preview',
        component: CatarinaPreview
    },
    {
        path: '**',
        redirectTo: 'portfolio'
    }
];
