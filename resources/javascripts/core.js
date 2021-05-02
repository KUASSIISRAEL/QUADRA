new Vue({
  el: '#app',
  data() {
    return {
      search: "",
      searchDatas: [],
      articleList: [],
      categoryList: [],
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
        .catch((error) => {
          // console.log(error)
        })
    },
    articleListResult(guid, category, number, image) {
      this.config.phaseTwo.categoryTitle = category
      this.config.phaseTwo.categoryNumber = number
      this.config.phaseTwo.categoryImage = image

      // FECTCH THE DATA BY PROMISE
      axios.get(`/category/${guid}`)
        .then((response) => {
          this.config.phaseOne.display2 = ""
          this.config.phaseOne.display1 = "none"
          this.config.phaseOne.display3 = "none"
          response.data.forEach((item) => {
            this.articleList = item.article_list.articles
          })
        })
        .catch((error) => {
          this.config.phaseOne.display2 = "none"
          this.config.phaseOne.display1 = ""
          this.config.phaseOne.display3 = "none"
          console.log(error)
        })
    },
    searchArticles() {
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

          console.log(error)
        })
    }
  }
})