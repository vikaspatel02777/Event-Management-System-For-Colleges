# Event Management System for Colleges

A comprehensive event management platform designed for colleges to organize, manage, and track various types of events including cultural, technical, sports, and seminars.

## 🚀 Features

### For Students
- Browse and register for events
- View event details and schedules
- Manage event tickets
- Track participation history

### For Organizers
- Create and manage events
- Coordinate volunteers
- Track event registrations
- Manage event logistics

### For Administrators
- Approve/reject events
- Manage system dashboard
- Oversee all activities
- Generate reports

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing

### Frontend
- **HTML5** - Markup
- **CSS3** - Styling
- **JavaScript** - Interactivity
- **Live Server** - Development server

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (running on localhost:27017)
- Git

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Event-Management-System.git
   cd Event-Management-System
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set up MongoDB**
   - Ensure MongoDB is installed and running on localhost:27017
   - The application uses a database named "event"

## 🏃‍♂️ Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   node server.js
   ```
   The backend will run on `http://localhost:5500`

2. **Start the frontend server**
   ```bash
   cd frontend
   npx live-server --port=3000
   ```
   The frontend will run on `http://localhost:3000`

## 📁 Project Structure

```
Event_Management_System_For_Colleges/
├── backend/
│   ├── config/
│   │   └── db.js           # Database configuration
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── package.json
│   └── server.js           # Main server file
├── frontend/
│   ├── Admin/              # Admin panel
│   ├── organizer/          # Organizer panel
│   ├── student/            # Student panel
│   ├── index.html          # Landing page
│   └── style.css           # Global styles
├── imgs/                   # Images and assets
└── README.md
```

## 🎯 Event Categories

- **Cultural Events** - Music, dance, drama, and arts
- **Technical Events** - Hackathons, workshops, coding competitions
- **Sports Events** - Indoor and outdoor sports activities
- **Seminars** - Educational and professional development sessions
- **Fun Events** - Entertainment and recreational activities

## 🔗 API Endpoints

### Authentication
- `POST /api/account` - Student authentication
- `POST /api/orgaccount` - Organizer authentication
- `POST /api/adminaccount` - Admin authentication

### Events
- `GET /api/event` - Get all events
- `POST /api/event` - Create new event
- `PUT /api/event/:id` - Update event
- `DELETE /api/event/:id` - Delete event

### Event Registration
- `POST /api/event_register` - Register for event
- `GET /api/event_register/:studentId` - Get student registrations

### Category-specific Routes
- `/api/culturel_event` - Cultural events
- `/api/tech_event` - Technical events
- `/api/sport_event` - Sports events
- `/api/seminar_event` - Seminars
- `/api/fun_event` - Fun events

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the package.json file for details.

## 🙏 Acknowledgments

- MongoDB for the database solution
- Express.js for the robust backend framework
- All contributors and users of this system

## 📞 Support

For any queries or support, please raise an issue in the GitHub repository.
