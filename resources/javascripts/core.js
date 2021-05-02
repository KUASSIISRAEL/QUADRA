new Vue({
  el: '#app',
  data() {
    return {
      search: "",
      searchDatas: [],
      articleList: [],
      categoryList: [],
      articleDesc: {
        name: "",
        description: "",
      },
      config: {
        phaseOne: {
          display1: "",
          display2: "none",
          display3: "none",
          isDisabled: true,
          searchState: "none"
        },
        phaseTwo: {
          categoryTitle: "",
          categoryNumber: 0,
          categoryImage: ""
        }
      }
    }
  },
  mounted() {
    this.initPhaseOne();
  },
  methods: {
    initPhaseOne() {
      axios.get(`/categories`)
        .then((response) => {
          response.data.forEach((item) => {
            this.categoryList.push(item.categories)
          })
        })
        .catch((error) => {})
    },
    articleListResult(guid, category, number, image) {
      this.config.phaseTwo.categoryTitle  = category
      this.config.phaseTwo.categoryNumber = number
      this.config.phaseTwo.categoryImage  = image

      // FECTCH THE DATA BY PROMISE
      axios.get(`/category/${guid}`)
        .then((response) => {
          this.config.phaseOne.display2    = ""
          this.config.phaseOne.display1    = "none"
          this.config.phaseOne.display3    = "none"
          this.config.phaseOne.searchState = "none"

          response.data.forEach((item) => {
            this.articleList = item.article_list.articles
          })
        })
        .catch((error) => {
          this.config.phaseOne.display2    = "none"
          this.config.phaseOne.display1    = ""
          this.config.phaseOne.display3    = "none"
          this.config.phaseOne.searchState = "none"
        })
    },
    searchArticles() {
      this.searchDatas = []

      axios.get(`/search?search=${this.search}`)
        .then((response) => {
          this.config.phaseOne.display2    = "none"
          this.config.phaseOne.display1    = "none"
          this.config.phaseOne.display3    = "none"
          this.config.phaseOne.searchState = ""

          if (response.data !== null) {
            response.data.forEach((item) => {
              this.searchDatas.push(item.articles)
            })
          }
        })
        .catch((error) => {
          this.config.phaseOne.display2    = "none"
          this.config.phaseOne.display1    = ""
          this.config.phaseOne.display3    = "none"
          this.config.phaseOne.searchState = "none"
        })
    },
    getArticleInfos(guid) {
      axios.get(`/article/${guid}`)
        .then((response) => {
          this.config.phaseOne.display2    = "none"
          this.config.phaseOne.display1    = "none"
          this.config.phaseOne.display3    = ""
          this.config.phaseOne.searchState = "none"
          this.articleDesc.name            = response.data[0].articles.name
          this.articleDesc.description     = response.data[0].articles.description
        })
        .catch((error) => {})
    },
    getTheDurationOfArticle(date) {
      let time = new Date(date)
      let now  = new Date()
      let diff = now - time
      return diff.toString()
    }
  }
})