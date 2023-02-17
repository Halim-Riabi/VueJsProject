<template>
  <div>
    <div class="filter-bar">
      <label for="consoles-filter">Filter by Console:</label>
      <select id="consoles-filter" v-model="filter">
        <option value="all">All</option>
        <option value="ps5">PlayStation 5</option>
        <option value="xbox-series-x">Xbox Series X</option>
        <option value="nintendo-switch">Nintendo Switch</option>
      </select>
    </div>
    <div class="articles-container">
      <div
        class="article-card"
        v-for="(article, index) in filteredArticles.slice(startIndex, endIndex)"
        :key="index"
      >
        <img :src="article.img" alt="Article Image" />
        <h2 class="article-title">{{ article.title }}</h2>
        <p class="article-desc">{{ article.description }}</p>
        <router-link :to="'/article/' + article.id" class="read-more"
          >Read More</router-link
        >
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage">Previous</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "PlayStation 5 Review",
          description:
            "The latest review of the PlayStation 5 console, read more to find out more.",
          img: "https://via.placeholder.com/300x200",
          console: "ps5",
        },
        {
          id: 2,
          title: "Top 5 Xbox Series X Games",
          description:
            "Find out which games made it to the list of top 5 for the Xbox Series X.",
          img: "https://via.placeholder.com/300x200",
          console: "xbox-series-x",
        },
        {
          id: 3,
          title: "Nintendo Switch: The Portable Console",
          description:
            "Learn more about the versatility and portability of the Nintendo Switch.",
          img: "https://via.placeholder.com/300x200",
          console: "nintendo-switch",
        },
        {
          id: 4,
          title: "The Rise of Cloud Gaming",
          description:
            "Cloud gaming is changing the gaming industry, read more to learn about it.",
          img: "https://via.placeholder.com/300x200",
          console: "all",
        },
        {
          id: 5,
          title: "The Future of Gaming Graphics",
          description:
            "Learn about the advancements in gaming graphics and their future potential.",
          img: "https://via.placeholder.com/300x200",
          console: "all",
        },
      ],
      perPage: 2,
      currentPage: 1,
      filter: "all",
    };
  },
  computed: {
    filteredArticles() {
      if (this.filter === "all") {
        return this.articles;
      }
      return this.articles.filter((article) => article.console === this.filter);
    },
    totalPages() {
      return Math.ceil(this.filteredArticles.length / this.perPage);
    },
    startIndex() {
      return (this.currentPage - 1) * this.perPage;
    },
    endIndex() {
      return this.startIndex + this.perPage;
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage === this.totalPages) {
        return;
      }
      this.currentPage++;
    },
    prevPage() {
      if (this.currentPage === 1) {
        return;
      }
      this.currentPage--;
    },
  },
};
</script>

<style>
.filter-bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
}

.articles-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}

.article-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #f2f2f2;
}

.article-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
}

.article-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.article-desc {
  font-size: 18px;
  margin-bottom: 20px;
}

.read-more {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.pagination button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.pagination span {
  margin: 0 20px;
}
</style>
