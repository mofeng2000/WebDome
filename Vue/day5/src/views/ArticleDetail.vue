<template>
  <div class="article-detail-page" v-if="ArticleDetail.id">
    <nav class="nav"><span class="back" @click="$router.back()">&lt;</span> 面经详情</nav>
    <header class="header">
      <h1>{{ ArticleDetail.stem }}</h1>
      <p>{{ArticleDetail.createdAt}}| {{ ArticleDetail.views }} 浏览量 | {{ ArticleDetail.likeCount}} 点赞数</p>
      <p>
        <img
            :src="ArticleDetail.creatorAvatar"
            alt=""
        />
        <span>{{ ArticleDetail.creatorName }}</span>
      </p>
    </header>
    <main class="body">
      {{ ArticleDetail.content}}
    </main>
  </div>
</template>

<script>
import axios from "axios";
// 请求地址: https://mock.boxuegu.com/mock/3083/articles/:id
// 请求方式: get
export default {
  name: "articleDetail",
  data() {
    return {
      ArticleDetail:{},
    }
  },
  async created() {
    const  res= await axios.get("https://mock.boxuegu.com/mock/3083/articles/"+this.$route.params.id);
    this.ArticleDetail=res.data.result;
    console.log(res);
  }
}
</script>

<style lang="less" scoped>
.article-detail-page {
  .nav {
    height: 44px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 44px;
    text-align: center;

    .back {
      font-size: 18px;
      color: #666;
      position: absolute;
      left: 10px;
      top: 0;
      transform: scale(1, 1.5);
    }
  }

  .header {
    padding: 0 15px;

    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  .body {
    padding: 0 15px;
  }
}
</style>