# How to start

## Clone

## Create a virtual environment

In the root of this project, run
```
python3 -m venv .venv
```
You should now see a folder .venv. This is your virtual environment.

## Start your virtual environment

Make sure you are in the folder that contains your venv folder.
```
source .venv/bin/activate
```
You will see (.venv), this means that you are in your virtual environment.

To deactivate your virtual environment:
```
deactivate
```

## Install dependencies

Inside your virtual environment:
```
pip install -r requirements.txt
```

## Run migrations
```
cd hack
python manage.py makemigrations
python manage.py migrate
```

## Run server

```dotnetcli
python3 manage.py runserver
```
This should be done in the folder that contains the manage.py

## Check localhost

You can now check out your web app at:
http://localhost:8000/


## Adding new dependencies, and updating requirements.

If you are adding new dependencies:
Install the dependency in your virtual environment
```
pip install <package-name>
```
Update the requirements.txt
```
pip freeze > requirements.txt
```

When new dependencies have been pushed, you need to update your virtual environment:
```dotnetcli
pip install -r requirements.txt
```
## ADD NEW APPS!
The project is hack, and you should add new apps to the project instead of putting everything your code directly inside of hack.
