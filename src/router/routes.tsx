import FunctionalExample from "../pages/FunctionalExample";
import ClassExample from "../pages/ClassExample";

export const publicRoutes= [
    {path: '/',element:(<FunctionalExample/>),linkName:'functional'},
    {path: '/class',element:(<ClassExample/>),linkName: 'class'},
    {path: '*',element:(<div>404 NOT FOUND</div>)}
]
