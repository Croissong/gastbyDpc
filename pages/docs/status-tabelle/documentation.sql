CREATE TABLE IF NOT EXISTS beleg_art (
        art_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        bezeichnung VARCHAR(45),
        color VARCHAR(6));

INSERT INTO beleg_art (bezeichnung, color) VALUES
('belegt', 'FFFFFF'),
('gesperrt', '0000FF'),
('reserviert', 'FFFF00');

SELECT art_id as ID, bezeichnung as Bezeichnung, color as Farbkennung FROM beleg_art;
