
import AdminRoot from "../pages/Admin/AdminRoot";
import AdminEmployees from "../pages/Admin/AdminEmployees";
import AddEmployees from "../pages/Admin/AddEmployee";
import EditEmployee from "../pages/Admin/EditEmployee";
import MainRoot from "../pages/Main/MainRoot";
import EmployeeDetail from "../pages/Main/EmployeeDetail";
import Employees from "../pages/Main/Employees";
import NotFound from "../pages/Main/NotFound";
import Favoruites from "../pages/Main/Favoruites";
import Home from "../pages/Main/Home";

export const ROUTES = [
    
    {
      path: '/admin',
      element: <AdminRoot/>,
      children: [
        {
            index: true,
            element: <AdminEmployees/>
        },
        {
            path: 'add-employee',
            element: <AddEmployees/>
        },
        {
            path: 'employees/edit/:id',
            element: <EditEmployee/>
        }
      ]
    },
  
    {
        path: '',
        element: <MainRoot/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/employees',
                element: <Employees/>,
            },
            {
                path: '/employes/:id',
                element: <EmployeeDetail/>
            },
            {
                path:'*',
                element:<NotFound/>
            },
            {
                path: '/favourites',
                element: <Favoruites/>,
            }
            
        ]
    }
];