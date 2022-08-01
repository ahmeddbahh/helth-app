import Vue from "vue";
import VueRouter from "vue-router";
// About
// import About from "../views/About.vue";
// Authentication
// import Authentication from "../views/Authentication.vue";
// login
// import Login from "../components/authentication/login/Login.vue";
// registeration
// import EmptyRegister from "../components/authentication/register/EmptyRegister.vue";
// import Register from "../components/authentication/register/Register.vue";
// import RegisterEmailVerify from "../components/authentication/register/EmailVerify.vue";
// import RegisterPhoneVerify from "../components/authentication/register/PhoneVerify.vue";
// forget password
// import EmptyForgetPassword from "../components/authentication/forget_password/EmptyForgetPassword.vue"
// import FindAccount from "../components/authentication/forget_password/FindAccount.vue";
// import isYou from "../components/authentication/forget_password/isYou.vue";
// import VerificationType from "../components/authentication/forget_password/VerificationType.vue";
// import EmailVerify from "../components/authentication/forget_password/EmailVerify.vue";
// import PhoneVerify from "../components/authentication/forget_password/PhoneVerify.vue";
// import ResetPassword from "../components/authentication/forget_password/ResetPassword.vue";
// Business
// import Business from "../views/Business.vue";
// import BusinessLogin from "../components/business/Login.vue";
// import ChooseCategory from "../components/business/ChooseCategory.vue";
// import ChooseClinic from "../components/business/ChooseClinic.vue";
// import ClinicRegistration from "../components/business/ClinicRegistration.vue";
// import VerifyBranch from "../components/business/VerifyBranch.vue";
// clinic
// import Clinic from '../views/Clinic.vue';
// import ClinicHome from "../components/clinic/ClinicHome.vue";
// import AddClinic from "../components/clinic/AddClinic.vue";
// dental pages
// import Dental from '../views/Dental.vue';
//OBGYN pages
// import Obgyn from '../views/Obgyn';
//Pediatric pages
// import Pediatric from "../views/Pediatric.vue"

// Ophthalmic pages
// import Ophthalmic from '../views/Ophthalmic.vue';
// Error Pages
// import Errors from '../views/Errors.vue';
// import Forbiden from '../components/httpErrors/Forbiden.vue';
// import NotFound from '../components/httpErrors/NotFound.vue';
// import ServerError from '../components/httpErrors/ServerError.vue';

function isAuthenticated() {
    if (!localStorage.getItem("accessToken") || !localStorage.getItem("refreshToken"))
        return false
    return true
}

function lazyLoadView(view) {
    return () =>
        import (`@/views/${view}.vue`)
}

function lazyLoadComponent(view) {
    return () =>
        import (`@/components/${view}.vue`)
}


