import { Routes } from '@angular/router';
import { Portfolio } from './presentation/pages/portfolio/portfolio';
import { Catarina } from './presentation/pages/catarina/catarina';
import { CatarinaDocs } from './presentation/pages/catarina/components/catarina-docs/catarina-docs';
import { SafirialIcons } from './presentation/pages/safirial-icons/safirial-icons';

export const routes: Routes = [
    {
        path: 'portfolio',
        component: Portfolio,
    },
    {
        path: 'catarina',
        component: Catarina,
        children: [
            {
                path: ':doc/:lang',
                component: CatarinaDocs
            },
            {
                path: ':doc',
                component: CatarinaDocs
            },
            {
                path: '',
                redirectTo: 'get-started',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'safirial-icons',
        component: SafirialIcons,
    },
    {
        path: '**',
        redirectTo: 'portfolio'
    }
];
