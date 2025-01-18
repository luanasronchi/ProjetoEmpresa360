<template>
  <div>
    <h5>Componente Opções</h5>
    <p>Recuperar as Opções do serviço id {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "Opcoes",
  props:['id'],
  created() {
    console.log('Opcoes:', this.id)
  },
};
</script>