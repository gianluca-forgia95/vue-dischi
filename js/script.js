var root = new Vue({
el: '#root',
 data: {
   albums: [],


    },
   mounted: function() {
     axios.get('https://flynn.boolean.careers/exercises/api/array/music')
     .then( (resp) => {
        this.albums =  resp.data.response;
     });

   },

   methods: {

   }

});
