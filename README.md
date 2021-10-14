Za nalogo je potrebno implementirati spletno aplikacijo SPA (single-page app) s katero lahko pridobimo trenutno vremensko stanje poljubnega mesta. Aplikacija naj ponuja naslednje zmogljivosti:

- iskalnik kamor lahko vpišemo ime mesta, za katerega nas zanima vreme
- prikaz vremena za trenutno izbrano veljavno mesto
- zadnjih 5 uspešnih iskalnih nizov, za katere je API vrnil rezultat
- s klikom na prejšnji iskalni niz se naj v iskalnik prepiše vrednost iskanega mesta in hkrati prikaže vreme za to mesto.

Za pridobivanje podatkov o vremenu se lahko uporabi OpenWeather API, kjer je potrebno le kreirati "free" account, s katerim se pridobi veljavni APP ID, ki ga potrebujemo za uporabo naslednjega APIja:
https://openweathermap.org/current#name

Podatki o vremenu naj bodo v metričnih enotah (Celzij). Prikažejo se naj vsaj naslednji podatki:

- temp
- feels_like
- temp_min
- temp_max
- humidity

Oblikovanje (css) aplikacije ni pomembno oziroma je prepuščno tebi, pomembno je predvsem to, da ponuja zgoraj opisane zmogljivosti.

Za implementacijo lahko uporabiš enega od naslednjih frameworkov, izbira je prepuščena tebi:

- VueJS
- React

Ocenjuje se:

- arhitektura aplikacije
- primerna uporaba UI komponent
- berljivost kode
