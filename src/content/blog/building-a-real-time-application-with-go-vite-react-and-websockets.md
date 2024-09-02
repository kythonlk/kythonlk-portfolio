---
title: 'Building a Real-Time Application with Go, Vite React, and WebSockets'
description: '<p>Setting Up Your Development Environment Embarking on the journey to build a real-time application with Go, Vite React, and WebSockets necessitates a proper development environment setup. Initially, installing Go is imperative. Head to the official Go website, download the installer for your operating system, and follow the installation instructions. Once installed, you can verify the […]</p>
'
pubDate: 'Friday, July 29, 2024'
heroImage: '/data/post-2-image.jpg'
---

<h2>Setting Up Your Development Environment</h2>
<p>Embarking on the journey to build a real-time application with Go, Vite React, and WebSockets necessitates a proper development environment setup. Initially, installing Go is imperative. Head to the official Go website, download the installer for your operating system, and follow the installation instructions. Once installed, you can verify the installation by running <code>go version</code> in your terminal.</p>
<p>Next, set up your Go workspace. Create a directory to house your Go projects, then set the <code>GOPATH</code> environment variable to this directory. Within your workspace, create a basic Go server to manage application logic. Start by creating a new directory for your project and inside, add a main Go file. For example, in <code>main.go</code>, write a minimal HTTP server to listen for client connections:</p>

```go
package main

import (
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello, World!"))
}

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
```
</p>
<p>Switching gears, we focus on Vite and React installation. Begin by installing Node.js and npm, which are prerequisites for Vite. Execute <code>npm install -g create-vite</code> to add Vite globally, then initialize a new Vite React project by running <code>npm init vite@latest my-vite-app --template react</code>. Change into the new directory and install dependencies with <code>npm install</code>. Start the development server with <code>npm run dev</code> to ensure it functions correctly.</p>
<p>Integration between the Go backend and the Vite React frontend comes next. Configure the Vite server to proxy API requests to the Go server for seamless communication. Modify the <code>vite.config.js</code> file to include:</p>
<p>

  ```js
  export default {
    server: {
      proxy: {
        '/api': 'http://localhost:8080',
      },
    },
  };
  ```
</p>
<p>To facilitate real-time communication, we leverage WebSockets. Install the necessary WebSocket libraries by running <code>go get github.com/gorilla/websocket</code> for the Go server and <code>npm install socket.io-client</code> for the Vite React client. In your Go server, set up a WebSocket endpoint by replacing the HTTP handler with a WebSocket handler:</p>

```go
package main

import (
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{}

func wsHandler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}
	defer conn.Close()

	for {
		_, message, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			break
		}
		log.Printf("Received: %s", message)
		if err := conn.WriteMessage(websocket.TextMessage, message); err != nil {
			log.Println(err)
			break
		}
	}
}

func main() {
	http.HandleFunc("/ws", wsHandler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
```

</p>
<p>On the client side, establish a WebSocket connection within your React component, which will listen for messages and send messages to the server:</p>
<p>

```js
import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('ws://localhost:8080');

const App = () => {
  useEffect(() => {
    socket.on('message', (message) => {
      console.log('Received:', message);
    });
    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('message', 'Hello, WebSocket!');
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default App;
```
</p>
<p>With these steps completed, your development environment is now ready, and you have a basic framework in place to further build your real-time application with Go, Vite React, and WebSockets. </p>
<h2>Implementing Real-Time Features</h2>
<p>To illustrate the implementation of real-time features using Go, Vite React, and WebSockets, let’s consider a straightforward example: a real-time chat application. This will allow us to understand how these technologies integrate to provide a seamless experience.</p>
<p>First, we start with the backend. In Go, WebSocket handlers can be created using the <code>github.com/gorilla/websocket</code> package. This package facilitates the handling of WebSocket connections. Here’s a simple example:</p>
<p>

```go
package main

import (
	"log"
	"net/http"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{}

func handleConnections(w http.ResponseWriter, r *http.Request) {
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
	}
	defer ws.Close()
	for {
		_, msg, err := ws.ReadMessage()
		if err != nil {
			log.Println(err)
			break
		}
		log.Printf("Received: %s", msg)
	}
}

func main() {
	http.HandleFunc("/ws", handleConnections)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
```
</p>
<p>In the example above, the WebSocket handler upgrades HTTP connections to WebSocket connections. It reads messages from the client, logging received messages to the server’s console. Enhancing this to support broadcasting messages to all connected clients, we introduce a broadcast channel and a list of active clients:</p>
<p>

```go
package main

import (
	"log"
	"net/http"
	"github.com/gorilla/websocket"
)

var clients = make(map[*websocket.Conn]bool)
var broadcast = make(chan []byte)

func handleMessages() {
	for {
		msg := <-broadcast
		for client := range clients {
			err := client.WriteMessage(websocket.TextMessage, msg)
			if err != nil {
				log.Printf("Error: %v", err)
				client.Close()
				delete(clients, client)
			}
		}
	}
}

func handleConnections(w http.ResponseWriter, r *http.Request) {
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
	}
	defer ws.Close()
	clients[ws] = true
	for {
		_, msg, err := ws.ReadMessage()
		if err != nil {
			log.Printf("Error: %v", err)
			delete(clients, ws)
			break
		}
		broadcast <- msg
	}
}

func main(){
	go handleMessages()
	http.HandleFunc("/ws", handleConnections)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
  ```
</p>
<p>Now, switching to the Vite React side, we need to establish WebSocket connections and handle state updates. Here’s a basic implementation:</p>
<p>

```js
  import React, { useState, useEffect } from 'react';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080/ws');

    ws.onmessage = (event) => {
      const newMessage = event.data;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return () => ws.close();
  }, []);

  const sendMessage = (message) => {
    const ws = new WebSocket('ws://localhost:8080/ws');
    ws.onopen = () => ws.send(message);
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => sendMessage(input)}>
        Send
      </button>
    </div>
  );
};

export default App;
  ```
</p>
<p>In this React example, the WebSocket connection is established in the <code>useEffect</code> hook, where it listens for incoming messages and updates the component’s state. The UI updates in real-time as new messages arrive, demonstrating the responsiveness of our application.</p>
<p>Error handling plays a crucial role in maintaining a seamless real-time experience. Ensure to handle connection errors gracefully, attempt reconnections when necessary, and provide user feedback to cover scenarios where communication might be interrupted.</p>
<p>Following best practices such as clean state management, efficient resource cleanup (like closing WebSocket connections correctly), and only updating the state when necessary, can significantly contribute to an optimal user experience in a real-time application.</p>
</p>
