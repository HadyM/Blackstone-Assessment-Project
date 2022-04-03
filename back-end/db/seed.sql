INSERT INTO meeting_rooms
 (name, capacity, floor) 
 VALUES
('Meeting Room 1',  6,  22),
('Boardroom 2', 12, 21),
('Hub', 30, 22),
('Lounge Balcony', 100, 45 ),
('Conference Room', 20, 50),
('Auditorium', 200, 2),
('Convention Hall', 15, 60);

INSERT INTO bookings
(meetingRoomId, meetingName, startDate, endDate, attendees)
VALUES
(1, 'Scrum Meeting 1', '2022-04-01 12:00:00', '2022-04-01 13:00:00', 'jdoe@email.com, bdylan@email.com'),
(1, 'Scrum Meeting 2', '2022-04-01 13:00:00', '2022-04-01 14:00:00', 'jdoe@email.com, bdylan@email.com'),
(2, 'Board Meeting', '2022-04-02 14:00:00', '2022-04-02 15:00:00', 'jdoe@email.com, bdylan@email.com'),
(2, 'Team Alpha', '2022-04-02 15:00:00', '2022-04-02 16:00:00', 'jdoe@email.com, bdylan@email.com'),
(3, 'Star Team - Frontlog Refinement', '2022-04-03 09:00:00', '2022-04-03 09:45:00', 'jdoe@email.com, bdylan@email.com'),
(3, 'Star Team - Backlog Refinement', '2022-04-03 09:45:00', '2022-04-03 10:30:00', 'jdoe@email.com, bdylan@email.com'),
(4, 'Tech Meet & Greet', '2022-04-03 12:00:00', '2022-04-03 13:00:00', 'Tech Team & Interns'),
(4, 'Tech Meet & Greet', '2022-04-03 13:00:00', '2022-04-03 14:00:00', 'Tech Team & Interns'),
(5, 'CEO Meeting', '2022-04-05 11:00:00', '2022-04-05 14:00:00', 'CEO John, CTO Jane'),
(6, 'HR Strategy Forum', '2022-04-01 13:00:00', '2022-04-01 15:00:00', 'HR Department'),
(6, 'HRPA Annual Conference', '2022-04-02 13:00:00', '2022-04-02 16:00:00', 'HR Department'),
(7, 'Tech Job Fair', '2022-04-05 15:00:00', '2022-04-05 18:00:00', 'Potential Employees'),
(7, 'Blackstone Easter Party', '2022-04-17 19:00:00', '2022-04-17 22:00:00', 'All Employees and Guests' );
