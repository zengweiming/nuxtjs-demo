<template>
  <div class="article-page">

    <div class="banner">
      <div class="container">

        <h1>{{article.title}}</h1>

        <ArticleMeta :article="article" />

      </div>
    </div>

    <div class="container page">

      <div class="row article-content">
        <div class="col-md-12" v-html="article.body">
        </div>
      </div>

      <hr />

      <div class="article-actions">
        <ArticleMeta :article="article" />
      </div>

      <div class="row">

        <div class="col-xs-12 col-md-8 offset-md-2">

          <ArticleComments :article="article" />
          
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import {
  getArticle,
} from '@/api/article'
import MarkdownIt from 'markdown-it'
import ArticleMeta from './components/article-meta.vue'
import ArticleComments from './components/article-comments'
export default {
  middleware: 'authenticated',
  name: 'ArticleIndex',
  components: {
    ArticleMeta,
    ArticleComments
  },
  async asyncData ({params}) {
    console.log(params)
    const { data } = await getArticle(params.slug)
    console.log(data)
    const { article } = data
    // 将markdown-it格式字符串转换成html
    let md = new MarkdownIt()
    article.body = md.render(article.body)
    return {
      article
    }
  },
  // 设置网页title，进行网页SEO优化
  // content 文章摘要
  // hid 唯一标识编号，避免子组件meta便签跟父组件相冲突
  head () {
    return {
      title: `${this.article.title} realworld`,
      meta: [
        {hid: '詳情', name: '文章詳情', content: 'zsdf'}
      ]
    }
  }
}
</script>

<style>

</style>