Vue.use(VueRouter);
const routes = [{
        path: '/about',
        component: lazyLoadView("About")
    },
    {
        path: "/",
        name: "Authentication",
        component: lazyLoadView('Authentication'),
        beforeEnter(to, from, next) {
            if (isAuthenticated())
                return next("/clinic")
            return next()
        },
        children: [{
                alias: "/",
                path: "login",
                name: "login",
                component: lazyLoadComponent('authentication/login/Login'),
            },
            {
                path: "register",
                component: lazyLoadComponent("authentication/register/EmptyRegister"),
                children: [{
                        path: "",
                        name: "register",
                        component: lazyLoadComponent("authentication/register/Register"),
                    },
                    {
                        path: "email-verify",
                        name: "registerEmailVerify",
                        component: lazyLoadComponent("authentication/register/EmailVerify"),
                    },
                    {
                        path: "phone-verify",
                        name: "registerPhoneVerify",
                        component: lazyLoadComponent("authentication/register/PhoneVerify"),
                    },
                ]
            },
            {
                path: "find-account",
                component: lazyLoadComponent("authentication/forget_password/EmptyForgetPassword"),
                children: [{
                        path: "",
                        name: "findAccount",
                        component: lazyLoadComponent("authentication/forget_password/FindAccount")
                    },
                    {
                        path: "is-you",
                        name: "isYou",
                        component: lazyLoadComponent("authentication/forget_password/isYou")
                    },
                    {
                        path: "verification-type",
                        name: "verificationType",
                        component: lazyLoadComponent("authentication/forget_password/VerificationType")
                    },
                    {
                        path: "email-verify",
                        name: "emailVerify",
                        component: lazyLoadComponent("authentication/forget_password/EmailVerify")
                    },
                    {
                        path: "phone-verify",
                        name: "phoneVerify",
                        component: lazyLoadComponent("authentication/forget_password/PhoneVerify")
                    },
                    {
                        path: "reset-password",
                        name: "resetPassword",
                        component: lazyLoadComponent("authentication/forget_password/ResetPassword"),
                    },
                ]
            },
        ],
    },
    {
        path: "/business",
        name: "business",
        component: lazyLoadView("Business"),
        // beforeEnter(to, from, next) {
        //     if (isAuthenticated())
        //         return next({ name: "chooseCategory" })
        //     return next()
        // },
        children: [{
                alias: "/business",
                path: "business-login",
                name: "businessLogin",
                component: lazyLoadComponent("business/Login"),
            },
            {
                path: "choose-category",
                name: "chooseCategory",
                component: lazyLoadComponent("business/ChooseCategory"),
            },
            {
                path: "choose-clinic",
                name: "chooseClinic",
                component: lazyLoadComponent("business/ChooseClinic"),
            },
            {
                path: "clinic-registeration/:id",
                name: "clinicRegistration",
                component: lazyLoadComponent("business/ClinicRegistration"),
                params: true,
            },
            {
                path: "verify-branch/:id",
                name: "verifyBranch",
                component: lazyLoadComponent("business/VerifyBranch"),
                params: true,
            },
        ],
    },
    {
        path: "/clinic",
        name: "clinic",
        component: lazyLoadView("Clinic"),
        children: [{
                path: "/",
                name: "clinicHome",
                component: lazyLoadComponent("clinic/ClinicHome"),
            },
            {
                path: "add-clinic",
                name: "addClinic",
                component: lazyLoadComponent("clinic/AddClinic"),
                children: [{
                        path: "/",
                        name: "AddClinicChooseClinic",
                        component: lazyLoadComponent("business/ChooseClinic"),
                    },
                    {
                        path: "clinic-registeration/:id",
                        name: "AddCliniclinicRegistration",
                        component: lazyLoadComponent("business/ClinicRegistration"),
                        params: true,
                    },
                    {
                        path: "verify-branch/:id",
                        name: "AddClinicVerifyBranch",
                        component: lazyLoadComponent("business/VerifyBranch"),
                        params: true,
                    },
                ]
            },
            {
                path: "dental",
                name: "dental",
                component: lazyLoadView("Dental")
            },
            {
                path: "ophthalmic",
                name: "ophthalmic",
                component: lazyLoadView("Ophthalmic"),
            },
            {
                path: "obgyn",
                name: "obgyn",
                component: lazyLoadView("Obgyn"),
            },
            {
                path: "pediatric",
                name: "pediatric",
                component: lazyLoadView("Pediatric"),
            },

        ],
    },
    {
        path: "/errors",
        name: "errors",
        component: lazyLoadView("Errors"),
        children: [{
                path: "403",
                name: "forbiden",
                component: lazyLoadComponent("httpErrors/Forbiden"),
            },
            {
                path: "404",
                name: "notFound",
                component: lazyLoadComponent("httpErrors/NotFound"),
            },
            {
                path: "500",
                name: "serverError",
                component: lazyLoadComponent('ServerError'),
            },
        ],
    },
    {
        path: '/:notfound(.*)',
        redirect: {
            name: 'notFound'
        }
    },








];




// {
//   path: "/about",
//   name: "About",
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () =>
//     import(/* webpackChunkName: "about" */ "../views/About.vue"),
// },




const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return {
            left: 0,
            top: 0
        }
    }
});

export default router;