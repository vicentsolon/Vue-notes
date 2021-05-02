<template>
    <img 
        class="avatar-img" 
        :src="url" 
        :style="{
        width: size + 'px',
        height: size + 'px'
    }" >
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
    .avatar-img {
        border-radius: 50%;
        display: block;
        object-fit: cover;
    }
</style>