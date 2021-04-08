var root = new Vue({
el: '#root',
 data: {
   albums: [],
   genres:[],


    },
   mounted: function() {
     axios.get('https://flynn.boolean.careers/exercises/api/array/music')
     .then( (resp) => {
        this.albums =  resp.data.response;
        // Bonus 1
        //Ciclo l'array albums per prendere i generi
        this.albums.forEach(( album ) => {
          if (!this.genres.includes(album.genre) ) {
                this.genres.includes(album.genre);
                 console.log(album.genre);
                 console.log(this.genres);
                 }

        });


     });



   },

   methods: {


   }

});
