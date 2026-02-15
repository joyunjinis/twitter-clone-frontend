<template>
  <div class="feed-list-container">
    <FeedItem
      v-for="feed in feedStore.getFeedList"
      :key="feed.id"
      :item="feed"
    />
  </div>
</template>

<script>
import FeedItem from "./FeedItem.vue";
import { useFeedStore } from "@/store/feed";
export default {
  name: "FeedList",
  components: { FeedItem },
  data() {
    return {
      feedStore: useFeedStore(),
    };
  },
  created() {
    this.feedStore.getFeedData();
  },
};
</script>

<style scoped>
.feed-list-container {
  height: 60vh;
  overflow-y: auto;
}
</style>
