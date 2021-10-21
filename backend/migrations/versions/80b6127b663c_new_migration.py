"""new migration

Revision ID: 80b6127b663c
Revises: e08cbe8273c9
Create Date: 2021-10-20 22:12:55.334794

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '80b6127b663c'
down_revision = 'e08cbe8273c9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('date_created', postgresql.TIMESTAMP(), autoincrement=False, nullable=True),
    sa.Column('date_modified', postgresql.TIMESTAMP(), autoincrement=False, nullable=True),
    sa.Column('firstName', sa.VARCHAR(length=128), autoincrement=False, nullable=False),
    sa.Column('lastName', sa.VARCHAR(length=128), autoincrement=False, nullable=False),
    sa.Column('email', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('password', sa.VARCHAR(length=192), autoincrement=False, nullable=False),
    sa.Column('dob', postgresql.TIMESTAMP(), autoincrement=False, nullable=False),
    sa.Column('gender', sa.VARCHAR(length=128), autoincrement=False, nullable=False),
    sa.Column('address', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('city', sa.VARCHAR(length=128), autoincrement=False, nullable=False),
    sa.Column('country', sa.VARCHAR(length=128), autoincrement=False, nullable=False),
    sa.Column('img', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('video', sa.TEXT(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='user_pkey'),
    sa.UniqueConstraint('email', name='user_email_key')
    )
    # ### end Alembic commands ###
