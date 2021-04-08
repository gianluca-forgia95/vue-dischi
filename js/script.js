var root = new Vue({
el: '#root',
 data: {


    },
   mounted: function() {
     axios.get('https://flynn.boolean.careers/exercises/api/array/music')
     .then( (resp) => {
       console.log(resp.data.response);
     });

   },

   methods: {

   }

});
