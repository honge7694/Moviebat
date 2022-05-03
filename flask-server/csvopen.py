import csv
import sqlite3

con = sqlite3.connect('Movie.db')
cur = con.cursor()

# with open('./static/sample.csv', encoding='UTF-8') as file:
#     reader = csv.DictReader(file, delimiter=',')
#     # result = [ (w['year'], w['film festival'], w['title'], w['director'], w['field'], w['img_link'], w['genre']) for w in reader]
    
# cur.executemany("INSERT INTO movie_tb(movie_year, movie_film_festival, movie_title, movie_director, movie_filed, movie_img_link, movie_genre) VALUES (?, ?, ?, ?, ?, ?, ?)", result)

<<<<<<< HEAD
# with open('./static/film_festival.csv', encoding='UTF-8') as file:
    # reader = csv.DictReader(file, delimiter=',')
    # result = [ (w['year'], w['film_festival'], w['title'], w['director'], w['field'], w['award'], w['genre'], w['plot'], w['rating'], w['runtime'], w['prodYear'], w['actors'], w['img_link'], w['stills']) for w in reader]
    
# cur.executemany("INSERT INTO movie_tb(movie_year, movie_prodYear, movie_film_festival, movie_filed, movie_award, movie_title, movie_director, movie_actors, movie_genre, movie_rating, movie_runtime, movie_plot, movie_img_link, movie_stills) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", result)
# cur.executemany("INSERT INTO movie_tb(movie_year, movie_film_festival, movie_title, movie_director, movie_field, movie_award, movie_genre, movie_plot, movie_rating, movie_runtime, movie_prodYear, movie_actors, movie_img_link, movie_stills) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", result)

with open('./static/festival.csv', encoding='UTF-8') as file:
    reader = csv.DictReader(file, delimiter=',')
    result = [(w['title'], w['link'], w['region'], w['img_src'], w['latlng'], w['latitude']) for w in reader]

cur.executemany("INSERT INTO festival_tb(festival_title, festival_link, festival_region, festival_src, festival_latlng, festival_latitude) VALUES (?, ?, ?, ?, ?, ?)", result)

con.commit()
con.close()
=======
with open('./static/film_festival_final.csv', encoding='UTF-8') as file:
    reader = csv.DictReader(file, delimiter=',')
    result = [ (w['year'], w['film_festival'], w['title'], w['director'], w['field'], w['award'], w['genre'], w['plot'], w['rating'], w['runtime'], w['prodYear'], w['actors'], w['img_link'], w['stills'], w['score']) for w in reader]
    
# # cur.executemany("INSERT INTO movie_tb(movie_year, movie_prodYear, movie_film_festival, movie_filed, movie_award, movie_title, movie_director, movie_actors, movie_genre, movie_rating, movie_runtime, movie_plot, movie_img_link, movie_stills, movie_score) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", result)
cur.executemany("INSERT INTO movie_tb(movie_year, movie_film_festival, movie_title, movie_director, movie_field, movie_award, movie_genre, movie_plot, movie_rating, movie_runtime, movie_prodYear, movie_actors, movie_img_link, movie_stills, movie_score) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", result)

# with open('./static/festival.csv', encoding='UTF-8') as file:
#     reader = csv.DictReader(file, delimiter=',')
#     result = [(w['title'], w['link'], w['region'], w['img_src'], w['latlng'], w['latitude']) for w in reader]

# cur.executemany("INSERT INTO festival_tb(festival_title, festival_link, festival_region, festival_src, festival_latlng, festival_latitude) VALUES (?, ?, ?, ?, ?, ?)", result)

# with open('./static/rep_movies.csv', encoding='UTF-8') as file:
#     reader = csv.DictReader(file, delimiter=',')
#     result = [(w['title'], w['director'], w['genre'], w['plot'], w['img_link']) for w in reader]

# cur.executemany("INSERT INTO masterpiece_tb(masterpiece_title, masterpiece_director, masterpiece_genre, masterpiece_plot, masterpiece_img_link) VALUES (?, ?, ?, ?, ?)", result)    
con.commit()
con.close()

# with open('./static/popularMovies_independent5_ver3_score.csv', encoding='UTF-8') as file:
#     reader = csv.DictReader(file, delimiter=',')
#     result = [(w['title'], w['im1'], w['im2'], w['im3'], w['im4'], w['im5']) for w in reader]
#     for i in result:
#         print(i)
>>>>>>> master
