import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'secret_key') #TODO change value
    DEBUG = False
    # tentative db uri: user:pwd@host:port/dbname
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:postgres@localhost:5432/dummyDB"
    
    # Flask-Mail SMTP server settings
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 465
    MAIL_USE_SSL = True
    MAIL_USE_TLS = False
    MAIL_USERNAME = 'easyapplyc01@gmail.com'
    MAIL_PASSWORD = 'ryFgox-bernek-pavvo5'
    MAIL_DEFAULT_SENDER = '"easyapp.ly" <noreply@example.com>'

    # Flask-User settings
    USER_APP_NAME = "Easy App.ly"      # Shown in and email templates and page footers
    USER_ENABLE_EMAIL = True        # Enable email authentication
    USER_ENABLE_USERNAME = False    # Disable username authentication
    USER_EMAIL_SENDER_NAME = 'easyapp.ly'
    USER_EMAIL_SENDER_EMAIL = "noreply@example.com"


class DevelopmentConfig(Config):
    # uncomment the line below to use postgres
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:postgres@localhost:5432/dummyDB"
    DEBUG = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class TestingConfig(Config):
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:postgres@localhost:5432/dummyDB"
    PRESERVE_CONTEXT_ON_EXCEPTION = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class ProductionConfig(Config):
    DEBUG = False
    # uncomment the line below to use postgres
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:postgres@localhost:5432/dummyDB"


config_by_name = dict(
    dev=DevelopmentConfig,
    test=TestingConfig,
    prod=ProductionConfig
)

key = Config.SECRET_KEY