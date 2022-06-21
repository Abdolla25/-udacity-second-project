CREATE TABLE books (
    id SERIAL PRIMARY  KEY,
    title VARCHAR(150),
    author VARCHAR(255),
    total_pages integer,
    book_type VARCHAR(100),
    summary text
);