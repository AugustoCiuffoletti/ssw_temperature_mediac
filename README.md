# Calcolo temperatura media con un callback

Una soluzione 'convergente' del calcolo della media con un esempio di callback. Il dato mostrato come media viene alterato via via che arrivano nuovi dati, acquisiti con una richiesta asincrona, e alla fine converge al dato atteso.

Il metodo 'doCity' realizza la request caricando i dati di una città ed applica a questi una funzione 'callback' passata come parametro. La funzione 'doCity' viene poi chiamata in due situazioni diverse con diverse funzioni di 'callback'. Nella funzione di visualizzazione 'display' la funzione callback visualizza il dato, nella funzione di calcolo della media 'media' accumula i risultato per il calcolo della media. In ambedue i casi la funzione di callback è scritta come arrow function nella chiamata alla funzione 'doCity'. Il vantaggio è che il codice per l'accesso al data remoto viene scritto una volta sola, e poi adattato alla funzione specifica con il callback.

Attenzione, la API key nel codice non è valida: collegarsi al servizio https://openweathermap.org/ per registrarsi ed ottenerne una gratuitamente.


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-sswtmc)
