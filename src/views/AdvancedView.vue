<template>
  <div>
    <section class="article-section">
      <h2 class="section-title">Latest Tech Articles</h2>
      <div class="article-filters">
        <select v-model="selectedCategory" @change="filterArticles">
          <option value="">All Categories</option>
          <option value="ai">AI</option>
          <option value="5g">5G</option>
          <option value="startups">Startups</option>
          <option value="ethics">Ethics</option>
        </select>
      </div>
      <div class="article-container">
        <article
          class="article-card"
          v-for="article in filteredArticles"
          :key="article.id"
        >
          <img :src="article.image" alt="Article Image" />
          <h3 class="article-title">{{ article.title }}</h3>
          <p class="article-desc">{{ article.desc }}</p>
          <router-link :to="`/article/${article.id}`" class="read-more"
            >Read More</router-link
          >
        </article>
      </div>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">
          Previous
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          Next
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "How AI is changing the tech industry",
          desc: "A brief overview of how AI is transforming the tech industry.",
          category: "ai",
          image: "https://picsum.photos/200/300",
        },
        {
          id: 2,
          title: "The future of 5G technology",
          desc: "A look into the potential benefits and challenges of 5G technology.",
          category: "5g",
          image: "https://picsum.photos/200/300",
        },
        {
          id: 3,
          title: "Top 10 tech startups to watch",
          desc: "A list of 10 promising tech startups that have the potential to disrupt their respective industries.",
          category: "startups",
          image: "https://picsum.photos/200/300",
        },
        {
          id: 4,
          title: "The ethics of using AI in business",
          desc: "A discussion on the ethical considerations of using AI in business decision-making.",
          category: "ethics",
          image: "https://picsum.photos/200/300",
        },
      ],
      selectedCategory: "",
      currentPage: 1,
      articlesPerPage: 2,
    };
  },
  computed: {
    filteredArticles() {
      return this.selectedCategory
        ? this.articles.filter(
            (article) => article.category === this.selectedCategory
          )
        : this.articles;
    },
    totalPages() {
      return Math.ceil(this.filteredArticles.length / this.articlesPerPage);
    },
  },
  methods: {
    filterArticles() {
      this.currentPage = 1;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style>
.article-section {
  padding: 50px;
  text-align: center;
}

.section-title {
  font-size: 36px;
  margin-bottom: 20px;
}

.article-filters {
  margin-bottom: 20px;
}

.article-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.article-card {
  width: 30%;
  margin: 20px;
  text-align: left;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.article-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.article-title {
  font-size: 24px;
  margin-top: 20px;
}

.article-desc {
  margin: 20px;
  font-size: 14px;
  text-align: justify;
}

.read-more {
  display: block;
  margin: 20px auto;
  font-size: 18px;
  color: blue;
  text-decoration: none;
}

.pagination {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ccc;
}

button[disabled] {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
