<template>
  <div>
    <div class="card mb-4">
      <div class="card-header">Contratos</div>
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <label class="form-label">ID Contrato:</label>
            <input type="text" class="form-control" v-model="formPesquisa.id_like" />
          </div>
          <div class="col-6">
            <label class="form-label">Data início:</label>
            <div class="input-group">
              <input type="date" class="form-control" v-model="formPesquisa.data_inicio_gte" />
              <input type="date" class="form-control" v-model="formPesquisa.data_inicio_lte" />
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-primary" @click="pesquisar()">Pesquisar</button>
      </div>
    </div>

    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">LEAD</th>
          <th scope="col">SERVIÇO</th>
          <th scope="col">DATA INÍCIO</th>
          <th scope="col">DATA FIM</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dado in dados" :key="dado.id">
          <td>{{ dado.id }}</td>
          <td>{{ dado.leadId }}</td>
          <td>{{ dado.servicoId }}</td>
          <td>{{ dado.data_inicio }}</td>
          <td>{{ dado.data_fim }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";
export default {
  name: "Contratos",
  mixins: [ApiMixin],
  data: () => ({
    parametrosDeRelacionamento: "_expand=lead&expand=servico",
    formPesquisa: {
      id_like: "",
      data_inicio_gte: "",
      data_inicio_lte: "",
    },
  }),
  methods: {
    pesquisar() {
      const url = `http://localhost:3000/contratos?${this.parametrosDeRelacionamento}`;
      this.getDadosApi(url, this.formPesquisa);
    },
  },
  created() {
    console.log(this.$route);
    const url = `http://localhost:3000/contratos?${this.parametrosDeRelacionamento}`;
    this.getDadosApi(url, this.$route.query);
  },
  beforeRouteUpdate(to, from, next) {
    const url = `http://localhost:3000/contratos?${this.parametrosDeRelacionamento}`;
    this.getDadosApi(url, to.query);

    next();
  },
};
</script>
