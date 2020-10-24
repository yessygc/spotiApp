import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
   }

   getQuery( query: string ) {
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAG6KvrWTLgVaJ8aMvEWVeOIIyRv0SmnUc3anpT-k9u8n4q_lpZ-exaYaELDyKqiZKyEXaqucNcT4DZym8'
    });

    return this.http.get(url, { headers });
   }

   getNewReleases(){

    return this.getQuery('browse/new-releases?offset=0&limit=20')
              .pipe( map( data => data['albums'].items));
    
   }


   getArtistas( termino: string ) {

    return this.getQuery(`search?query=${ termino }&type=artist&offset=0&limit=15`)
                .pipe( map( data => data['artists'].items));
    
   }


   getArtista( id: string ) {

    return this.getQuery(`artists/${ id }`)
                // .pipe( map( data => data['artists'].items));
    
   }


   getTopTracks( id: string ) {

    return this.getQuery(`artists/${ id }/top-tracks?market=us`)
                .pipe( map( data => data['tracks']));
    
   }
}
