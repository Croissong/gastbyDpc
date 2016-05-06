CREATE TABLE IF NOT EXISTS zimmer (
        zimmer_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        bezeichnung VARCHAR(45),
        beschreibung VARCHAR(45));

INSERT INTO zimmer(bezeichnung, beschreibung) VALUES ('101','Suite'),
    ('102','Abstellkammer'),
    ('103','4-Bett'),
    ('104','2-Bett'),
    ('105','1-Bett');

SELECT zimmer_id as ID, bezeichnung as Bezeichnung, beschreibung as Beschreibung FROM zimmer;
