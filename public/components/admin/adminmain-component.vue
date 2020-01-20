<template>
    <div class="columns is-fullheight">
        <div class="column is-2">
            <div>
                <aside class="menu">
                    <p>
                        {{title}}
                    </p>
                    <p class="menu-label">
                        General
                    </p>
                    <ul class="menu-list">
                        <li><a>Dashboard</a></li>
                        <li><a>Customers</a></li>
                    </ul>
                    <p class="menu-label">
                        Transactions
                    </p>
                    <ul class="menu-list">
                        <li><a>Payments</a></li>
                        <li><a>Transfers</a></li>
                        <li><a>Balance</a></li>
                    </ul>
                </aside>
            </div>
        </div>
        <div class="column">
            <div class="columns">
                <div class="column">
                    <itemlist-component></itemlist-component>
                </div>
                <div class="column is-3">
                    <updateitem-component></updateitem-component>
                    <br><br>
                    <span class="title is-6 is-spaced">
                        <span class="has-text-grey-light bd-anchor-link">
                            #
                        </span>
                        <span class="bd-anchor-name">
                            ADD ITEMS
                        </span>
                    </span>
                    <additem-component></additem-component>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            title: 'ADMIN PAGE'
        }
    }
}
</script>
<style>
.active-edit {
    border: 1px solid #4a148c;
    background: #eee;
}

/* .collection { 
    border-radius: 5px;
}

.collection>img {
    width: 100%;
    object-fit: cover;
}

.collection>div {
    padding: 20px;
} */


/* .collection:hover {
    background: #eee;
    color: black;
} */
/* 
.photos {
    height: 200px;
    background-size: cover;
    background-position: center;
} */
</style>