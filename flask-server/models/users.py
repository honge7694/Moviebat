from db_connect import db

class User(db.Model):

    __tablename__ = 'user_info_tb'

    # seq = Sequence('user_info_tb_user_idx_seq', start=100, increment=1)
    
    user_idx = db.Column(db.Integer, nullable=False, autoincrement=True, primary_key=True)
    user_id = db.Column(db.String(255), nullable=False)
    user_password = db.Column(db.String(255), nullable=False)
    user_nick = db.Column(db.String(50), nullable=False, unique=True)
    user_number = db.Column(db.String(30), nullable=True)
<<<<<<< HEAD
    user_genre = db.Column(db.String(100), nullable=False)
=======
    # user_genre1 = db.Column(db.String(100), nullable=False)
    # user_genre2 = db.Column(db.String(100), nullable=False)
>>>>>>> master
    user_runningtime = db.Column(db.Integer, nullable=False)
    user_region = db.Column(db.String(50), nullable=True)
    user_profile = db.Column(db.String(255), nullable=True)

<<<<<<< HEAD
    def __init__(self, id, password, nick, phone, genre, runningtime, region):
=======
    def __init__(self, id, password, nick, phone, runningtime, region):
>>>>>>> master
        self.user_id = id
        self.user_password = password
        self.user_nick = nick
        self.user_number = phone
<<<<<<< HEAD
        self.user_genre = genre
=======
        # self.user_genre1 = genre1
        # self.user_genre2 = genre2
>>>>>>> master
        self.user_runningtime = runningtime
        self.user_region = region
