<template>
  <div>
    <!-- 스타일 바인딩 ':class' 사용  -->
    <span
      @click="updateTodoStatus"
      :class="{ 'is-completed': todo.isCompleted }"
    >
      {{ todo.title }}
    </span>
    <button @click="deleteTodo">X</button>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    todo: Object,
  },
  methods: {
    deleteTodo() {
      // console.log("삭제 메서드 호출");
      this.$store.dispatch("deleteTodo", this.todo);
      // action을 쓰지 않고 아래처럼 바로 mutation으로 보내기 가능!
      // this.$store.commit("DELETE_TODO", this.todo);
    },
    updateTodoStatus() {
      this.$store.dispatch("updateTodoStatus", this.todo);
    },
  },
};
</script>

<style>
.is-completed {
  text-decoration: line-through;
}
</style>