CREATE TABLE gast(
        gast_id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY, 
        anrede VARCHAR(15),
        vorname VARCHAR(45),
        nachname VARCHAR(45));

INSERT INTO gast (anrede, vorname, nachname) VALUES
('Herr', 'Max', 'Mustermann'),
('Herr', 'Klaus', 'Peter'),
('Frau', 'Lisa', 'Langfinger');

SELECT gast_id as ID, anrede as Anrede, vorname as Vorname, nachname as Nachname FROM gast;
