CREATE EXTENSION postgis;

-- Table des utilisateurs
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Circuits automobiles
CREATE TABLE circuits (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL, -- Ville/région
    description TEXT,
    length_meters DECIMAL(10, 2), -- Longueur du circuit en mètres
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Points GPS qui composent le tracé officiel du circuit
CREATE TABLE circuit_points (
    id SERIAL PRIMARY KEY,
    circuit_id INTEGER REFERENCES circuits(id),
    position GEOGRAPHY(POINT) NOT NULL,
    point_order INTEGER NOT NULL, -- Pour ordonner les points du tracé
    is_start BOOLEAN DEFAULT FALSE,
    is_finish BOOLEAN DEFAULT FALSE,
    is_sector_end BOOLEAN DEFAULT FALSE, -- Pour diviser le circuit en secteurs
    sector_number INTEGER -- Numéro du secteur si applicable
);

-- Sessions de pilotage
CREATE TABLE driving_sessions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    circuit_id INTEGER REFERENCES circuits(id),
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP,
    best_lap_time_seconds DECIMAL(10, 3), -- Meilleur temps de tour
    number_of_laps INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Points GPS enregistrés pendant une session
CREATE TABLE session_points (
    id SERIAL PRIMARY KEY,
    session_id INTEGER REFERENCES driving_sessions(id),
    position GEOGRAPHY(POINT) NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    speed_kph DECIMAL(6, 2), -- Vitesse en km/h
    lap_number INTEGER -- Numéro du tour
);

-- Table des temps par tour
CREATE TABLE lap_times (
    id SERIAL PRIMARY KEY,
    session_id INTEGER REFERENCES driving_sessions(id),
    lap_number INTEGER NOT NULL,
    lap_time_seconds DECIMAL(10, 3) NOT NULL,
    sector1_time_seconds DECIMAL(10, 3),
    sector2_time_seconds DECIMAL(10, 3),
    sector3_time_seconds DECIMAL(10, 3),
    timestamp TIMESTAMP NOT NULL
);

-- Insertion de 10 circuits automobiles français réels
INSERT INTO circuits (name, location, description, length_meters) VALUES
('Circuit Paul Ricard', 'Le Castellet, Var', 'Circuit de F1 avec sa fameuse ligne droite du Mistral et ses bandes bleues et rouges', 5842),
('Circuit de Nevers Magny-Cours', 'Magny-Cours, Nièvre', 'Ancien circuit de F1 français connu pour son virage Adelaide', 4411),
('Circuit Bugatti', 'Le Mans, Sarthe', 'Circuit permanent du Mans utilisé pour le MotoGP', 4185),
('Circuit de Dijon-Prenois', 'Prenois, Côte-d-Or', 'Circuit historique avec des virages techniques et dénivelés', 3800),
('Circuit de Lédenon', 'Lédenon, Gard', 'Circuit technique avec le plus grand dénivelé de France', 3156),
('Circuit Carole', 'Tremblay-en-France, Seine-Saint-Denis', 'Circuit principalement moto, plat et rapide', 2055),
('Circuit du Val de Vienne', 'Le Vigeant, Vienne', 'Circuit varié avec courbes rapides et chicanes', 3768),
('Circuit de Charade', 'Saint-Genès-Champanelle, Puy-de-Dôme', 'Circuit historique dans les volcans Auvergnatsyarn', 3975),
('Circuit de Nogaro', 'Nogaro, Gers', 'Circuit Paul Armagnac connu pour ses courses de tourisme', 3636),
('Circuit de Pau-Arnos', 'Arnos, Pyrénées-Atlantiques', 'Circuit technique avec dénivelés importants', 3030);

-- Maintenant, définissons quelques points GPS pour chaque circuit
-- Circuit Paul Ricard (coordonnées approximatives)
INSERT INTO circuit_points (circuit_id, position, point_order, is_start, is_finish) VALUES
(1, ST_SetSRID(ST_MakePoint(5.791889, 43.252333), 4326), 1, TRUE, FALSE),
(1, ST_SetSRID(ST_MakePoint(5.792889, 43.252583), 4326), 2, FALSE, FALSE),
(1, ST_SetSRID(ST_MakePoint(5.793889, 43.253083), 4326), 3, FALSE, FALSE),
(1, ST_SetSRID(ST_MakePoint(5.795889, 43.252583), 4326), 4, FALSE, FALSE),
(1, ST_SetSRID(ST_MakePoint(5.796889, 43.253083), 4326), 5, FALSE, FALSE),
(1, ST_SetSRID(ST_MakePoint(5.797889, 43.252083), 4326), 6, FALSE, FALSE),
(1, ST_SetSRID(ST_MakePoint(5.797889, 43.251083), 4326), 7, FALSE, FALSE),
(1, ST_SetSRID(ST_MakePoint(5.798889, 43.250083), 4326), 8, FALSE, FALSE),
(1, ST_SetSRID(ST_MakePoint(5.797889, 43.249583), 4326), 9, FALSE, FALSE),
(1, ST_SetSRID(ST_MakePoint(5.796889, 43.249083), 4326), 10, FALSE, FALSE),
(1, ST_SetSRID(ST_MakePoint(5.794889, 43.249583), 4326), 11, FALSE, FALSE),
(1, ST_SetSRID(ST_MakePoint(5.793889, 43.250083), 4326), 12, FALSE, FALSE),
(1, ST_SetSRID(ST_MakePoint(5.792889, 43.250583), 4326), 13, FALSE, FALSE),
(1, ST_SetSRID(ST_MakePoint(5.791889, 43.251583), 4326), 14, FALSE, FALSE),
(1, ST_SetSRID(ST_MakePoint(5.791889, 43.252333), 4326), 15, FALSE, TRUE);

-- Circuit de Nevers Magny-Cours
INSERT INTO circuit_points (circuit_id, position, point_order, is_start, is_finish) VALUES
(2, ST_SetSRID(ST_MakePoint(3.166217, 46.865458), 4326), 1, TRUE, FALSE),
(2, ST_SetSRID(ST_MakePoint(3.165917, 46.866058), 4326), 2, FALSE, FALSE),
(2, ST_SetSRID(ST_MakePoint(3.165217, 46.866758), 4326), 3, FALSE, FALSE),
(2, ST_SetSRID(ST_MakePoint(3.164617, 46.867458), 4326), 4, FALSE, FALSE),
(2, ST_SetSRID(ST_MakePoint(3.163917, 46.868158), 4326), 5, FALSE, FALSE),
(2, ST_SetSRID(ST_MakePoint(3.162917, 46.868258), 4326), 6, FALSE, FALSE),
(2, ST_SetSRID(ST_MakePoint(3.161917, 46.868358), 4326), 7, FALSE, FALSE),
(2, ST_SetSRID(ST_MakePoint(3.160917, 46.868158), 4326), 8, FALSE, FALSE),
(2, ST_SetSRID(ST_MakePoint(3.160417, 46.867458), 4326), 9, FALSE, FALSE),
(2, ST_SetSRID(ST_MakePoint(3.161117, 46.866458), 4326), 10, FALSE, FALSE),
(2, ST_SetSRID(ST_MakePoint(3.162917, 46.865458), 4326), 11, FALSE, FALSE),
(2, ST_SetSRID(ST_MakePoint(3.164617, 46.865058), 4326), 12, FALSE, FALSE),
(2, ST_SetSRID(ST_MakePoint(3.166217, 46.865458), 4326), 13, FALSE, TRUE);

-- Circuit Bugatti (Le Mans)
INSERT INTO circuit_points (circuit_id, position, point_order, is_start, is_finish) VALUES
(3, ST_SetSRID(ST_MakePoint(0.207606, 47.955631), 4326), 1, TRUE, FALSE),
(3, ST_SetSRID(ST_MakePoint(0.206906, 47.956131), 4326), 2, FALSE, FALSE),
(3, ST_SetSRID(ST_MakePoint(0.206206, 47.956631), 4326), 3, FALSE, FALSE),
(3, ST_SetSRID(ST_MakePoint(0.205506, 47.957131), 4326), 4, FALSE, FALSE),
(3, ST_SetSRID(ST_MakePoint(0.204806, 47.957531), 4326), 5, FALSE, FALSE),
(3, ST_SetSRID(ST_MakePoint(0.204106, 47.957731), 4326), 6, FALSE, FALSE),
(3, ST_SetSRID(ST_MakePoint(0.203406, 47.957631), 4326), 7, FALSE, FALSE),
(3, ST_SetSRID(ST_MakePoint(0.202706, 47.957331), 4326), 8, FALSE, FALSE),
(3, ST_SetSRID(ST_MakePoint(0.202506, 47.956631), 4326), 9, FALSE, FALSE),
(3, ST_SetSRID(ST_MakePoint(0.202906, 47.955931), 4326), 10, FALSE, FALSE),
(3, ST_SetSRID(ST_MakePoint(0.203606, 47.955431), 4326), 11, FALSE, FALSE),
(3, ST_SetSRID(ST_MakePoint(0.204606, 47.954931), 4326), 12, FALSE, FALSE),
(3, ST_SetSRID(ST_MakePoint(0.205606, 47.954631), 4326), 13, FALSE, FALSE),
(3, ST_SetSRID(ST_MakePoint(0.206606, 47.954831), 4326), 14, FALSE, FALSE),
(3, ST_SetSRID(ST_MakePoint(0.207306, 47.955131), 4326), 15, FALSE, FALSE),
(3, ST_SetSRID(ST_MakePoint(0.207606, 47.955631), 4326), 16, FALSE, TRUE);

-- Circuit de Dijon-Prenois
INSERT INTO circuit_points (circuit_id, position, point_order, is_start, is_finish) VALUES
(4, ST_SetSRID(ST_MakePoint(4.902344, 47.363406), 4326), 1, TRUE, FALSE),
(4, ST_SetSRID(ST_MakePoint(4.903344, 47.364406), 4326), 2, FALSE, FALSE),
(4, ST_SetSRID(ST_MakePoint(4.904344, 47.365406), 4326), 3, FALSE, FALSE),
(4, ST_SetSRID(ST_MakePoint(4.905344, 47.365906), 4326), 4, FALSE, FALSE),
(4, ST_SetSRID(ST_MakePoint(4.906344, 47.365806), 4326), 5, FALSE, FALSE),
(4, ST_SetSRID(ST_MakePoint(4.907044, 47.365406), 4326), 6, FALSE, FALSE),
(4, ST_SetSRID(ST_MakePoint(4.907344, 47.364706), 4326), 7, FALSE, FALSE),
(4, ST_SetSRID(ST_MakePoint(4.907244, 47.363906), 4326), 8, FALSE, FALSE),
(4, ST_SetSRID(ST_MakePoint(4.906844, 47.363206), 4326), 9, FALSE, FALSE),
(4, ST_SetSRID(ST_MakePoint(4.905844, 47.362706), 4326), 10, FALSE, FALSE),
(4, ST_SetSRID(ST_MakePoint(4.904844, 47.362406), 4326), 11, FALSE, FALSE),
(4, ST_SetSRID(ST_MakePoint(4.903844, 47.362406), 4326), 12, FALSE, FALSE),
(4, ST_SetSRID(ST_MakePoint(4.902844, 47.362506), 4326), 13, FALSE, FALSE),
(4, ST_SetSRID(ST_MakePoint(4.902344, 47.363406), 4326), 14, FALSE, TRUE);

-- Circuit de Lédenon
INSERT INTO circuit_points (circuit_id, position, point_order, is_start, is_finish) VALUES
(5, ST_SetSRID(ST_MakePoint(4.500953, 43.947006), 4326), 1, TRUE, FALSE),
(5, ST_SetSRID(ST_MakePoint(4.501953, 43.947506), 4326), 2, FALSE, FALSE),
(5, ST_SetSRID(ST_MakePoint(4.502953, 43.948006), 4326), 3, FALSE, FALSE),
(5, ST_SetSRID(ST_MakePoint(4.503953, 43.948306), 4326), 4, FALSE, FALSE),
(5, ST_SetSRID(ST_MakePoint(4.504953, 43.948206), 4326), 5, FALSE, FALSE),
(5, ST_SetSRID(ST_MakePoint(4.505953, 43.947706), 4326), 6, FALSE, FALSE),
(5, ST_SetSRID(ST_MakePoint(4.506453, 43.947206), 4326), 7, FALSE, FALSE),
(5, ST_SetSRID(ST_MakePoint(4.506253, 43.946706), 4326), 8, FALSE, FALSE),
(5, ST_SetSRID(ST_MakePoint(4.505253, 43.946206), 4326), 9, FALSE, FALSE),
(5, ST_SetSRID(ST_MakePoint(4.504253, 43.945706), 4326), 10, FALSE, FALSE),
(5, ST_SetSRID(ST_MakePoint(4.503253, 43.945406), 4326), 11, FALSE, FALSE),
(5, ST_SetSRID(ST_MakePoint(4.502253, 43.945506), 4326), 12, FALSE, FALSE),
(5, ST_SetSRID(ST_MakePoint(4.501253, 43.945806), 4326), 13, FALSE, FALSE),
(5, ST_SetSRID(ST_MakePoint(4.500953, 43.946406), 4326), 14, FALSE, FALSE),
(5, ST_SetSRID(ST_MakePoint(4.500953, 43.947006), 4326), 15, FALSE, TRUE);

-- Les autres circuits suivent le même modèle...
-- Circuit Carole
INSERT INTO circuit_points (circuit_id, position, point_order, is_start, is_finish) VALUES
(6, ST_SetSRID(ST_MakePoint(2.513486, 48.977878), 4326), 1, TRUE, FALSE),
(6, ST_SetSRID(ST_MakePoint(2.514486, 48.977878), 4326), 2, FALSE, FALSE),
(6, ST_SetSRID(ST_MakePoint(2.515486, 48.977878), 4326), 3, FALSE, FALSE),
(6, ST_SetSRID(ST_MakePoint(2.516486, 48.977678), 4326), 4, FALSE, FALSE),
(6, ST_SetSRID(ST_MakePoint(2.517486, 48.977478), 4326), 5, FALSE, FALSE),
(6, ST_SetSRID(ST_MakePoint(2.517986, 48.977078), 4326), 6, FALSE, FALSE),
(6, ST_SetSRID(ST_MakePoint(2.517986, 48.976678), 4326), 7, FALSE, FALSE),
(6, ST_SetSRID(ST_MakePoint(2.517486, 48.976278), 4326), 8, FALSE, FALSE),
(6, ST_SetSRID(ST_MakePoint(2.516486, 48.976078), 4326), 9, FALSE, FALSE),
(6, ST_SetSRID(ST_MakePoint(2.515486, 48.976078), 4326), 10, FALSE, FALSE),
(6, ST_SetSRID(ST_MakePoint(2.514486, 48.976278), 4326), 11, FALSE, FALSE),
(6, ST_SetSRID(ST_MakePoint(2.513486, 48.976478), 4326), 12, FALSE, FALSE),
(6, ST_SetSRID(ST_MakePoint(2.512986, 48.976878), 4326), 13, FALSE, FALSE),
(6, ST_SetSRID(ST_MakePoint(2.512986, 48.977278), 4326), 14, FALSE, FALSE),
(6, ST_SetSRID(ST_MakePoint(2.513486, 48.977878), 4326), 15, FALSE, TRUE);

-- Circuit du Val de Vienne
INSERT INTO circuit_points (circuit_id, position, point_order, is_start, is_finish) VALUES
(7, ST_SetSRID(ST_MakePoint(0.597542, 46.237367), 4326), 1, TRUE, FALSE),
(7, ST_SetSRID(ST_MakePoint(0.598542, 46.237867), 4326), 2, FALSE, FALSE),
(7, ST_SetSRID(ST_MakePoint(0.599542, 46.238367), 4326), 3, FALSE, FALSE),
(7, ST_SetSRID(ST_MakePoint(0.600542, 46.238667), 4326), 4, FALSE, FALSE),
(7, ST_SetSRID(ST_MakePoint(0.601542, 46.238767), 4326), 5, FALSE, FALSE),
(7, ST_SetSRID(ST_MakePoint(0.602542, 46.238667), 4326), 6, FALSE, FALSE),
(7, ST_SetSRID(ST_MakePoint(0.603542, 46.238367), 4326), 7, FALSE, FALSE),
(7, ST_SetSRID(ST_MakePoint(0.604042, 46.237867), 4326), 8, FALSE, FALSE),
(7, ST_SetSRID(ST_MakePoint(0.604042, 46.237367), 4326), 9, FALSE, FALSE),
(7, ST_SetSRID(ST_MakePoint(0.603542, 46.236867), 4326), 10, FALSE, FALSE),
(7, ST_SetSRID(ST_MakePoint(0.602542, 46.236567), 4326), 11, FALSE, FALSE),
(7, ST_SetSRID(ST_MakePoint(0.601542, 46.236467), 4326), 12, FALSE, FALSE),
(7, ST_SetSRID(ST_MakePoint(0.600542, 46.236567), 4326), 13, FALSE, FALSE),
(7, ST_SetSRID(ST_MakePoint(0.599542, 46.236867), 4326), 14, FALSE, FALSE),
(7, ST_SetSRID(ST_MakePoint(0.598542, 46.237067), 4326), 15, FALSE, FALSE),
(7, ST_SetSRID(ST_MakePoint(0.597542, 46.237367), 4326), 16, FALSE, TRUE);

-- Circuit de Charade
INSERT INTO circuit_points (circuit_id, position, point_order, is_start, is_finish) VALUES
(8, ST_SetSRID(ST_MakePoint(3.034822, 45.747008), 4326), 1, TRUE, FALSE),
(8, ST_SetSRID(ST_MakePoint(3.035822, 45.747508), 4326), 2, FALSE, FALSE),
(8, ST_SetSRID(ST_MakePoint(3.036822, 45.748008), 4326), 3, FALSE, FALSE),
(8, ST_SetSRID(ST_MakePoint(3.037822, 45.748308), 4326), 4, FALSE, FALSE),
(8, ST_SetSRID(ST_MakePoint(3.038822, 45.748208), 4326), 5, FALSE, FALSE),
(8, ST_SetSRID(ST_MakePoint(3.039822, 45.747908), 4326), 6, FALSE, FALSE),
(8, ST_SetSRID(ST_MakePoint(3.040322, 45.747408), 4326), 7, FALSE, FALSE),
(8, ST_SetSRID(ST_MakePoint(3.040322, 45.746908), 4326), 8, FALSE, FALSE),
(8, ST_SetSRID(ST_MakePoint(3.039822, 45.746408), 4326), 9, FALSE, FALSE),
(8, ST_SetSRID(ST_MakePoint(3.038822, 45.746108), 4326), 10, FALSE, FALSE),
(8, ST_SetSRID(ST_MakePoint(3.037822, 45.745908), 4326), 11, FALSE, FALSE),
(8, ST_SetSRID(ST_MakePoint(3.036822, 45.745808), 4326), 12, FALSE, FALSE),
(8, ST_SetSRID(ST_MakePoint(3.035822, 45.745908), 4326), 13, FALSE, FALSE),
(8, ST_SetSRID(ST_MakePoint(3.034822, 45.746208), 4326), 14, FALSE, FALSE),
(8, ST_SetSRID(ST_MakePoint(3.034322, 45.746708), 4326), 15, FALSE, FALSE),
(8, ST_SetSRID(ST_MakePoint(3.034822, 45.747008), 4326), 16, FALSE, TRUE);

-- Circuit de Nogaro
INSERT INTO circuit_points (circuit_id, position, point_order, is_start, is_finish) VALUES
(9, ST_SetSRID(ST_MakePoint(-0.036764, 43.770883), 4326), 1, TRUE, FALSE),
(9, ST_SetSRID(ST_MakePoint(-0.037764, 43.771383), 4326), 2, FALSE, FALSE),
(9, ST_SetSRID(ST_MakePoint(-0.038764, 43.771883), 4326), 3, FALSE, FALSE),
(9, ST_SetSRID(ST_MakePoint(-0.039764, 43.772183), 4326), 4, FALSE, FALSE),
(9, ST_SetSRID(ST_MakePoint(-0.040764, 43.772083), 4326), 5, FALSE, FALSE),
(9, ST_SetSRID(ST_MakePoint(-0.041764, 43.771783), 4326), 6, FALSE, FALSE),
(9, ST_SetSRID(ST_MakePoint(-0.042264, 43.771283), 4326), 7, FALSE, FALSE),
(9, ST_SetSRID(ST_MakePoint(-0.042264, 43.770783), 4326), 8, FALSE, FALSE),
(9, ST_SetSRID(ST_MakePoint(-0.041764, 43.770283), 4326), 9, FALSE, FALSE),
(9, ST_SetSRID(ST_MakePoint(-0.040764, 43.769983), 4326), 10, FALSE, FALSE),
(9, ST_SetSRID(ST_MakePoint(-0.039764, 43.769783), 4326), 11, FALSE, FALSE),
(9, ST_SetSRID(ST_MakePoint(-0.038764, 43.769683), 4326), 12, FALSE, FALSE),
(9, ST_SetSRID(ST_MakePoint(-0.037764, 43.769783), 4326), 13, FALSE, FALSE),
(9, ST_SetSRID(ST_MakePoint(-0.036764, 43.770083), 4326), 14, FALSE, FALSE),
(9, ST_SetSRID(ST_MakePoint(-0.036264, 43.770583), 4326), 15, FALSE, FALSE),
(9, ST_SetSRID(ST_MakePoint(-0.036764, 43.770883), 4326), 16, FALSE, TRUE);

-- Circuit de Pau-Arnos
INSERT INTO circuit_points (circuit_id, position, point_order, is_start, is_finish) VALUES
(10, ST_SetSRID(ST_MakePoint(-0.579853, 43.418722), 4326), 1, TRUE, FALSE),
(10, ST_SetSRID(ST_MakePoint(-0.580853, 43.419222), 4326), 2, FALSE, FALSE),
(10, ST_SetSRID(ST_MakePoint(-0.581853, 43.419722), 4326), 3, FALSE, FALSE),
(10, ST_SetSRID(ST_MakePoint(-0.582853, 43.420022), 4326), 4, FALSE, FALSE),
(10, ST_SetSRID(ST_MakePoint(-0.583853, 43.419922), 4326), 5, FALSE, FALSE),
(10, ST_SetSRID(ST_MakePoint(-0.584853, 43.419622), 4326), 6, FALSE, FALSE),
(10, ST_SetSRID(ST_MakePoint(-0.585353, 43.419122), 4326), 7, FALSE, FALSE),
(10, ST_SetSRID(ST_MakePoint(-0.585353, 43.418622), 4326), 8, FALSE, FALSE),
(10, ST_SetSRID(ST_MakePoint(-0.584853, 43.418122), 4326), 9, FALSE, FALSE),
(10, ST_SetSRID(ST_MakePoint(-0.583853, 43.417822), 4326), 10, FALSE, FALSE),
(10, ST_SetSRID(ST_MakePoint(-0.582853, 43.417622), 4326), 11, FALSE, FALSE),
(10, ST_SetSRID(ST_MakePoint(-0.581853, 43.417522), 4326), 12, FALSE, FALSE),
(10, ST_SetSRID(ST_MakePoint(-0.580853, 43.417622), 4326), 13, FALSE, FALSE),
(10, ST_SetSRID(ST_MakePoint(-0.579853, 43.417922), 4326), 14, FALSE, FALSE),
(10, ST_SetSRID(ST_MakePoint(-0.579353, 43.418422), 4326), 15, FALSE, FALSE),
(10, ST_SetSRID(ST_MakePoint(-0.579853, 43.418722), 4326), 16, FALSE, TRUE);

-- Ajout des points de secteur pour le Circuit Paul Ricard (exemple)
UPDATE circuit_points 
SET is_sector_end = TRUE, sector_number = 1 
WHERE circuit_id = 1 AND point_order = 5;

UPDATE circuit_points 
SET is_sector_end = TRUE, sector_number = 2 
WHERE circuit_id = 1 AND point_order = 10;

-- Ajout des points de secteur pour Magny-Cours (exemple)
UPDATE circuit_points 
SET is_sector_end = TRUE, sector_number = 1 
WHERE circuit_id = 2 AND point_order = 4;

UPDATE circuit_points 
SET is_sector_end = TRUE, sector_number = 2 
WHERE circuit_id = 2 AND point_order = 8;