# Contact Management App
This is a sample application for Contact Management.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Setup Instructions

1. **Install Node.js**  
   Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

2. **Install Angular CLI**  
   Verify that you have the latest version of Angular CLI installed. If not, run the following command to install it:
   ```
   npm install -g @angular/cli@latest 
   ```

3. **Install Git CLI**

    Ensure you have Git installed. You can download it from  http://git-scm.com.

4. **Clone the Repository**
    
    Once Git is installed, clone this repository to your local machine:
    ```
    git clone https://github.com/savita-muley/contact-manager-ui.git
    ```

5. **Open the Project in Your IDE**
    
    Open the cloned repository in your favorite IDE (e.g., Visual Studio Code).

6. **Install Dependencies**

    Open the command terminal from the repository folder and run:
    ```
    npm install
    ```

## Run the Application

1. **Run the Backend API**

    Start the backend API using Visual Studio or your preferred method.

2. **Run the Development Server**

    Run the following command to start the development server:
    ```
    ng serve
    ```
    Navigate to http://localhost:4200/ in your browser. The application will automatically reload if you change any of the source files.


## Application Folder Structure

- **app**
  - **components**
    - **confirmation-dialog:** A reusable dialog component to get confirmation from the user before performing delete operations.
    - **contact-list:** The primary component to display the contact list.
    - **edit-contact-dialog:** A component to create or edit a contact.
  - **models**
    - **api-response:** Model for mapping API responses.
    - **contact-data:** Model for mapping contact data.
    - **modal-data:** Configuration model for dialog data.
  - **services**
    - **contact-service:** Service for managing contact operations.
    - **http-interceptor:** Interceptor for handling HTTP requests and responses.
    - **notification-service:** Service for managing user notifications.
- **environments**:
    - **environment.development.ts:** Development environment configuration