DROP TABLE IF EXISTS meeting_rooms CASCADE;

CREATE TABLE meeting_rooms (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    capacity INTEGER NOT NULL,
    floor INTEGER NOT NULL
);

DROP TABLE IF EXISTS bookings CASCADE;

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY, 
    meetingName TEXT NOT NULL,
    startDate TIMESTAMP NOT NULL,
    endDate TIMESTAMP NOT NULL,
    attendees TEXT,
    meetingRoomId INTEGER REFERENCES meeting_rooms (id) ON DELETE CASCADE
);