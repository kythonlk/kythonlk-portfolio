---
title: 'How to Create a React Native Live Chat App with a Go Backend Using WebSocket'
description: 'How to Create a React Native Live Chat App with a Go Backend Using WebSocket'
pubDate: 'Jan 10, 2025'
heroImage: '/data/post-2-image.jpg'
---

## How to Create a React Native Live Chat App with a Go Backend Using WebSocket

Hey there! Today, I’m going to show you how to build a simple live chat app using React Native for the frontend and Go for the backend. Don’t worry if you’re new to this – I’ll walk you through step by step and keep things super easy to follow.

### What We’re Building

We’re creating a live chat app where users can send and receive messages instantly. The messages will update in real time using WebSocket, which is perfect for this kind of app because it allows two-way communication between the client and server.

### What You Need

Here’s what you’ll need to get started:

- Basic knowledge of JavaScript and React.
- Node.js installed on your computer.
- Go installed on your computer.
- A code editor like VS Code.

### Step 1: Setting Up the Backend in Go

Let’s start by creating our WebSocket server using Go. This will handle all the real-time communication.

1. **Create a New Go Project** Open your terminal and run:

   ```bash
   mkdir go-chat-backend
   cd go-chat-backend
   go mod init go-chat-backend
   ```

2. **Install the Gorilla WebSocket Package** We’ll use Gorilla WebSocket to handle WebSocket connections. Install it with:

   ```bash
   go get -u github.com/gorilla/websocket
   ```

3. **Write the WebSocket Server** Create a file named `main.go` and add the following code:

   ```go
   package main

   import (
       "fmt"
       "net/http"
       "github.com/gorilla/websocket"
   )

   var upgrader = websocket.Upgrader{
       CheckOrigin: func(r *http.Request) bool {
           return true
       },
   }

   var clients = make(map[*websocket.Conn]bool)
   var broadcast = make(chan string)

   func handleConnections(w http.ResponseWriter, r *http.Request) {
       conn, err := upgrader.Upgrade(w, r, nil)
       if err != nil {
           fmt.Println("Error upgrading to WebSocket:", err)
           return
       }
       defer conn.Close()

       clients[conn] = true

       for {
           var msg string
           err := conn.ReadJSON(&msg)
           if err != nil {
               fmt.Println("Error reading message:", err)
               delete(clients, conn)
               break
           }
           broadcast <- msg
       }
   }

   func handleMessages() {
       for {
           msg := <-broadcast
           for client := range clients {
               err := client.WriteJSON(msg)
               if err != nil {
                   fmt.Println("Error writing message:", err)
                   client.Close()
                   delete(clients, client)
               }
           }
       }
   }

   func main() {
       http.HandleFunc("/ws", handleConnections)

       go handleMessages()

       fmt.Println("Server is running on port 8080...")
       err := http.ListenAndServe(":8080", nil)
       if err != nil {
           fmt.Println("Error starting server:", err)
       }
   }
   ```

4. **Run Your Server** Start the Go server by running:

   ```bash
   go run main.go
   ```

   Your WebSocket server is now running on `ws://localhost:8080/ws`.

### Step 2: Setting Up the React Native Frontend

Now let’s create the React Native app that will connect to our Go WebSocket server.

1. **Create a New React Native Project** Run the following command to create a new project:

   ```bash
   npx @react-native-community/cli@latest init ChatApp
   cd ChatApp
   ```

2. **Install WebSocket Package** React Native has built-in WebSocket support, so no extra package is needed!

3. **Write the Chat Screen** Open the `App.js` file and replace the content with:

   ```javascript
   import React, { useState, useEffect } from 'react';
   import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

   const App = () => {
       const [message, setMessage] = useState('');
       const [messages, setMessages] = useState([]);
       let ws;

       useEffect(() => {
           ws = new WebSocket('ws://localhost:8080/ws');

           ws.onmessage = (e) => {
               const newMessage = e.data;
               setMessages((prevMessages) => [...prevMessages, newMessage]);
           };

           ws.onerror = (e) => {
               console.log('WebSocket error:', e.message);
           };

           ws.onclose = () => {
               console.log('WebSocket closed');
           };

           return () => {
               ws.close();
           };
       }, []);

       const sendMessage = () => {
           if (message.trim()) {
               ws.send(message);
               setMessage('');
           }
       };

       return (
           <View style={styles.container}>
               <FlatList
                   data={messages}
                   renderItem={({ item }) => <Text style={styles.message}>{item}</Text>}
                   keyExtractor={(item, index) => index.toString()}
               />
               <TextInput
                   style={styles.input}
                   placeholder="Type a message"
                   value={message}
                   onChangeText={setMessage}
               />
               <Button title="Send" onPress={sendMessage} />
           </View>
       );
   };

   const styles = StyleSheet.create({
       container: {
           flex: 1,
           padding: 20,
       },
       message: {
           padding: 10,
           backgroundColor: '#f1f1f1',
           marginVertical: 5,
           borderRadius: 5,
       },
       input: {
           borderWidth: 1,
           borderColor: '#ccc',
           padding: 10,
           marginVertical: 10,
           borderRadius: 5,
       },
   });

   export default App;
   ```

4. **Run the React Native App** Start the app using:

   ```bash
   npx react-native run-android
   ```

   or

   ```bash
   npx react-native run-ios
   ```

### Step 3: Test the App

Now you can open the app and type a message. Your message will appear in the chat instantly. Open the app on multiple devices or emulators to see the real-time messaging in action!

### Final Thoughts

And that’s it! You’ve built a live chat app with a React Native frontend and a Go backend using WebSocket. Feel free to customize the app further, like adding usernames, timestamps, or message styling. Have fun coding, and let me know if you have any questions!
