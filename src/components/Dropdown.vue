<template>
    <div>
        <v-select :options="options"></v-select>
    </div>
</template>

<script>
export default {
    name: "Dropdown",

    data() {
      return {
        text: '',
        options: [
            {label: 'Capital de giro', code: '1'}, 
            {label: 'Compra de equipamentos', code: '2'},
            {label: 'Compra de estoque', code: '3'},
            {label: 'Consolidação de dívidas', code: '4'},
            {label: 'Expansão', code: '5'},
            {label: 'Marketing e vendas', code: '6'},
            {label: 'Reforma', code: '7'},
            {label: 'Uso pessoal', code: '8'},
            {label: 'Outros', code: '9'}
            ]
      }
    },
}
</script>

<style>
#dropdown-left {
    width: 60%;
}

#dropdown-left button {
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    background-color: transparent;
    color: #646464;
    border: none;
    border-bottom: 2px solid #999;
    border-radius: 0;text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>