<template>
    <div class="">
        <div class="tabs is-toggle is-small is-fullwidth">
            <ul>
                <li v-bind:class="[activeItem=='update'?'is-active' : '' ]" v-on:click="activeTab('update')">
                    <a>
                        <span class="icon is-small"><i class="fas fa-pen" aria-hidden="true"></i></span>
                        <span>UPDATE ITEMS</span>
                    </a>
                </li>
                <li v-bind:class="[activeItem=='add'?'is-active' : '' ]" v-on:click="activeTab('add')">
                    <a>
                        <span class="icon is-small"><i class="fas fa-plus" aria-hidden="true"></i></span>
                        <span>ADD ITEMS</span>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <updateitem-component v-if="activeItem=='update'"></updateitem-component>
            <additem-component v-if="activeItem=='add'"></additem-component>
        </div>
    </div>
</template>
<script>
module.exports = {
    components: {
        'additem-component': httpVueLoader('../admin/additem-component.vue'),
        'updateitem-component': httpVueLoader('../admin/updateitem-component.vue')
    },
    data: function() {
        return {
            activeItem: 'update',
        }
    },
    methods: {
        activeTab(val) {
            this.activeItem = val;
        }
    }
}
</script>
<style>
/* .form-component {
    border: 1px solid #eee;
    padding: 20px;
    border-radius: 5px;
    color: white;
}

.form {
    display: grid;
    grid-row-gap: 10px;
}

.form>input {
    padding: 10px;
    border: none;
    border-radius: 3px;
} */
</style>