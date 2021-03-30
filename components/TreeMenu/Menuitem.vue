<template>
    <div class="menuitem">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'Menuitem',
}
</script>

<style lang='scss' scoped>
.menuitem{
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #000;
}
</style>