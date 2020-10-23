import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAG6KvrWTLgVaJ8aMvEWVeOIIyRv0SmnUc3anpT-k9u8n4q_lpZ-exaYaELDyKqiZKyEXaqucNcT4DZym8'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?offset=0&limit=20', { headers } );
    
   }


   getArtista( termino: string ) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAG6KvrWTLgVaJ8aMvEWVeOIIyRv0SmnUc3anpT-k9u8n4q_lpZ-exaYaELDyKqiZKyEXaqucNcT4DZym8'
    });

    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=15`, { headers } );

    
   }
}
