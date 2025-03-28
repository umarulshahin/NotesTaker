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

   
    git clone https://github.com/your-repo-link.git
    cd your-repo-folder
    Create a virtual environment:

   
    python -m venv venv
    source venv/bin/activate   # For Mac/Linux
    venv\Scripts\activate      # For Windows
    Install dependencies:

   
    pip install -r requirements.txt
    Configure .env file (if needed)

Apply migrations:

    python manage.py migrate
    
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
 

Happy Coding! 🚀🎯
