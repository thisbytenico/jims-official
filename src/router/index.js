
import { createRouter, createWebHashHistory } from "vue-router"
import IndexView from "../views/Index.vue"
import Foundation from "../views/Foundation"
import JimRogersInfo from "../views/JimRogersInfo"
import PeggyParker from "../views/PeggyParker"
import PhilanthropyandInvestment from "../views/PhilanthropyandInvestment"
import HappyAndBee from "../views/HappyAndBee"

const routes = [
    {
        path: "/",
        name: "index",
        component: IndexView,
    },
    {
        path: "/Foundation",
        name: "foundation",
        component: Foundation,
    },
    {
        path: "/JimRogersInfo",
        name: "jimRogersInfo",
        component: JimRogersInfo,
    },
    {
        path: "/PeggyParker",
        name: "peggyParker",
        component: PeggyParker,
    },
    {
        path: "/PhilanthropyandInvestment",
        name: "philanthropyandInvestment",
        component: PhilanthropyandInvestment,
    },
    {
        path: "/HappyAndBee",
        name: "happyAndBee",
        component: HappyAndBee,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
