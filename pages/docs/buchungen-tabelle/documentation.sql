CREATE TABLE IF NOT EXISTS belegung(
        belegung_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        start DATE,
        ende DATE,
        gast_id INT(11),FOREIGN KEY(gast_id) REFERENCES gast(gast_id) ON DELETE CASCADE,
        art_id INT(11),FOREIGN KEY(art_id) REFERENCES beleg_art(art_id) ON DELETE CASCADE,
        zimmer_id INT(11),FOREIGN KEY(zimmer_id) REFERENCES zimmer(zimmer_id) ON DELETE CASCADE ) ;

INSERT INTO belegung (start, ende, gast_id, art_id, zimmer_id) VALUES
    ("2016-01-01","2016-01-07",1,2,1),
    ("2016-01-01","2016-01-21",2,2,3),
    ("2016-01-08","2016-01-16",3,1,1),
    ("2016-01-25","2016-02-02",1,3,1);

SELECT belegung_id as ID, start, ende, gast_id, art_id, zimmer_id FROM belegung;
