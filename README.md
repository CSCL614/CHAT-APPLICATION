# CHAT-APPLICATION

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: CHAITANYA PADALGADUTHURI

*INTERN ID*: CT08DM341

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 8 WEEKS

*MENTOR*: NEELA SANTOSH

# Real-Time Chat Application using Node.js, Socket.IO, and Bootstrap

  A real-time chat application is an essential tool for modern communication. This project aims to develop a fully functional web-based chat application that allows multiple users to send and receive messages instantly using WebSockets, facilitated by the powerful Socket.IO library. This application integrates both frontend and backend components and provides users with an interactive interface built using HTML, CSS, JavaScript, and Bootstrap for styling.

# Project Structure:
    TASK2/
    ├──chat-app/
       ├─ public/
       │ ├── index.html
       │ ├── style.css
       ├── server.js
       ├── package.json

# Overview

The primary goal of this application is to provide a platform where users can communicate in real time. It mimics the functionality of popular messaging platforms such as WhatsApp Web or Messenger, albeit on a simpler scale. Unlike traditional request-response systems that rely on repeated polling to check for updates, this chat app leverages WebSockets, a protocol that enables two-way interactive communication between the user's browser and the server.

This application is built using Node.js on the backend, which is well-known for its asynchronous event-driven architecture. Socket.IO is used to simplify the process of creating and managing WebSocket connections. On the frontend, the application uses Bootstrap to ensure a responsive and aesthetically pleasing design. Users are prompted to enter a display name (e.g., “User 1” or “User 2”) before joining the chat, and messages are tagged accordingly to identify who sent what.


# Features

# 1.Real-Time Messaging

The key feature of this application is its ability to send and receive messages in real time. Messages are instantly broadcast to all connected clients without any delay, creating a seamless chat experience.

# 2.User Identification

When a user joins the chat, they are prompted to enter a name. This name is attached to every message they send. This allows other users to easily identify who sent each message, making the chat more interactive and personalized.

# 3.Socket.IO Integration

Socket.IO is used on both the server and client sides to handle real-time bi-directional communication. It simplifies the implementation of WebSocket and provides fallback options for clients that don't support WebSockets.

# 4.Bootstrap-Based UI

The frontend is designed using Bootstrap, making it visually appealing and responsive across devices. Cards, buttons, and form elements are styled consistently, and the layout adapts well to various screen sizes, including desktops and mobile phones.

# 5.Device Compatibility

This chat application is accessible from both desktops and smartphones. You can run the server on a PC, turn on the hotspot, and connect a mobile device to that network to test the chat functionality in real-time across different devices.

# 6.Modular Architecture
  The project structure separates frontend and backend logic, making it easier to maintain and scale. Static assets are served from the public folder, and real-time events are managed in server.js.

  # How It Works
  STEP 1:Run the Server on Your PC
          
          1. Open PowerShell or CMD in your project directory (D:\INTERNSHIP\TASK2\chat-app).
          
          2. Run the server with:  node server.js

          3. You should see this output if everything is working:  Server running on http://localhost:3000

STEP 2:Check Your PC's IP Address 

          1. In CMD or PowerShell, run:  ipconfig

          2. Look for the IPv4 Address under your Wi-Fi adapter (it should be something like 192.168.x.x).

STEP 3:Connect from Your Mobile Device

        1. Open a browser on your mobile device.

        2. Type in the IP address of your PC and the port (:3000), for example:  http://192.168.x.x:3000
         
         (Replace 192.168.x.x with the actual IP address you got from ipconfig.)

STEP 4:Test the Real-Time Chat

        1. You should now see the chat interface on your mobile device.

        2. Send a message from one device (either PC or mobile), and it should appear instantly on the other device. This proves the real-time chat is working!


# Real-World Applications

Real-time chat applications are used in customer support systems, social media platforms, collaborative workspaces, and multiplayer gaming. Learning to build such an app provides valuable insight into real-time systems, client-server communication, event-driven programming, and responsive design.

# Conclusion

This project serves as a foundational experience in full-stack web development with a focus on real-time communication. By combining Node.js, Socket.IO, and Bootstrap, it demonstrates how to create a dynamic, user-friendly web application capable of real-time interactions. It’s an excellent project for understanding WebSockets, learning server-client architecture, and gaining hands-on experience in modern web development.


# OUT PUT

# CLIENT-1 VIEW:
![Image](https://github.com/user-attachments/assets/8fabc386-39a4-4e8e-8fd1-7935fd2b4404)

# CLIENT-2 VIEW:
![Image](https://github.com/user-attachments/assets/0aca953f-7935-4dbc-9975-6167b3680aff)

# REAL-TIME CHAT:
![Image](https://github.com/user-attachments/assets/ca535b04-f1e4-4a26-a351-b1fb15964471)
