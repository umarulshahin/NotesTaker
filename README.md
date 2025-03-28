Notes Taking App 📒

🛠️ Technologies Used

    Backend: Python, Django REST Framework, MySQL
    Frontend: React.js, Redux Toolkit with Persist, Tailwind CSS
    API Requests: Axios
    State Management: Redux Toolkit
    Animations: Framer Motion

🚀 Features

   User Authentication (Sign In / Sign Up)
   
   Create, View, Edit, and Delete Notes
   
   Optimized Code with Reusable Components

🏗️ Setup & Installation

1️⃣ Backend Setup (Django)
   Clone the repository:

   
    git clone [https://github.com/umarulshahin/NotesTaker.git]
    cd Backend
    Create a virtual environment:

   
    python -m venv venv
    source venv/bin/activate   # For Mac/Linux
    venv\Scripts\activate      # For Windows
    Install dependencies:

   
    pip install -r requirements.txt
 
Database Setup (MySQL)
  Ensure MySQL is installed and running on your system.

Configure .env file inside the project folder:

Create a .env file in the root project directory and add:
        
        DATABASE_URL=mysql://your_mysql_user:your_mysql_password@localhost:3306/notes_app
        SECRET_KEY=your_secret_key


Apply migrations:

    python manage.py makemigrations
    python manage.py migrate

Change directory after migration:

    cd NotesTaking_backend
    
Run the server:

    python manage.py runserver

    
2️⃣ Frontend Setup (React)
    Navigate to the frontend directory:

    cd frontend
    
Install dependencies:
        
        npm install
    
Start the React app:

     npm run dev

     
🛠️ API Endpoints

Method	Endpoint	Description

POST	registration/	 Register User

POST	login/	 Login User

Post  token/refresh/  Token refresh 

GET  	notes_management/ 	Fetch Notes

POST	notes_management/ 	Create Note

PUT	  notes_management/ 	Update Note

DELETE	notes_management/ 	Delete Note

📌 Notes
Ensure MySQL is installed and running.

Update DATABASES settings in settings.py with your credentials.

Use .env for storing sensitive credentials.

Here are the screenshots for all the features: https://docs.google.com/document/d/1fR1YXKGzL48vX6VbfESbT2yNoqRkYoM_QUPDTzEJU3g/edit?usp=sharing

 

Happy Coding! 🚀🎯
