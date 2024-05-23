# Telegram Messaging App

### Current Personal Project
Full-stack messaging application that communicates with a telegram user via a telegram bot.<br>
I'm building this application to make use of the various full-stack related topics that I've learned. <br>

**I'm using the MEAN stack:**
- Angular
- Nodejs with Expressjs
- MongoDb

**I'm making use of the following key concepts and technologies:**
- Angular routing
- RxJs
- JSON Web Tokens
- User authentication and authorisation
- Websockets

<br>

# Running the Project

Follow these steps to run my project on your machine:


1. **Clone the Repository**:
    ```bash
    git clone git@github.com:AnevRensburg/telegram-app.git
    ```
2. **Navigate to the Project Directory**:
    ```bash
    cd telegram-app
    ```
3. **Install Dependencies**:
    ```bash
    npm install
    ```
4. **cd into private**: 
    ```bash
    cd private
    ```
5. **Create private file**: Create a file called private.js inside the private folder:
    ```bash
    touch private.js
    ```
6. **Open your code editor**
7. **Add code to private.js**: Add the following code to private.js, replacing the strings with your values, also as strings:
    ```js
    module.exports = {
    // Secret key for JWT
    secret: 'your_secret_key',
    // Bot ID
    botId: 'your_telegram_bot_token',
    // Channel ID
    channelId: 'your_telegram_channel_id'
    }
    ```
    7.1 **Replace your_secret_key** with another string; it should look like a password, and you should treat it like one too!<br><br>

    7.2 **Replace your_telegram_bot_token** with the unique token you get when creating a telegram bot:

    7.2.1 Search BotFather on Telegram.<br>
    7.2.2 Type /start to get started.<br>
    7.2.3 Type /newbot to get a bot.<br>
    7.2.4 Enter your Bot name and unique Username, which should end with the bot.<br>
    7.2.5 Then, you would get your Bot token.<br><br>

    7.3 **Replace your_telegram_bot_token** with the unique id of a telegram channel:

    7.3.1 Create a new telegram channel.<br>
    7.3.2 Add your bot to the channel as an admin.<br>
    7.3.3 Send a message in the channel and forward it to @userinfobot to get the channel id.<br><br>

7. **Run the Project**: 
    ```bash
    npm start
    ```
9. **Navigate to the Angular App**: In another tab, cd into the angular-src folder:
    ```bash
    cd angular-src
    ```
10. **Serve the Application**: 
    ```bash
    ng serve
    ```
11. **Open the Application**: Open a web browser and navigate to `http://localhost:4200/` to see the application in action.
