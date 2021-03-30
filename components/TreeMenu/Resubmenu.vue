<template>
    <submenu>
        <template #title>{{data.title}}</template>
        <template v-for="child of data.children">
            <menuitem :key=child.id v-if="!child.children">
            {{child.title}}
            </menuitem>
            <resubmenu v-else :key="child.id" :data="child"></resubmenu>
        </template>
    </submenu>
</template>

<script>
export default {
    name:'Resubmenu',
    props:{
        data:Object
    }
}
</script>

<style>

</style>