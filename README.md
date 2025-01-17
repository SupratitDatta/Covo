# Covo

**Covo** is an online Video Calling & Conferencing Platform designed to provide reliable and efficient communication solutions. With a focus on ease of use and quality performance, it offers essential features for both personal and professional use.

## Key Features

- **High-Quality Video & Audio**:
  Experience exceptional video and audio clarity in one-on-one or group conferences.

- **Screen Sharing**: 
  Share your screen during meetings to enhance collaboration and presentations.

- **Integrated Chat**: 
  Interact seamlessly using the built-in chat feature alongside video calls.

- **Cross-Platform Support**: 
  Use Covo from desktops, tablets, or mobile devices without hassle.

- **Meeting Scheduling**: 
  Schedule meetings in advance and receive timely reminders.

- **Meeting Recording**: 
  Record your important meetings and access them later for reference.

- **End-to-End Encryption**: 
  Your communications are secured with top-notch encryption to ensure privacy.

## Tech Stack 

- **Frontend**: Next.js, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes
- **Audio & Video Services**: Stream
- **Authentication**: Clerk
- **Real-Time Communication**: Socket.IO
  
## Installation

Set up Covo locally by following these steps:

### Step 1: Clone the Repository
```bash
git clone https://github.com/SupratitDatta/Covo.git
cd Covo
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables

- Set up Clerk Authentication and Stream services.
- Create a `.env` file in the project root and add all required keys like :
  ```env
  CLERK_SECRET_KEY=your_cleck_api_key
  STREAM_SECRET_KEY=your_stream_api_key
  ```

### Step 4: Start the Application

Start both the client and server:
```bash
npm run dev
```
Access the platform at [http://localhost:3000](http://localhost:3000).

## License & Contact

- This project is created by Supratit Datta in, 2025 All rights reserved.
- Email ID - supratitdatta@gmail.com
