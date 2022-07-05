import Admin from "./pages/Admin";
import Category from "./pages/Category";
import CreationResum from "./pages/CreationResum";
import ResumeStore from "./pages/ResumeStore";
import Registr from "./pages/Registr";
import Auth from "./pages/Auth";
import {
    ADMIN_ROUTE, AREA_ROUTE,
    AUTHORISATION_ROUTE,
    CATEGORY_ROUTE,
    CREATION_ROUTE,
    REGISTRATION_ROUTE,
    STORE_ROUTE
} from "./utils/consts";
import PersonalArea from "./pages/PersonalArea";

export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        Component:Admin
    },
    {
        path:CATEGORY_ROUTE,
        Component:Category
    },
    {
        path:CREATION_ROUTE,
        Component:CreationResum
    },
    {
        path:STORE_ROUTE,
        Component:ResumeStore
    },
    {
        path:AREA_ROUTE,
        Component:PersonalArea
    },
]

export const publicRoutes = [
    {
        path:REGISTRATION_ROUTE,
        Component:Registr
    },
    {
        path:AUTHORISATION_ROUTE,
        Component:Auth
    },
    {
        path:CATEGORY_ROUTE,
        Component:Category
    },
    {
        path: STORE_ROUTE,
        Component:ResumeStore
    },
]