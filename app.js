const app = Vue.createApp({
  data() {
    return {
      name: "Irlan Navila",
      playerHealth: 100,
      monsterHealth: 100,
      attackLaunch: 0,
    };
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
    heal() {},
    surrender() {},
  },
});

app.mount("#game");
