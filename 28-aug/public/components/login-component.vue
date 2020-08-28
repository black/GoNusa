<template>
    <div class="sign-class">
        <strong v-show="!card">SignIn</strong>
        <div v-show="card">
            <img class="user-img" v-bind:src="userimage" alt="">
        </div>
        <div class="hidden-info">
            <span>{{username}}</span>
            <span>{{usermail}}</span>
        </div>
        <div  v-show="!card" class="beforelogin">
            <img class="signIn" src="../img/google.png" alt="" v-on:click="googleSignIn()"> 
        </div>
            <img class="signOut" src="../img/sign-out.svg" v-on:click="googleSignOut()">
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            title: "Registration",
            verified: "Not verified",
            userimage: "",
            username: "",
            usermail: "",
            card:false,
        }
    },
    methods: {
        googleSignIn() {
            let authProvider = new firebase.auth.GoogleAuthProvider;
            firebase.auth().signInWithPopup(authProvider)
                .then((res) => {
                    console.log(res);
                    this.setUserInfo(user);
                }).catch((err) => {
                    console.log('err:', err);
                });
        },
        googleSignOut() {
            firebase.auth().signOut();
            location.reload();
        },
        checkIfLogin() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setUserInfo(user);
                } else {
                    console.log("User loggedout");
                }
            });
        },
        setUserInfo(user) {
            this.card = !this.card;
            this.userimage = user.photoURL;
            this.username = user.displayName;
            this.usermail = user.email           
        },
        setDisplayCard(){ 

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
 
/*.signIn {
    padding: 5px;
    background: #fff;
    width: 24px;
    height: 24px;
    border-radius: 5px;
    cursor: pointer;
} */

.user-img { 
    width: 54px;
    height: 54px;
    border-radius: 50%;
}

.hidden-info{
    display: none;
}

.hidden-info>span:nth-child(1) {
    grid-column: 2;
    grid-row: 1;
    align-self:end;
}

.hidden-info>span:nth-child(2) {
    grid-column: 2;
    grid-row: 2;
    font-size: 12px;  
    color: #aaa;
}
 
.signOut{ 
    width: auto;
    height: 24px;
    grid-column: 3;
    grid-row: 1/3; 
    align-self: center;
    cursor: pointer;
}

</style>