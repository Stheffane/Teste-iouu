<template>
    <b-container fluid>
            <div>
                <label class="label-textarea">Explique melhor abaixo para aumentar suas chances</label>
            </div>
            <div>
                <b-form-textarea
                    id="textarea-large"
                    size="lg"
                    rows="5"
                    max-rows="5"
                    placeholder=""
                ></b-form-textarea>
            </div>
    </b-container>
</template>

<script>
export default {
    nome: "Textarea",

}
</script>

<style scoped>
label.label-textarea {
    font-size: 24px;
    line-height: 1.6;
    letter-spacing: -.3px;
    margin-bottom: 15px;
    color: #646464;
    padding: 5px 10px;
}

.container-fluid {
    padding: 0;
}
</style>