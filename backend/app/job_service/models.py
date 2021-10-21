# Import the database object (db) from the main application module
# We will define this inside /app/__init__.py in the next sections.
from app import db
 
# Define a base model for other database tables to inherit
class Base(db.Model):
 
    __abstract__  = True
 
    id            = db.Column(db.Integer, primary_key=True)
    date_created  = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(),
                                           onupdate=db.func.current_timestamp())
    
class Jobs(Base):
    __tablename__ = 'jobs'
    jobName = db.Column(db.String(255),  nullable=False)
    employerID = db.Column(db.Integer,nullable=False)
    companyName = db.Column(db.String(255),nullable=False)
    email = db.Column(db.String(255),nullable=False)
    industry = db.Column(db.String(255),nullable=False)
    location = db.Column(db.String(255),nullable=False)
    introduction = db.Column(db.String(255),  nullable=False)
    
    # New instance instantiation procedure
    def __init__(self,jobName,employerID,companyName,email,industry,location,introduction):
        self.jobName        = jobName
        self.employerID     = employerID
        self.companyName    = companyName
        self.email          = email
        self.industry       = industry 
        self.location       = location
        self.introduction   = introduction
 
 
    def __repr__(self):
        return '<Jobs %r>' % (self.name) 