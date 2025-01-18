import { createRouter, createWebHistory } from "vue-router";
// Importação padrão
/* 
import Vendas from "@/components/vendas/Vendas.vue";
import VendasPadrao from "@/components/vendas/VendasPadrao.vue";
import Leads from "@/components/vendas/Leads.vue";
import Lead from "@/components/vendas/Lead.vue";
import Contratos from "@/components/vendas/Contratos.vue";
import Servicos from "@/components/servicos/Servicos.vue";
import Servico from "@/components/servicos/Servico.vue";
import Opcoes from "@/components/servicos/Opcoes.vue";
import Indicadores from "@/components/servicos/Indicadores.vue";
import Home from "@/views/Home.vue";
import Dashboard from "@/components/dashboard/Dashboard.vue";
import DashboardRodape from "@/components/dashboard/DashboardRodape.vue";
import Login from "@/views/Login.vue";
import Site from "@/views/Site.vue";
import PaginaNaoEncontrada from "@/views/PaginaNaoEncontrada.vue"; 
*/
// Lazy loading
const Vendas = () =>import("@/components/vendas/Vendas.vue");
const VendasPadrao = () =>import("@/components/vendas/VendasPadrao.vue");
const Leads = () =>import("@/components/vendas/Leads.vue");
const Lead = () =>import("@/components/vendas/Lead.vue");
const Contratos = () =>import("@/components/vendas/Contratos.vue");
const Servicos = () =>import("@/components/servicos/Servicos.vue");
const Servico = () =>import("@/components/servicos/Servico.vue");
const Opcoes = () =>import("@/components/servicos/Opcoes.vue");
const Indicadores = () =>import("@/components/servicos/Indicadores.vue");
const Home = () =>import("@/views/Home.vue");
const Dashboard = () =>import("@/components/dashboard/Dashboard.vue");
const DashboardRodape = () =>import("@/components/dashboard/DashboardRodape.vue");
const Login = () =>import("@/views/Login.vue");
const Site = () =>import("@/views/Site.vue");
const PaginaNaoEncontrada = () =>import("@/views/PaginaNaoEncontrada.vue");



const routes = [
  {
    path: "/", //localhost:8080/site
    component: Site,
    meta: { requerAutorizacao: false },
  },
  {
    path: "/home", //localhost:8080/home
    meta: { requerAutorizacao: true },
    alias: "/app",
    component: Home,
    children: [
      {
        path: "vendas", //localhost:8080/home/vendas
        component: Vendas,

        children: [
          { path: "leads", component: Leads }, //localhost:8080/home/vendas/leads
          {
            path: "leads/:id/:outroParametro", //localhost:8080/home/vendas/leads/1
            props: true, // sobreposição por {id: 5, outroParametro: 'pt-br'}
            name: "lead",
            component: Lead,
            alias: ["/l/:id/:outroParametro", "/pessoa/:id/:outroParametro", "/:id/:outroParametro"],
          },
          { path: "contratos", component: Contratos, name: "contratos" }, //localhost:8080/home/vendas/contratos
          { path: "", component: VendasPadrao, name: "vendas" }, //localhost:8080/home/vendas/
        ],
      },
      {
        path: "servicos", //localhost:8080/home/servicos
        component: Servicos,
        name: "servicos",
        children: [
          {
            path: ":id",
            props: {
              default: true,
              indicadores: true,
              opcoes: true,
            },
            alias: "/s/:id",
            name: "servico",
            components: {
              default: Servico,
              opcoes: Opcoes,
              indicadores: Indicadores,
            },
          }, //localhost:8080/home/servicos/1
        ],
      },
      {
        path: "dashboard", //localhost:8080/home/dashboard
        components: {
          default: Dashboard,
          rodape: DashboardRodape,
        },
      },
    ],
  },
  {
    path: "/login", //localhost:8080/login
    component: Login,
  },
  /* REDIRECT */
  {
    path: "/redirecionamento-1",
    redirect: "/home/servicos",
  },
  {
    path: "/redirecionamento-2",
    redirect: { name: "leads" },
  },
  {
    path: "/redirecionamento-3",
    redirect: { name: "vendas" },
  },
  {
    path: "/redirecionamento-4",
    redirect: (to) => {
      console.log(to);
      // return "/home/vendas"
      return { name: "vendas" };
    },
  },
  /* CATCH ALL */
  /*
  {
    path: "/:catchAll(.*)*",
    redirect: '/'
  }, 
  */
  {
    path: "/:catchAll(.*)*",
    component: PaginaNaoEncontrada,
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if(to.hash){
      return { el: to.hash}
    }
    return {left: 0, top: 0}
  },
  routes: routes,
});

router.beforeEach((to, from) => {
  console.log("Origem:", from);
  console.log("Destino:", to);
  // verificação se o usuário pode ou não acessar a rota
});

export default router;
