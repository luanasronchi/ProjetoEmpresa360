<template>
  <div>
    <h5>{{ dados.id }} - {{ dados.nome }}</h5>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">ID</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" :value="dados.id">
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">NOME</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control" :value="dados.nome">
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">TELEFONE</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control" :value="dados.telefone">
      </div>
    </div>

    <div class="col-auto">
      <button class="btn btn-primary">Atualizar</button>
    </div>
  </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin'
export default {
  name: 'Lead',
  mixins: [ApiMixin],
  created(){
    this.getDadosApi(`http://localhost:3000/leads/${this.$route.params.id}`)
  }
  /* 
  created(){
    console.log(this.$route.params)
  } 
  */
}
</script>