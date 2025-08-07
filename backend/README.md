Backend - Actvity Tracker

Java Spring Boot backend za aplikacjo Activity Tracker.

## Kako zagnati
### Zahteve
- Java 17 ali novejša
- Maven (ali uporabi priloženi 'mvnw')
- Internetna povezava (za prenos odvisnosti)

### Zagon zaledja:

Na Unix/Mac sistemih:
```bash
./mvnw spring-boot:run
```

Na Windows sistemih:
mvnw spring-boot:run

Ko se zažene, bo backend dostopen na: http://localhost:8080/activities

API endpoints:
- GET /activities - pridobi vse aktivnosti
- POST /activities - doda novo aktivnost
- DELETE /activities/{id} - izbriše aktivnost po ID-ju

Opomba
Frontend aplikacija mora biti zagnana ločeno in mora dostopati do tega backenda strežnika preko http://localhost:8080