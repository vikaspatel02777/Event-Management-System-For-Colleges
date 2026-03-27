const express = require('express');
const app = express();
const cors = require("cors");
const connectDB = require('./config/db');

const DBroutes = require('./routes/DBroutes');
const ORGroutes = require('./routes/ORGroutes');
const Event = require('./routes/Event');
const event_reg_stu = require('./routes/event_reg_stu');
const culturel_event_route = require('./routes/culturel_event_route');
const fun_event_route = require('./routes/fun_event_route');
const sport_event_route = require('./routes/sport_event_route');
const tech_event_route = require('./routes/tech_event_route');
const seminar_event_route = require('./routes/seminar_event_route');


app.use(cors());
app.use(express.json());
connectDB();

app.use("/api/account", DBroutes);
app.use("/api/orgaccount", ORGroutes);
app.use("/api/event", Event);
app.use("/api/event_register", event_reg_stu);
app.use("/api/culturel_event", culturel_event_route);
app.use("/api/fun_event", fun_event_route);
app.use("/api/sport_event", sport_event_route);
app.use("/api/tech_event", tech_event_route);
app.use("/api/seminar_event", seminar_event_route);

const PORT = 5500;
app.listen(PORT, () => console.log(`👍 Server running on port: ${PORT}`));
