import CategoriesCreate from '../../components/createPages/categories'
import ProductsCreate from '../../components/createPages/products'
import OrdersCreate from '../../components/createPages/orders'
import UsersCreate from '../../components/createPages/users'
import ClientsCreate from '../../components/createPages/clients'
import AttributesCreate from '../../components/createPages/attributes'
import AttributeSetsCreate from '../../components/createPages/attribute-sets'
import TabsCreate from '../../components/createPages/tabs'
import TabSetsCreate from '../../components/createPages/tab-sets'
import RolesCreate from '../../components/createPages/roles'
import StatusesCreate from '../../components/createPages/statuses'

import CategoriesEdit from '@src/components/editPages/categories'
import ProductsEdit from '@src/components/editPages/products'
import UsersEdit from '@src/components/editPages/users'
import RolesEdit from '@src/components/editPages/roles'
import ClientsEdit from '@src/components/editPages/clients'
import OrdersEdit from '@src/components/editPages/orders'
import AttributesEdit from '@src/components/editPages/attributes'
import AttributeSetsEdit from '@src/components/editPages/attribute-sets'
import TabsEdit from '@src/components/editPages/tabs'
import TabSetsEdit from '../../components/editPages/tab-sets'
import StatusesEdit from '../../components/editPages/statuses'

export default {
    CategoriesCreate,
    ProductsCreate,
    OrdersCreate,
    UsersCreate,
    ClientsCreate,
    AttributesCreate,
    'Attribute-setsCreate': AttributeSetsCreate,
    TabsCreate,
    'Tab-setsCreate': TabSetsCreate,
    RolesCreate,
    StatusesCreate,
    CategoriesEdit,
    ProductsEdit,
    UsersEdit,
    RolesEdit,
    ClientsEdit,
    OrdersEdit,
    AttributesEdit,
    'Attribute-setsEdit': AttributeSetsEdit,
    TabsEdit,
    'Tab-setsEdit': TabSetsEdit,
    StatusesEdit
}