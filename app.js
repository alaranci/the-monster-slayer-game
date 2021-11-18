const app = Vue.createApp({
  data() {
    return {
      name: "Irlan Navila",
      playerHealth: 100,
      monsterHealth: 100,
      attackLaunch: 0,
      winner: null,
      logMessages: [],
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

  computed: {
    playerHealthBar() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    monsterHealthBar() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
  },

  methods: {
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.attackLaunch = 0;
      this.winner = null;
      this.logMessages = [];
    },
    playerAttack() {
      this.attackLaunch++;
      const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "attack", attackValue);
      this.monsterAttack();
    },
    monsterAttack() {
      const attackValue = Math.floor(Math.random() * (15 - 8)) + 8;
      this.playerHealth -= attackValue;
      this.addLogMessage("monster", "attack", attackValue);
    },
    playerSpecialAttack() {
      this.attackLaunch++;
      const attackValue = Math.floor(Math.random() * (25 - 10)) + 10;
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "special attack", attackValue);
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
      this.addLogMessage("player", "heal", healValue);
      this.monsterAttack();
    },
    surrender() {
      this.winner = "monster";
    },

    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        who: who,
        what: what,
        value: value,
      });
    },
  },
});

app.mount("#game");
