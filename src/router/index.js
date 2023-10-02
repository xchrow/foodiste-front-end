import { createRouter, createWebHistory } from "vue-router";


const Home = () => import ("../views/Home.vue")
const Search = () => import ("../views/Search.vue")
const Profil = () => import ("../views/Profil.vue")
const Login = () => import("../views/Login.vue")
const Register = () => import("../views/Register.vue")
const Lists = () => import("../views/Lists.vue")
const Agenda = () => import("../views/Agenda.vue")
const Write = () => import("../views/Write.vue")
const FullPost = () => import("../views/FullPost.vue")
const Restaurant = () => import("../views/Restaurant.vue")
const NotFound = () => import("../views/NotFound.vue")

const router = createRouter({
    routes : [
        {path: "/", name: "Home", component: Home, meta: { title : "Accueil"}},
        {path: "/search", name: "Search", component: Search, meta: { title : "Recherche"}},
        {path: "/profil", name: "Profil", component: Profil, meta: { title : "Profil"}},
        {path: "/login", name: "Login", component: Login, meta: { title : "Connexion"}},
        {path: "/register", name: "Register", component: Register, meta: { title : "S'inscrire"}},
        {path: "/lists", name: "Lists", component: Lists, meta: { title : "Mes listes"}},
        {path: "/agenda", name: "Agenda", component: Agenda, meta: { title : "Mon journal"}},
        {path: "/write", name: "Write", component: Write, meta: { title : "Nouvelle critique"}},
        {path: "/fullpost", name: "FullPost", component: FullPost, meta: { title : "Affichage d'une critique"}},
        {path: "/restaurant", name: "Restaurant", component: Restaurant, meta: { title : "Restaurant"}},
        {path: '/:pathMatch(.*)*', name: "NotFound", component: NotFound, meta: { title : "404"}}

    ],
    history: createWebHistory()
})
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Foodiste`
    next() 
})

export default router