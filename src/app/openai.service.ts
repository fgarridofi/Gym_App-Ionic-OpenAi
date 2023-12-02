import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(private http: HttpClient) {}

  generateCodeFromMuscles(muscleGroups: string[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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',
    });

    const prompt = `Dame una rutina de ejercicios específica para trabajar los músculos ${muscleGroups.join(', ')} en el gimnasio. Limita la respuesta solo al listado de ejercicios en el siguiente formato: 1. Press de banca: 4 Series x 10 Repeticiones, 2. Fondos en paralelas: 3 Series x 12 Repeticiones, 3. Press de banca inclinado: 4 Series x 8 Repeticiones... No incluyas información adicional como calentamientos o consejos.`;    const body = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Eres un entrenador personal de gimnasio.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 200,
      stop: null,
      temperature: 1,
      format: 'json',
    };
    console.log('Body:', body);

    return this.http.post(this.apiUrl, body, { headers });
  }

  generateCodeFromCardio(cardioGroups: string[],objetivo: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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',
    });

    const prompt = `Dame una rutina para realizar el siguiente ejercicio cardiovascular  ${cardioGroups.join(', ')} en el gimnasio ten en cuenta que mi objetivo es  ${objetivo} .  Quiero que el formato de tu respuesta sea el ejercicio a realizar con la velocidad o intensidad y el tiempo, No incluyas información adicional como calentamientos o consejos.`;    
    const body = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Eres un entrenador personal de gimnasio.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 250,
      stop: null,
      temperature: 1,
      format: 'json',
    };
    console.log('Body:', body);

    return this.http.post(this.apiUrl, body, { headers });
  }
}



