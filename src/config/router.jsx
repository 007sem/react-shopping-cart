import Home from "@/views/Home"
import List from "@/views/List"
import Detail from "@/views/Detail"
import Cart from "@/views/Cart"
import NotFound from "@/views/NotFound"

import HighList from "@/views/sub/HighList"
import HotList from "@/views/sub/HotList"


const router = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                index: true,
                element: <HotList/>
            },
            {
                path: "high_list",
                element: <HighList/>
            }
        ]
    },
    {
        path: '/list',
        element: <List/>
    },
    {
        path: '/detail/:id',
        element: <Detail/>
    },
    {
        path: '/cart',
        element: <Cart/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
]

export default router