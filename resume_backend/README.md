# Getting Started with Django Rest Framework

<h2 align="center">Resume</h2>

### Development Tools

**Stack:**
- Python >= 3.8;
- Django >= 4;
- Packages from file requirements.txt;

### Development

##### 1) Clone repository

    git clone <link generated in your repository>

##### 2) Create a virtual environment

    python -m venv venv
    
##### 3) Activate virtual environment

##### 4) Install requirements

    pip install -r requirements.txt
    
##### 5) Create PostgreSQL database and make file.env.dev in resume_backend folder

    DEBUG=1
    SECRET_KEY=fdsadqw3f32wg<43g3hv$%#@%F$F$$F$F
    DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1 [::1]

    # Data Base
    POSTGRES_ENGINE=django.db.backends.postgresql_psycopg2
    POSTGRES_DB=your_db
    POSTGRES_USER=your_user
    POSTGRES_PASSWORD=your_password
    POSTGRES_HOST=your_host
    POSTGRES_PORT=5432
    DATABASE=postgres

##### 6) Run command to apply migrations

    python manage.py migrate
    
##### 7) Create superuser

    python manage.py createsuperuser
    
##### 8) Start server

    python manage.py runserver


Copyright (c) 2022-present, Tishchyk Maksym



