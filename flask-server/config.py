import os

BASE_DIR = os.path.dirname(__file__) # 폴더 구조가 달라져도, 현재 폴더를 가져와서 사용할 수 있도록 설정합니다.

<<<<<<< HEAD
SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:1234@127.0.0.1:3306/movie"
# SQLALCHEMY_DATABASE_URI = 'sqlite:///{}'.format(os.path.join(BASE_DIR, 'movie.db'))
=======
# SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:비밀번호@127.0.0.1:3306/DB명" 배포시 수정.
SQLALCHEMY_DATABASE_URI = 'sqlite:///{}'.format(os.path.join(BASE_DIR, 'movie.db'))
>>>>>>> master
# os.path.join(BASE_DIR, 'rabbit.db') 를 사용하면, ~~~/rabbit.db 와 같은 디렉토리 구조 문자열이 반환됩니다.
SQLALCHEMY_TRACK_MODIFICATIONS = False
# 이걸 켜면 메모리 사용량이 늘어나서, 꺼주는게 좋아요.
# SECRET_KEY = b'Z\xd7o\x03\xaa\xa8A\xa7[\xf2v\xf5\x07_\xb9\xbc'
<<<<<<< HEAD
SECRET_KEY = os.urandom(16)
=======
SECRET_KEY = os.urandom(16)
>>>>>>> master
