import { createWebHistory, createRouter } from "vue-router";
import AdminDashboard from "@/views/dashboard/AdminDashboard";
import UserList from "@/views/account/UserList";
import UserManagement from "@/views/user/UserManagement.vue";
import ProfileRequestedChange from "@/views/profile/ProfileRequestedChange.vue";
import AdminNotice from "@/views/noti/admin/AdminNotice";
import UserNotice from "@/views/noti/user/UserNotice";
import IndicatorManagement from "@/views/ind/IndicatorManagement";
import UserManagementDetail from "@/views/user/UserManagementDetail.vue";
import ProfileRequestedChangeDetail from "@/views/profile/ProfileRequestedChangeDetail.vue";
import RegisterSecondDetail from "@/views/reg/RegisterSecondDetail.vue";
import ConsultManager from "@/views/cns/ConsultManager.vue";
import ConsultUser from "@/views/cns/ConsultUser.vue";
import ConsultManagerDetail from "@/views/cns/ConsultManagerDetail.vue";
import SystemManager from "@/views/sys/SystemManager.vue";
import UserLogin from "@/views/login/UserLogin.vue";
import SignupSimple from "@/views/signup/SignupSimple.vue";
import PaymentManagement from "@/views/payment/PaymentManagement.vue";

const routes = [
    { path: "/", component: UserLogin },
    { path: "/signupTest", component: SignupSimple },
    { path: "/home", component: AdminDashboard },
    { path: "/account", component: UserList },

    { path: "/mng/user", component: UserManagement },
    { path: "/mng/user/:id", component: UserManagementDetail },
    { path: "/mng/profile", component: ProfileRequestedChange },
    { path: "/mng/profile/:id", component: ProfileRequestedChangeDetail },

    // [신규 고객]/[기존 고객] -> [고객]으로 통합
    // { path: "/reg/first", component: RegisterFirst },
    // { path: "/reg/second", component: RegisterSecond },
    { path: "/reg/second/:id", component: RegisterSecondDetail },

    { path: "/cns/user", component: ConsultUser },
    { path: "/cns/manager", component: ConsultManager },
    { path: "/cns/manager/:id", component: ConsultManagerDetail },

    { path: "/noti/admin", component: AdminNotice },
    { path: "/noti/user", component: UserNotice },

    { path: "/indicator", component: IndicatorManagement },

    { path: "/sys/manager", component: SystemManager },

    { path: "/payment/manager", component: PaymentManagement }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// router.beforeEach((to, from, next) => {
//     const userStore = userInfoStore();
//     if (to.path === "/signupTest" || to.path === "/") {
//         userStore.resetUserAccessToken();
//         next();
//     } else {
//         if (!userStore.getUserAccessToken()) {
//             next("/");
//         }
//         next();
//     }
// });

export default router;
