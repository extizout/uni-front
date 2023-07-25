import { createRouter, createWebHistory } from "vue-router";
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";
import AdminDashboard from "./components/AdminDashboard.vue";
import MemberList from "./components/MemberList.vue"
import UserDashboard from "./components/UserDashboard.vue"
import Welcome from "../src/views/Welcome.vue"
import SideBar from "./components/SideBar.vue"
import UserDialog from "./components/UserDialog.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Welcome },
    { path: "/signin", component: SignIn },
    { path: "/signup", component: SignUp },
    { path: "/admin", component: AdminDashboard },
    { path: "/user", component: MemberList },
    { path: "/test", component: UserDashboard },
    { path: "/sidebar", component: SideBar },
  ],
});

export default router;
