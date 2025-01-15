import { createRouter, createWebHistory } from "vue-router";
import Vendas from "@/components/vendas/Vendas.vue";
import VendasPadrao from "@/components/vendas/VendasPadrao.vue";
import Leads from "@/components/vendas/Leads.vue";
import Lead from "@/components/vendas/Lead.vue";
import Contratos from "@/components/vendas/Contratos.vue";
import Servicos from "@/components/servicos/Servicos.vue";
import Home from "@/views/Home.vue";
import Dashboard from "@/components/dashboard/Dashboard.vue";
import Login from "@/views/Login.vue";
import Site from "@/views/Site.vue";

const routes = [
  {
    path: "/", //localhost:8080/site
    component: Site,
  },
  {
    path: "/home", //localhost:8080/home
    component: Home,
    children: [
      {
        path: "vendas",
        component: Vendas,
        //localhost:8080/home/vendas
        children: [
          { path: "leads", component: Leads }, //localhost:8080/home/vendas/leads
          { path: "leads/:id", component: Lead, name: 'lead' }, //localhost:8080/home/vendas/leads/1
          { path: "contratos", component: Contratos, name: 'contratos' }, //localhost:8080/home/vendas/contratos
          { path: "", component: VendasPadrao }, //localhost:8080/home/vendas/
        ],
      },
      { path: "servicos", component: Servicos, name: 'servicos' }, //localhost:8080/home/servicos
      { path: "dashboard", component: Dashboard }, //localhost:8080/home/dashboard
    ],
  },
  {
    path: "/login", //localhost:8080/login
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
