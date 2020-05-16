new Vue({
    el: '#app',
    data: {
        gameInProgress: false,
        playerHealth: 100,
        monsterHealth: 100,
        history: []
    },
    watch: {
        monsterHealth: function(value){
            console.log("Monster Health: " + value);
            if(value <= 0){
                this.monsterHealth = 0;
                this.gameInProgress = false;
                this.history.push("Monster is dead. Player Wins!");
                alert("You WIN!");
            }
        },
        playerHealth: function(value){
            console.log("Player Health: " + value);
            if(value <= 0 && this.monsterHealth > 0){
                this.playerHealth = 0;
                this.gameInProgress = false;
                this.history.push("Player is dead. Monster Wins!");
                alert("You Lose.");
            }
        }
    },
    methods: {
        startGame: function(){
            console.log("Starting Game.");
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameInProgress = true;
            this.history = ["Game Started."];
        },
        attack: function(){
            if(this.gameInProgress){
                console.log("Attacking.");
                var damage = this.generateRandomDamage();
                this.history.push("Player attacking Monster for " + damage + ".");
                this.monsterHealth -= damage;
                var damage = this.generateRandomDamage();
                this.history.push("Monster attacking Player for " + damage + ".");
                this.playerHealth -= damage;
            }
        },
        specialAttack: function(){
            if(this.gameInProgress){
                console.log("Special Attack.");
                var damage = this.generateRandomDamage() * 2;
                this.history.push("Player attacking Monster for " + damage + ".");
                this.monsterHealth -= damage;
                var damage = this.generateRandomDamage() * 2;
                this.history.push("Monster attacking Player for " + damage + ".");
                this.playerHealth -= damage;
            }
        },
        heal: function(){
            if(this.gameInProgress){
                console.log("Healing.");
                this.history.push("Healing player for 10hp.");
                this.playerHealth += 10;
                var damage = this.generateRandomDamage();
                this.history.push("Monster attacking Player for " + damage + ".");
                this.playerHealth -= damage;
            }
        },
        giveUp: function(){
            if(this.gameInProgress){
                console.log("Giving Up.");
                this.history.push("Gave Up - Monster Wins!");
                this.gameInProgress = false;
            }
        },
        generateRandomDamage: function(){
            return Math.trunc(Math.random() * 10) + 5;
        }
    }
});