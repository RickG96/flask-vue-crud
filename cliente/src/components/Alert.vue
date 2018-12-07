<template>
    <div>
        <b-alert variant="succes" show>{{ message }}</b-alert>
        <br>
    </div>
</template>

<script>
    export default {
        props: ['message']
    }
</script>