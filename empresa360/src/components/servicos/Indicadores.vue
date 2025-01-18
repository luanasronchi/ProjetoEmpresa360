<template>
    <div>
    <h5>Componente Indicadores</h5>
    <p>Recuperar as Indicadores do serviço id {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "Indicadores",
  props:['id'],
  created() {
    console.log('Indicadores:', this.id)
  },
};
</script>
