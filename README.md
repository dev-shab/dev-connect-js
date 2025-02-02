# Dev Connect

- Created a Vite + React Application
- Remove unnecessary code
- Initialise git repository
- Install and configure tailwing css
- Install Daisy UI
- Create Navbar using daisy UI
- Install React Router
- Setup Routes for Login Profile and Body
- Use Outlet to render children components
- Craete a footer
- Create a Login Page
- Install axios
- pass withCredential to axios to set cookies which contains the token
- Install Redux Toolkit & react redux
- Configure a store and pass the store to provider
- Create a slice for user and pass the reducer to the store
- Dispatch the user data to the store on login
- Extract logged in user details in the NavBar
- Redirect to the Feed page on login
- Redirect to login if no token present
- Implement logout and remove user from store and redirect to login page
- Implement validation for login
- Get feed data and add it to Feed Slice
- Build User Card on Feed
- Implemented Edit profile feature
- Display toast message on edit profile
- Display all my connections
- Display all my connection requests
- Review the connection requests - accept/reject
- Send connection request from feed or ignore the user
- Signup page for users - modified the Login page

# Deployment

- Signup on AWS
- launch instance
- chmod 400 <secret>.pem
- Login to EC2 terminal: ssh -i "<secret>.pem" ubuntu@ec2-13-126-64-110.ap-south-1.compute.amazonaws.com
- Install nvm for setting up node js to the instance
- Clone the git projects to the ec2 instance

# Frontend

- npm install
- npm run build
- sudo apt update
- sudo apt install nginx
- sudo systemctl start nginx
- sudo systemctl enable nginx
- sudo scp -r dist/\* /var/www/html/ - Copy code from dist(built files) to /var/www/html
- Enable port :80 of your instance
- modify base url to "/api"
