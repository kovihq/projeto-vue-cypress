<template>
  <div>
    <div class="input-label">
      Nome:
      <input
        v-model="nome"
        type="text"
        data-test="nome"
      >
    </div>
    <div class="input-label">
      Email
      <input
        v-model="email"
        type="email"
        data-test="email"
      >
    </div>
    <button class="btn" @click="submit">
      Cadastrar
    </button>

    <div v-if="concluido">
      <h1>Sucesso!</h1>
      <p> Nome: {{ nome }} </p>
      <p> Email: {{ email }} </p>
    </div>
    <div v-if="validationForm">
      <h1 class="validation-error">
        Preencha os campos
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      nome: '',
      email: '',
      concluido: false,
      validationForm: false
    }
  },
  methods: {
    submit () {
      if (this.nome && this.email) {
        this.concluido = true
        this.validationForm = false
      } else {
        this.concluido = false
        this.validationForm = true
      }
    }
  }
}
</script>

<style scoped>
.input-label {
  padding-top: 10px;
}
.validation-error {
  color: red !important;
}
.btn {
  margin-top: 10px;
  background: green;
  color: white;
  padding: 8px;
}
.btn:active {
  background: rgb(154, 199, 154);
}
</style>
