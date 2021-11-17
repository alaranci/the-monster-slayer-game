const app = Vue.createApp({
  data() {
    return {
      name: "Irlan Navila",
      playerHealth: 100,
      monsterHealth: 100,
      attackLaunch: 0,
      winner: null,
    };
  },

  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },

  methods: {
    playerAttack() {
      this.attackLaunch++;
      const fiery = Math.floor(Math.random() * (12 - 5)) + 5;
      this.monsterHealth -= fiery;
      this.monsterAttack();
    },
    monsterAttack() {
      const fiery = Math.floor(Math.random() * (15 - 8)) + 8;
      this.playerHealth -= fiery;
    },
    playerSpecialAttack() {
      this.attackLaunch++;
      const fiery = Math.floor(Math.random() * (25 - 10)) + 10;
      this.monsterHealth -= fiery;
      this.monsterAttack();
    },
    heal() {
      this.attackLaunch++;
      const healValue = Math.floor(Math.random() * (20 - 8)) + 8;
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.monsterAttack();
    },
    surrender() {},
  },
});

app.mount("#game");
