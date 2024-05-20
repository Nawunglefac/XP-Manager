# XP-Manager
## Microservice for RPG character system

**To request data from the microservice, you need to send a POST request accumulating XP and a GET request for the current level.
**Example: curl -X POST http://localhost:3000/accumulate-xp -H "Content-Type: application/json" -d '{"xp": 150}'
**The microservice will respond to your request with a JSON object containing the requested data.
### Below is the UML sequence diagram illustrating the interaction between the client and the microservice:
 ![image](https://github.com/Nawunglefac/XP-Manager/assets/122139479/b6864d63-7d07-4f17-a9dc-4f22622c0cc4)


#### In a nutshell
1. **Client Initiates Request:
The client sends a POST/GET request to the data endpoint of the microservice.

2. **Microservice Processes Request:
The microservice receives the request, processes it, and retrieves the necessary data from the database or other storage mechanisms.

3. **Microservice Sends Response:
The microservice responds to the client with a JSON object containing the status of the request and the requested data.

4. **Client Receives Response:
The client receives the JSON response and processes the data as needed.
