# XP-Manager
Microservice for RPG character system

To request data from the microservice, you need to send a POST request accumulating XP and a GET request for the current level.
Example: curl -X POST http://localhost:3000/accumulate-xp -H "Content-Type: application/json" -d '{"xp": 150}'
The microservice will respond to your request with a JSON object containing the requested data.
Below is the UML sequence diagram illustrating the interaction between the client and the microservice:
  +-------+                  +---------------+
  | Client|                  | Microservice  |
  +-------+                  +---------------+
       |                            |
       |     POST/GET data     |
       |--------------------------->|
       |                            |
       |   Process request, fetch   |
       |   data from the database   |
       |                            |
       |<---------------------------|
       |  JSON response with data   |
       |                            |

In a nutshell
Client Initiates Request:
The client sends a POST/GET request to the data endpoint of the microservice.

Microservice Processes Request:
The microservice receives the request, processes it, and retrieves the necessary data from the database or other storage mechanisms.

Microservice Sends Response:
The microservice responds to the client with a JSON object containing the status of the request and the requested data.

Client Receives Response:
The client receives the JSON response and processes the data as needed.
