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

# Running the Project on Your Machine

Follow these steps to set up and run the project on your local machine. Before you begin, ensure you have the following prerequisites installed:

- **Git**
- **Node.js**
- **NPM** (Node Package Manager)
- **Angular CLI** (Command Line Interface)
- **MongoDB**

Once you have these installed, proceed with the steps below.

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
4. **Open your code editor**: VS Code is opened like this:
   ```bash
    code .
    ```
5. **Navigate into the 'config' folder and create a file called keys.js**:
    ```bash
    cd config
    ``` 
   ```bash
    touch keys.js
    ```
6. **Add code to private.js**: Add the following code to private.js, replacing the strings with your values, also as strings:
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
    6.1 **Replace your_secret_key** with another string; it should look like a password, and you should treat it like one too!<br><br>

    6.2 **Replace your_telegram_bot_token** with the unique token you get when creating a telegram bot:

    6.2.1 Search BotFather on Telegram.<br>
    6.2.2 Type /start to get started.<br>
    6.2.3 Type /newbot to get a bot.<br>
    6.2.4 Enter your Bot name and unique Username, which should end with the bot.<br>
    6.2.5 Then, you would get your Bot token.<br><br>

    6.3 **Replace your_telegram_bot_token** with the unique id of a telegram channel:

    6.3.1 Create a new telegram channel.<br>
    6.3.2 Add your bot to the channel as an admin.<br>
    6.3.3 Send a message in the channel and forward it to @userinfobot to get the channel id.<br><br>

7. **Change back into your root directory**:
   ```bash
    cd ..
    ```
8. **Run the Project**: 
    ```bash
    npm start
    ```
9. **Navigate to the Angular App**: In another tab, cd into the angular-src folder:
    ```bash
    cd angular-src
    ```
10. **Install Dependencies**:
    ```bash
    npm install
    ```
11. **Serve the Application**: 
    ```bash
    ng serve
    ```
12. **Open the Application**: Open a web browser and navigate to `http://localhost:4200/` to see the application in action.

**Note:** You can change the MongoDB database configuration in `config/database.js`.

If you encounter any errors or need assistance, please feel free to contact me directly at [anejvr06@gmail.com](mailto:anejvr06@gmail.com).

