## Todo

- Client-side authentication pages
- Send auth to server for signin/signout
- Handle server-side auth

General idea: weights will be tied to users by sessionIDs. Why not userIDs? Because we want to allow functionality for people who aren't logged in (though that data will eventually be lost). Using cookie prop on session, these will persist across sessions.

If a user is logged in, we can tie that sessionid to a userid/name/pass. We need to make the user AWARE OF WHEN HE IS NOT LOGGED IN.

On logging in, we will find every weight record with a sessionid equiv to the user's current sessionid, and set the username on those to be equal to that sessionid's corresponding username.

On logging out, just destroy the cookie/sessionid.


