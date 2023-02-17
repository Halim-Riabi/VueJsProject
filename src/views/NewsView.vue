<template>
  <div>
    <section class="article-section">
      <h2 class="section-title">Latest Tech Articles</h2>
      <div class="article-container">
        <article
          class="article-card"
          v-for="article in articles"
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
          image: "https://picsum.photos/200/300",
        },
        {
          id: 2,
          title: "The future of 5G technology",
          desc: "A look into the potential benefits and challenges of 5G technology.",
          image: "https://picsum.photos/200/300",
        },
        {
          id: 3,
          title: "Top 10 tech startups to watch",
          desc: "A list of 10 promising tech startups that have the potential to disrupt their respective industries.",
          image: "https://picsum.photos/200/300",
        },
        {
          id: 4,
          title: "The ethics of using AI in business",
          desc: "A discussion on the ethical considerations of using AI in business decision-making.",
          image: "https://picsum.photos/200/300",
        },
      ],
    };
  },
};
</script>

<style scoped>
.article-section {
  width: 80%;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.article-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.article-card {
  width: calc(33.33% - 2rem);
  background-color: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.article-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.article-title {
  font-size: 1.5rem;
  margin: 1rem;
}

.article-desc {
  font-size: 1.2rem;
  margin: 1rem;
  color: #666;
}

.read-more {
  display: block;
  text-align: center;
  margin: 1rem;
  font-size: 1.2rem;
  color: #6d85b6;
  text-decoration: underline;
}
</style>
