<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{ name: 'home' }">홈으로 ㄱ</router-link>
    <button @click="toHome">홈으로 ㄱㄱ</button>
    <input @keyup.enter="toHello" type="text" v-model="inputData" />
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      inputData: null,
    };
  },
  methods: {
    toHome() {
      this.$router.push({ name: "home" });
    },
    toHello() {
      this.$router.push({
        name: "hello",
        params: { userName: this.inputData },
      });
    },
  },
};
</script>

