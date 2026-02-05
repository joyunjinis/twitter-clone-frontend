<template>
  <div>
    <div class="title-container">
      <h2>Home</h2>
      <div>{{ userName }}님</div>
    </div>
    <TweetBar />
    <FeedList />
  </div>
</template>

<script>
import TweetBar from "@/components/TweetBar.vue";
import FeedList from "@/components/FeedList.vue";
import { useUserStore } from "@/store/user";
import { useFeedStore } from "@/store/feed";
export default {
  name: "MainPage",
  data() {
    return {
      userStore: useUserStore(),
      FeedStore: useFeedStore(),
    };
  },
  components: { TweetBar, FeedList },
  created() {
    this.userStore.getUserName;
  },
};
</script>

<style scoped>
.title-container {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
