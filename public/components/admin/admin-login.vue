<template>
    <div class="sign-class">
        <strong>{{title}}</strong>
        <h3>{{status}}</h3>
        <div v-show="!card" class="beforelogin">
            <input type="text" placeholder="username" v-model="username">
            <input type="password" placeholder="password" v-model="password">
            <button v-on:click="customSignIn()">SignIn</button>
        </div>
        <div v-show="card" class="afterlogin">
            <button v-on:click="googleSignOut()">SignOut</button>
        </div>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            title: "Admin Login",
            username: "",
            password: "",
            card: false,
            status: "",
        }
    },
    methods: {
        customSignIn() {
            firebase.auth()
                .signInWithEmailAndPassword(this.username, this.password)
                .then((res) => {
                    console.log("loggedin...");
                    this.status = "Logged In"
                })
                .catch(function(error) {
                    console.log("failed to login");
                    this.status = "failed to login"
                });
        },
        googleSignOut() {
            firebase.auth().signOut().then(function() {
                location.reload();
                this.status = "Signed Out"
            }).catch(function(error) {
                // An error happened.
            });
        },
        checkIfLogin() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setUserInfo();
                    this.status = "Logged In"
                } else {
                    this.status = "Signed Out"
                    console.log("User loggedout");
                }
            });
        },
        setUserInfo() {
            this.card = !this.card;
        },
        setDisplayCard() {

        }
    },
    computed: {
        dummyProps: function(item) {
            return null;
        }
    },
    mounted: function() {
        this.checkIfLogin();
    }
}
</script>
<style>
.user-img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
}

.hidden-info {
    display: none;
}

.hidden-info>span:nth-child(1) {
    grid-column: 2;
    grid-row: 1;
    align-self: end;
}

.hidden-info>span:nth-child(2) {
    grid-column: 2;
    grid-row: 2;
    font-size: 12px;
    color: #aaa;
}

.signOut {
    width: auto;
    height: 24px;
    grid-column: 3;
    grid-row: 1/3;
    align-self: center;
    cursor: pointer;
}
</style>