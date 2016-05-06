CREATE VIEW belegt AS
SELECT DISTINCT zimmer.bezeichnung AS 'Belegt' FROM belegung, zimmer
WHERE zimmer.zimmer_id = belegung.zimmer_id AND
    belegung.art_id = 1; 

SELECT * from belegt;

CREATE VIEW reserviert AS
SELECT DISTINCT zimmer.bezeichnung AS 'Reserviert' FROM belegung, zimmer
WHERE zimmer.zimmer_id = belegung.zimmer_id AND
    belegung.art_id = 2;

SELECT * from reserviert;

CREATE VIEW gesperrt AS
SELECT DISTINCT zimmer.bezeichnung AS 'Gesperrt' FROM belegung, zimmer
WHERE zimmer.zimmer_id = belegung.zimmer_id
    AND belegung.art_id = 3; 

SELECT * from gesperrt;

CREATE VIEW belegungs_dauer AS
SELECT DATEDIFF(belegung.ende, belegung.start) as Buchungstage FROM belegung
WHERE zimmer_id = 1&& start = "2016-01-01";

SELECT * from belegungs_dauer;

CREATE VIEW auslastung AS
SELECT bezeichnung as Zimmer,
    SUM(DATEDIFF(
            IF(1=MONTH(ende), ende, LAST_DAY("2016-01-01")),
            IF(1=MONTH(start), start, DATE_SUB("2016-01-01",
                    INTERVAL DAYOFMONTH("2016-01-01")-1 DAY))))
    as Buchungstage FROM belegung, zimmer
WHERE belegung.zimmer_id = zimmer.zimmer_id GROUP BY belegung.zimmer_id;

SELECT * from auslastung;
