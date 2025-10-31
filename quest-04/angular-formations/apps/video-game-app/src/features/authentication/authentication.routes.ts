import { Routes } from "@angular/router";
import { Login } from "./components/login/login";

export const anthenticationRoutes: Routes = [
    {
        path: 'login',
        component: Login
    }
]