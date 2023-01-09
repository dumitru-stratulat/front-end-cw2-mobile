let app = new Vue({ // the root Vue instance
    el: '#app', // this links to the <div> with the ID #app
    data: {
        customerName: "",
        customerPhone:0,
        outputMessage:"",
        products:[],
        iconSrc:"icon.png",
        cart: cart,
        searchList: [],
        goToCheckoutPage:false,
    },
    methods: {
        async getLessons() {
            try {
              const response = await fetch('http://localhost:8080/lessons');
              const data = await response.json();
            //   console.log(data);
              this.products = data;
            } catch (error) {
              console.error(error);
            }
          }
    },
    beforeMount(){
        this.getLessons()
     },
})