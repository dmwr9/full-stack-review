INSERT INTO posts (img_url, title, user_id)
VALUES
($1, $2, $3);

SELECT * FROM posts;