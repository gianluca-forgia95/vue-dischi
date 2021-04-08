var root = new Vue({
el: '#root',
 data: {
   albums: [],
   genres: [],
   selected: "",


    },
   mounted: function() {
     axios.get('https://flynn.boolean.careers/exercises/api/array/music')
     .then( (resp) => {
        this.albums =  resp.data.response;
        // Bonus 1
        //Ciclo l'array albums per prendere i generi
        this.albums.forEach(( album ) => {
          if ( !this.genres.includes(album.genre) ) {
                this.genres.push(album.genre);

                 }
          });
       // Bonus 2
       //Ordino gli Album per anno di uscita( dall'anno di uscita piu recente al piu vecchio )
       this.albums.sort( ( olderAlbum , youngerAlbum ) => {
         return youngerAlbum.year - olderAlbum.year;
       });


     });



   },

   methods: {


   }

});
