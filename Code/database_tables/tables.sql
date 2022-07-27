create database bloc;

create table clubs (
    club_id serial primary key,
    club_name varchar(255) not null unique, 
    description text not null,
    mtime time, 
    mday varchar(255),
    mlocation varchar(255),
    type varchar(255) not null,
    create_at timestamp default current_timestamp,
    email varchar(255) unique not null,
    -- potentially will need to store images?
);

insert into clubs(club_name,description,type,email) values ('test','test','test','test');

create table users (
    user_id serial primary key,
    first varchar(255) not null, 
    last varchar(255) not null,
    email varchar(255) unique not null,
    password varchar(255) not null,
);

insert into users(first, last, email) values ('John','Smith','jsmith@email.wm.edu');
insert into users(first, last, email) values ('Jane','Doe','jdoe@email.wm.edu');
insert into users(first, last, email) values ('test','test','fuck@email.wm.edu');

create table userClubs (
	user_id int references users (user_id) on update cascade on delete cascade,
    club_id int references clubs (club_id) on update cascade on delete cascade,
    admin boolean,
    constraint pk_userClubs primary key (user_id, club_id)
);
-- maybe havesomething in the userClubs about if the user is admin for a certain club

insert into userClubs(user_id, club_id) values (1,1);
insert into userClubs(user_id, club_id) values (1,2);
insert into userClubs(user_id, club_id) values (2,1);
insert into userClubs(user_id, club_id) values (2,3);
insert into userClubs(user_id, club_id) values (4,1);
insert into userClubs(user_id, club_id) values (4,2);
insert into userClubs(user_id, club_id) values (4,4);

