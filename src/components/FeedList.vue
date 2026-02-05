<template>
  <div class="feed-list-container">
    <FeedItem v-for="feed in feedStore.feedList" :key="feed.id" :item="feed" />
  </div>
</template>

<script>
import FeedItem from "./FeedItem.vue";
import { useFeedStore } from "@/store/feed";
export default {
  name: "FeedList",
  data() {
    return {
      feedStore: useFeedStore(),
    };
  },
  components: { FeedItem },
  created() {
    this.feedStore.getFeedList;
  },
};
</script>

<style scoped>
.feed-list-container {
  height: 60vh;
  overflow-y: auto;
}
</style>
