import { Routes } from '@angular/router';
import { Portfolio } from './presentation/pages/portfolio/portfolio';
import { Catarina } from './presentation/pages/catarina/catarina';
import { CatarinaDocsWrapper } from './presentation/pages/catarina/components/catarina-docs-wrapper/catarina-docs-wrapper';
import { SafirialIcons } from './presentation/pages/safirial-icons/safirial-icons';
import { CatarinaOverview } from './presentation/pages/catarina/components/catarina-overview/catarina-overview';

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
                path: 'overview',
                component: CatarinaOverview,
            },
            {
                path: ':doc/:lang',
                component: CatarinaDocsWrapper
            },
            {
                path: ':doc',
                component: CatarinaDocsWrapper
            },
            {
                path: '',
                redirectTo: 'overview',
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
