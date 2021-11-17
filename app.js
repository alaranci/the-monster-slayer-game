const app = Vue.createApp({
  data() {
    return {
      name: "Irlan Navila",
      playerHealth: 100,
      monsterHealth: 100,
    };
  },

  methods: {
    playerAttack() {
      const fiery = Math.floor(Math.random() * (12 - 5)) + 5;
      this.monsterHealth -= fiery;
      this.monsterAttack();
    },
    monsterAttack() {
      const fiery = Math.floor(Math.random() * (15 - 8)) + 8;
      this.playerHealth -= fiery;
    },
    heal() {},
    surrender() {},
  },
});

app.mount("#game");
