# Lokkeroom

-   Repository: `lokkeroom`
-   Type of Challenge: `Consolidation`
-   Duration: `5 days`
-   Deployment strategy : `Render | Railway | Vercel `
-   Team challenge : `duo`

> Real gossips are spread in the locker room!

## Mission objectives

You have been asked by several sports club to create a platform so that team member could share message with their team, and their team only! Your platform would allow coaches from a team to create a message lobby. Once their lobby is created coaches (admin) can add users to their team so they can access the lobby.

All information has to be stored in a PostgreSQL or Mysql(MariaDB) database.

All the below features have to be implemented in the form of a REST API, this API should only return JSON not HTML!

Please it's time to use EcmaScript modules.
Want an extra challenge ? Implement the MVC structure

### 🌱 Must have features

-   Users can sign up using an email and a password
-   Users can log in using their email and password
-   User can create a message lobby (and become the admin of said lobby)
-   Users can view message from their lobby
-   Users can post message on their lobby
-   Users can edit their own message

### 🌼 Nice to have features (doable)

-   Admin can delete message in their lobby
-   Admin can edit message in their lobby
-   Implement a pagination system

### 🌳 Nice to haves (hard)

-   Users can join multiple teams
-   Implement a direct message system (user to user message)
-   Try to implement Anti-bruteforce (ex: people cannot attempt more than 5 failed logins/hour)
-   Admins can add people that have not yet registered to the platform.

## Resources

### List of endpoints

Here is an example of the endpoints you could implement.

| Endpoint                           | Method | Bearer token? | Admin only | Request                                      | Response                                                                                                 |
| ---------------------------------- | ------ | ------------- | ---------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| /api/register                      | POST   |               |            | An object containing a login, and a password | A message stating the user has been created (or the approriate error, if any)                            |
| /api/login                         | POST   |               |            | An object containing a login, and a password | A JSON Web Token/session ID (or the approriate error, if any)                                            |
| /api/lobby/[lobby-id]              | GET    | yes           |            | -                                            | An array containing all the message from the lobby                                                       |
| /api/lobby/[lobby-id]/[message-id] | GET    | yes           |            | -                                            | A single message object from the lobby                                                                   |
| /api/lobby/[lobby-id]              | POST   | yes           |            | An object containing the message             | A message stating the message has been posted (or the approriate error, if any)                          |
| /api/users                         | GET    | yes           | (yes)      | -                                            | All the users from the same lobby                                                                        |
| /api/users/[user-id]               | GET    | yes           |            | -                                            | A single user. If the user is not an admin, can only get details from people that are in the same lobby. |
| /api/lobby/[lobby-id]/add-user     | POST   | yes           | yes        | The user to add to the lobby                 | Add an user to a lobby                                                                                   |
| /api/lobby/[lobby-id]/remove-user  | POST   | yes           | yes        | The user to remove from the lobby            | Removes an user from the lobby                                                                           |
| /api/lobby/[message-id]            | PATCH  | yes           | (yes)      | An object containing the message patches     | Edit a message. Users can only edit their own messages, unless they are admins.                          |
| /api/messages/[message-id]         | DELETE | yes           | (yes)      | -                                            | Delete a message. Users can only edit their own messages, unless they are admins.                        |

Good luck!

![Locker room](./locker-room.gif)
