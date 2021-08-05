# Emaily-app

1. It is a MERN Stack Based app for new startups. they can login & send some survey emails to their users for feedback.

2. for Each Survey they have to pay some credits. they can add credits by paying us online.

3. surveys for each users displayed when they login to their account using their google account.

4. user can only login with google account.


# MERN stack(ES6 syntax)
## Server(NodeJS & ExpressJS & MongoDB)

1. mongo cloud is used for storing user data. that connected with our node server via mongoose.

2. REST besed api in expressJS is implemented on backend server using ES6 modules.

3. passportJS used for google auth functionality.

4. cookie-session for user login duration.
5. sendgrid for sending survey mails.

## Client(React & Redux & materialize-css)

1. fully react based Single Page Application using react-hooks.
2. redux, redux-thunk & redux-persist in store management.
3. payment management through stripe payment api.
4. react-router-dom for routing in app.
5. axios for async http requests & lodash for some ulitily in app.

# Heroku deployment
 1. mixed client-server architecture is used and hosted on heroku with github.
 2. client side is built on heroku using create-react-app setup & then served.
 3. production & dev environment variables are diffrent. with time production maybe broken(database auto shutdown)
