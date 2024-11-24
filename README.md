# Proiect
ADMINISTRAREA DE LOCURI DE PARCARE CU GOOGLE MAPS
Am ales sa dezvolt acesta tema de proiect avand in vedere ca exemplu parcarile inchise destinate cladirilor de birouri sau centre comerciale. Astfel avand in vedere ca o parcare subterana este limitata ca numar de locuri de parcare putem monitoriza in timp real numarul de locuri disponibile cat si pozitia acestora in parcare.
Pentru managementul locurilor de parcare vom folosi API-urile din Google Maps pentru a permite integrarea si manupularea datelor geospatiale.
A.	Baza relationala (ORM)
Vom folosi un sistem de gestionare a bazelor de date pentru a stoca datele și vom utiliza un ORM pentru a interactiona cu aceasta. Vom crea trei entitati  principale utilizand SQL si vom face implementare in backend cu Sequilize  Node.sj.
Entitatile vor avea urmatoarea structura:
*locuri_de_parcare; Aceasta entitate va stoca informatii despre locurile de parcare disponibile si va avea o relatie de one-to-many cu rezervari(fiecare rezervare are loc pe un loc de parcare specificat)
*utilizator; Stocheaza informatii despre utilizatorii locurilor de parcare si are o relatie one-to many cu rezervari (un utilizator face mai multe rezervari)
*rezervari;Stocheaza informatii despre rezervarile efectuare de utilizatori avand o relatie Many-to-one(un utilizator poate face mai multe rezervari)
B.	Operatii expuse prin interfata REST
Vom crea un API REST care va efectua operatii asupra entitatilor user si parcare utilizand Express.js(Node.js).Operatiuni de interes in cadrul aplicatiei:
-	Obtinere lista de utilizatori
-	Obtinere detalii specifice utilizator
-	Creare utilizator nou
-	Actualizare utiliaztor existent
-	Stergere utilizator existent
-	Obtinere locuri de parcare asociate unui utilizator
-	Adaugarea parcare pentru un utilizator
-	Stergere parcare pentru un utilizator
C.Front-end SPA cu React.js
Vom crea o aplicatie front-end tip SPA (single page aplication) folosind React.js. Acesta va utiliza API-ul prezentat anterior si va permite utilizatorilor sa interactioneze cu datele.
Pe partea de front end ne dorim sa vedem:
-	Vizualizarea utilizatorilor si locurilor de parcare ale acestora
-	Adaugarea sau stergerea unei loc de parcare aferent unui utilizator
-	Navigarea intre pagini pentru a vizualiza utilizatorii si locurilor de parcare

D.	Integrarea cu un serviciu extern
Este posibila integrarea unui serviciu externe de geolocatie cum ar fi Google Maps API pentru a adauga locatii exacte la locuri de parcare sau putem opta si pentru un serviciu de plati. Pentru aplicatia de plati voi folosi un serviciu extern de plata Stripe sau Paypal
E.	Raportari statice
Vom crea si optiunea de a emite rapoarte statice utilizant sql pentru a vedea si interpreta datele  si evolutia acestora in timp.La final aceste raportari vor fi transmise catre utilizatorii finali sub forma de grafice tabele. Vom folosi bibioteci  specifice pentru a a realiza aceste grafice pe front-end (React/Angular ; Chart, D3, Recharts)
F.	Testarea
Testarea aplicatie este un punct foarte importanta si de aceea trebuie tratat cu maxima importanta. Testarea trebuie sa inclusa atat functionalizatea pe front-end cat si back-end.
Vom folosi Jest pentru teste unitare iar pentru testele de integrare Supertest(veridicare API). Pentru testele de integrare mai putem utiliza instrumente de testare snd-to-end ca Cypress sau Playwright.Dupa ce teste au fost scrise putem folsoi un instrumentde  masurare a test coverage, Jest ce poate emite un raport de test coverage generat automat.
