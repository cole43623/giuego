const Lisa =[
['Il Signore degli Anelli: Il Ritorno del Re', 'Frodo Baggins', 'Aragorn', 'Legolas', 'Gandalf', 'Gollum', 'Minas Tirith', 'Sauron', 'Viggo Mortensen', 'Andy Serkis', 'Peter Jackson', 'Anello', 'Terra di Mezzo', 'Rohan', 'Battaglia dei Campi del Pelennor', 'Eowyn'],
["Star Wars", 'Luke Skywalker', 'Darth Vader', 'Han Solo', 'Leia Organa', 'Yoda', 'Lando Calrissian', 'Hoth', 'Bespin', 'Millennium Falcon', 'John Williams', 'George Lucas', 'Carbonite', 'Forza', 'Tauntaun', 'Imperatore Palpatine'],
['Trono di Spade', 'Jon Snow', 'Daenerys Targaryen', 'Tyrion Lannister', 'Arya Stark', 'Sansa Stark', 'Bran Stark', 'Cersei Lannister', 'Westeros', 'Draghi', 'HBO', 'Inverno', 'House of the Dragon', 'Muro', 'Esercito dei morti', 'George R.R. Martin'],
['Marvel Cinematic Universe (MCU)', 'Stan Lee', 'Captain America', 'Thor', 'Hulk', 'Vedova nera', 'Occhio di Falco', 'Thanos', 'Avengers', 'Gemme dell\'infinito', 'Nick Fury', 'Wanda Maximoff', 'Doctor Strange', 'Guardiani della Galassia', 'Spider-Man', 'Kevin Feige'],
['Giappone', 'Tokyo', 'Sushi', 'Samurai', 'Monte Fuji', 'Shintoismo', 'Geisha', 'Manga', 'Shinkansen', 'Kimono', 'Ikebana', 'Harajuku', 'Kyoto', 'J-pop', 'Origami', 'Tempio Senso-ji'],
['Italia', 'Roma', 'Pizza', 'Colosseo', 'Rinascimento', 'Leonardo da Vinci', 'Venezia', 'Moda', 'Ferrari', 'Pasta', 'Vaticano', 'Firenze', 'Mare Mediterraneo', 'Gelato', 'Mafia', 'Michelangelo'],
['Tecnologia', 'Intelligenza artificiale', 'Smartphone', 'Internet', 'Cloud computing', 'Big data', 'Robotica', 'Realtà virtuale', 'Blockchain', '5G', 'Automazione', 'IoT (Internet delle cose)', 'Machine learning', 'Cybersecurity', 'App', 'Social media'],
['Beyoncé', "Destiny's Child", 'Lemonade', 'Jay-Z', 'Coachella', 'Sasha Fierce', 'Grammy', 'Ivy Park', 'Halo', 'Homecoming', 'Blue Ivy', 'Houston', 'Single Ladies', 'Black Is King', 'Run the World', 'Formation'],
['Leonardo DiCaprio', 'Titanic', 'The Revenant', 'Inception', 'Martin Scorsese', 'Oscar', 'Ambientalismo', 'The Wolf of Wall Street', 'C\'era una volta a... Hollywood', 'Prova a prendermi', 'Il grande Gatsby', 'Shutter Island', 'Gangs of New York', 'Django Unchained', 'Hollywood', 'Cambiamento climatico'],
['Taylor Swift', 'Fearless', 'Red', 'Folklore', '1989', 'Reputation', 'Grammy', 'Swifties', 'All Too Well', 'Nashville', 'Shake It Off', 'Joe Alwyn', 'Songwriting', 'Love Story', 'Speak Now', 'Eras Tour'],
['Cristiano Ronaldo', 'Real Madrid', 'Manchester United', 'Juventus', 'Portogallo', "Pallone d'oro", 'Champions League', 'Georgina Rodríguez', 'CR7', 'Sporting CP', 'Nike', 'Al Nassr', 'Punizioni', 'Euro 2016', 'Capocannoniere', 'Esultanza'],
['Apple', 'iPhone', 'MacBook', 'Steve Jobs', 'Tim Cook', 'App Store', 'iOS', 'Apple Watch', 'iPad', 'Siri', 'iCloud', 'AirPods', 'Apple Music', 'Retina Display', 'Cupertino', 'Innovazione'],
['Elon Musk', 'Tesla', 'SpaceX', 'PayPal', 'Neuralink', 'SolarCity', 'Marte', 'Starlink', 'Model S', 'Hyperloop', 'Boring Company', 'Dogecoin', 'Twitter', 'Auto elettriche', 'Lanci di razzi', 'Intelligenza artificiale'],
['Antartide', 'Pinguini', 'Ghiaccio', 'Polo Sud', 'Esplorazione', 'Stazione di ricerca', 'Aurora australe', 'Iceberg', 'Clima estremo', 'Shackleton', 'Basi scientifiche', 'Oceano Antartico', 'Permafrost', 'Secche McMurdo', 'Barriera di Ross', 'Fauna selvatica'],
['Fantascienza', 'Cyborg', 'Viaggio nel tempo', 'Alieni', 'Robot', 'Utopie', 'Dune', 'Asimov', 'Star Trek', 'Stargate', 'Philip K. Dick', 'Matrix', 'Futuro distopico', 'Teletrasporto', 'Intelligenza artificiale', 'Spazio'],
['Cucina Molecolare', 'Sferificazione', 'Gelificazione', 'Nitrogeno liquido', 'Ferran Adrià', 'Heston Blumenthal', 'Schiume', 'Emulsioni', 'Alginate', 'Texturas', 'Cottura a bassa temperatura', 'Microonde', 'Additivi alimentari', 'Polveri', 'Gastronomia moderna', 'Esperimenti culinari'],
['Stephen King', 'It', 'Shining', 'Carrie', 'Misery', 'Maine', 'Horror', 'Dark Tower', 'Pet Sematary', 'Pennywise', 'Doctor Sleep', 'The Stand', 'Castle Rock', 'Cujo', 'Richard Bachman', 'Romanzi'],
['Egittologia', 'Piramidi', 'Faraoni', 'Cleopatra', 'Sfinge', 'Tutankhamon', 'Nilo', 'Geroglifici', 'Stele di Rosetta', 'Valle dei Re', 'Sarcofago', 'Ramses', 'Ankh', 'Tempio di Karnak', 'Antico Egitto', 'Mummificazione'],
['Scacchi', 'En passant', 'Regina', 'Cavallo', 'Arrocco', 'Alfiere', 'Pedone', 'Scacco matto', 'Gambetto di Donna', 'ELO', 'Grande Maestro', 'Bobby Fischer', 'Apertura siciliana', 'Scacchiera', 'Finale', 'Strategia'],
['Yoga', 'Asana', 'Meditazione', 'Pranayama', 'Namaste', 'Vinyasa', 'Hatha', 'Bikram', 'Chakra', 'Kundalini', 'Shavasana', 'Guru', 'Mantra', 'Elasticità', 'Mindfulness', 'Om'],
['Astronomia', 'Galassia', 'Nebulosa', 'Pianeti', 'Stelle', 'Telescopio', 'Via Lattea', 'Costellazioni', 'Buco nero', 'Supernova', 'Andromeda', 'Big Bang', 'Esopianeti', 'Charles Messier', 'Spettroscopia', 'Osservatorio'],
['Leonardo da Vinci', 'Mona Lisa', 'Cenacolo', 'Firenze', 'Inventore', 'Anatomia', 'Codice Atlantico', 'Disegni', 'Uomo Vitruviano', 'Scienza', 'Pittura', 'Ingegneria', 'Rinascimento', 'Paracadute', 'Elicottero', 'Genio'],
['Fotografia', 'Reflex', 'Obiettivo', 'ISO', 'Diaframma', 'Esposizione', 'Photoshop', 'Ritratto', 'Paesaggio', 'Bianco e Nero', 'Flash', 'Nikon', 'Macro', 'Post-produzione', 'Scatto', 'Apertura'],
['Moda', 'Haute Couture', 'Passerella', 'Designer', 'Vogue', 'Fashion Week', 'Tendenze', 'Collezione', 'Manichino', 'Sfilata', 'Accessori', 'Stile', 'Pret-a-porter', 'Boutique', 'Modella', 'Tessuti'],
['Roberto Benigni', 'La Vita è Bella', 'Oscar', 'Attore', 'Regista', 'Comico', 'Dante', 'Pinocchio', 'Sanremo', 'Film', 'Firenze', 'Johnny Stecchino', 'Tigre e la neve', 'Cinema', 'Toscana', 'Spettacolo'],
['Milano', 'Duomo', 'La Scala', 'Navigli', 'Moda', 'Brera', 'Triennale', 'Expo', 'Sforzesco', 'Pirelli', 'Galleria Vittorio Emanuele', 'San Siro', 'Bocconi', 'Finanza', 'Via Montenapoleone', 'Aperitivo'],
['Tecnologia Blockchain', 'Bitcoin', 'Decentralizzazione', 'Ethereum', 'Criptovaluta', 'Smart contract', 'Miner', 'Hash', 'Nodo', 'Ledger', 'ICO', 'Wallet', 'Token', 'Proof of Work', 'Blockchain', 'Satoshi Nakamoto'],
['Napoli', 'Vesuvio', 'Pizza', 'Spaccanapoli', "Castel dell'Ovo", 'Pompei', 'San Gennaro', 'Napoli Sotterranea', 'Lungomare', 'Quartieri Spagnoli', 'Maschio Angioino', 'Pasticceria', 'Caffè', 'Teatro San Carlo', 'Posillipo', 'Marechiaro'],
['Netflix', 'Streaming', 'Serie TV', 'Film', 'Documentari', 'Maratone', 'Originali', 'Black Mirror', 'Stranger Things', 'Narcos', 'The Crown', 'Stocks', 'Abbonamento', 'Consigliati', 'Rosso', 'On-demand'],
['Firenze', 'Ponte Vecchio', 'Uffizi', 'David', 'Arno', 'Duomo', 'Santa Maria Novella', 'Palazzo Pitti', 'Boboli', 'Dante Alighieri', 'Rinascimento', 'Basilica di Santa Croce', 'Piazza della Signoria', 'Accademia', 'Medici', 'Bargello'],
['New York City', 'Statua della Libertà', 'Central Park', 'Empire State Building', 'Times Square', 'Broadway', 'Manhattan', 'Brooklyn Bridge', 'Wall Street', 'Fifth Avenue', 'Metropolitana', 'Grande mela', 'Grattacieli', 'Harlem', 'Yankees', 'Ellis Island'],
['Juventus', 'Torino', 'Serie A', 'Scudetto', 'Cristiano Ronaldo', 'Allianz Stadium', 'Bianconeri', 'Andrea Agnelli', 'Del Piero', 'Buffon', 'Zebra', 'Derby della Mole', 'Champions League', 'Pirlo', 'Vecchia Signora', 'Zoff'],
['Parigi', 'Torre Eiffel', 'Louvre', 'Montmartre', 'Seine', 'Notre-Dame', 'Champs-Élysées', 'Sacré-Cœur', 'Metro', 'Quartiere Latino', 'Baguette', 'Moda', 'Musei', 'Architettura', 'Gastronomia', 'Tour de France'],
['Pavarotti', 'Tenore', 'Opera', 'La Scala', 'Modena', 'Nessun Dorma', 'I tre tenori', 'Verdi', 'Puccini', 'Aida', 'Turandot', 'Arena di Verona', 'Orchestra', 'Luciano', 'Caruso', 'Musica classica'],
['Barcellona', 'Sagrada Família', 'Gaudí', 'La Rambla', 'Camp Nou', 'Parc Güell', 'Casa Batlló', 'Barri Gòtic', 'Palau de la Música', 'Museo di Picasso', 'Barceloneta', 'Montjuïc', 'Mercato della Boqueria', 'Antoni Gaudí', 'Passeig de Gràcia', 'Catalonia'],
['Londra', 'Big Ben', 'Buckingham Palace', 'London Eye', 'Tower Bridge', 'British Museum', 'Westminster Abbey', 'Piccadilly Circus', 'Covent Garden', 'Tate Modern', 'Trafalgar Square', 'Soho', 'The Shard', 'Camden Market', 'West End', 'Tamigi'],
['Berlino', 'Muro di Berlino', 'Porta di Brandeburgo', 'Reichstag', 'Alexanderplatz', 'Checkpoint Charlie', 'East Side Gallery', 'Museo di Pergamo', 'Potsdamer Platz', 'Tiergarten', 'Berlino Ovest/Est', 'Germania', "Memoriale dell'Olocausto", 'Kreuzberg', 'Prenzlauer Berg', 'Kulturforum'],
['Amsterdam', 'Canali', 'Van Gogh Museum', 'Rijksmuseum', 'Anna Frank', 'Heineken', 'Coffee shop', 'Vondelpark', 'Jordaan', 'Quartiere a luci rosse', 'Tulipani', 'Museo Rembrandt', 'Casa galleggiante', 'Biciclette', 'Amsterdam Centraal', 'Dam Square'],
['Roma', 'Colosseo', 'Foro Romano', 'Pantheon', 'Gualtieri', 'Fontana di Trevi', 'Piazza Navona', 'Tevere', 'Cupola', 'Circo Massimo', 'Carbonara', 'Sampietrini', 'Piazza di Spagna', 'Termini', 'Via del Corso', 'Nasoni'],
['Biodiversità', 'Specie', 'Ecosistemi', 'Estinzione', 'Conservazione', 'Habitat', 'Genetica', 'Ecosistema', 'Riserva naturale', 'Adattamento', 'Endemico', 'Fauna', 'Flora', 'Interazione', 'Minacce ambientali', 'Riconoscimento delle specie'],
['Animali Marini', 'Delfini', 'Squali', 'Balene', 'Tartarughe marine', 'Meduse', 'Mante', 'Plancton', 'Spugne', 'Alga', 'Barriera corallina', 'Foche', 'Molluschi', 'Oceano', 'Migrazione', 'Pesce palla'],
['Savana', 'Africa', 'Elefanti', 'Leone', 'Giraffa', 'Zebra', 'Acacia', 'Graminacee', 'Baobab', 'Safari', 'Iena', 'Deserto', 'Vegetazione', 'Antilopi', 'Predatori', 'Migrazione'],
['Serie TV "Stranger Things"', 'Hawkins', 'Demogorgone', 'Undici', 'Sottosopra', 'Dustin', 'Mike Wheeler', 'Vecna', 'Sfera del tempo', 'Sottobosco', 'Lato oscuro', 'Nancy Wheeler', 'Steve Harrington', 'Laboratorio', "Anni '80", 'X-Men'],
["Musica degli Anni '80", 'Michael Jackson', 'Madonna', 'Synthwave', 'Duran Duran', 'New Wave', 'Prince', 'MTV', 'Cyndi Lauper', 'A-ha', 'Bon Jovi', 'Depeche Mode', 'U2', 'Electro', 'Rock', 'Pop'],
["Serie TV Anni '90", 'Friends', 'Seinfeld', 'The X-Files', "Buffy l'ammazzavampiri", 'Gli amici di papà', 'Willy, il principe di Bel-Air', 'Twin Peaks', 'ER', 'Bayside School', "Dawson's Creek", 'Will & Grace', 'Innamorati pazzi', 'Melrose Place', 'Streghe', 'Pappa e ciccia'],
['Videogiochi Famosi', 'Terraria', 'Zelda', 'Pac-Man', 'Tetris', 'Sonic', 'Final Fantasy', 'Pokémon', 'Street Fighter', 'Mario Kart', 'Resident Evil', 'Halo', 'World of Warcraft', 'Minecraft', 'GTA', 'Call of Duty'],
['Rinascimento', 'Umanesimo', 'Leonardo da Vinci', 'Botticelli', 'Mecenatismo', 'Italia', 'Albrecht Dürer', 'Michelangelo', "Cosimo de' Medici", 'Stampa', 'Prospettiva', 'Riforma', 'Firenze', 'Arte', 'Innovazione', 'Rivoluzione scientifica'],
['Stampa', 'Gutenberg', 'Incunabolo', 'Tipografia', 'Diffusione', 'Rivoluzione', 'Libri', 'Cultura popolare', 'Manoscritto', 'Catalogazione', 'Editor', 'Impronta', 'Stampa a caratteri mobili', 'Bibliografia', 'Educazione', 'Comunicazione'],
['Energia Rinnovabile', 'Solare', 'Eolica', 'Geotermica', 'Biomassa', 'Sostenibilità', 'Innovazione', 'Infrastrutture', 'Rete elettrica', 'Efficienza', 'Idroelettrico', 'Carbon footprint', 'Tecnologie', 'Risparmio energetico', 'Transizione ecologica', 'Politiche ambientali'],
['Olimpiadi', 'Atletica', 'Nuoto', 'Ginnastica', 'Pallacanestro', 'Medaglie', 'Cerimonia di apertura', 'Record', 'Maratona', 'Arbitro', 'Fiamma olimpica', 'Podio', 'Pentathlon', 'Invernali', 'Ginnastica ritmica', 'Atene'],
["Film Anni '90", 'Titanic', 'Matrix', 'Forrest Gump', 'Pulp Fiction', 'Blockbuster', 'Commedia', 'Dramma', 'Attori', 'Sceneggiatura', 'Colonna sonora', 'Cult', 'Estetica', 'Regia', 'Protagonista', 'Flashback'],
['Festival Musicali', 'Glastonbury', 'Coachella', 'Scaletta', 'Palco', 'DJ', 'Headliner', 'Tendenze', 'Entrée', 'Esperienza dal vivo', 'Artisti', 'Soundcheck', 'Performances', 'Biglietti', 'Afterparty', 'Rock'],
["Moda Anni '60", 'Minigonna', 'Beatlemania', 'Twiggy', 'Vintage', 'Psychedelia', 'Haute couture', 'Prêt-à-porter', 'Icone', 'Colori pastello', 'Accessori', 'Contestatori', 'Tailleur', 'Stile', 'Eleganza', 'Retro'],
['Internet e Social Media', 'Twitter', 'Instagram', 'Hashtag', 'Meme', 'Influencer', 'Algoritmo', 'Blog', 'Viralità', 'Commenti', 'Post', 'Storytelling', 'Engagement', 'Profilo', 'Analytics', 'Comunicazione'],
['Esercizio Fisico e Fitness', 'Cardio', 'Allenamento', 'Pilates', 'Yoga', 'Circuito', 'Endorfine', 'Routine', 'Recupero', 'Personal trainer', 'Flexibilità', 'Forza', 'Resistenza', 'Aerobico', 'Stretching', 'Obiettivi'],
["Cinema Anni '80", 'Indiana Jones', 'Ritorno al Futuro', 'Ghostbusters', 'Spielberg', 'Iconico', 'Avventura', 'Cult', 'Trama', 'Effetti speciali', 'Nostalgia', 'Teen movie', 'Blockbuster', 'E.T.', 'Colonna sonora', 'I goonies'],
['Hobby', 'Giardinaggio', 'Lettura', 'Pittura', 'Fotografia', 'Cucinare', 'Escursionismo', 'Modellismo', 'Collezionismo', 'Cucito', 'Birdwatching', 'Creatività', 'Relax', 'Manualità', 'Treni', 'Passione'],
['"Lost"', 'Isola', 'Sopravvivenza', 'Mistero', 'Aereo', 'Locke', 'Fumo', 'Flashback', 'Hurley', 'Charles Widmore', 'Botola', 'Desmond', 'Intrigo', 'Plot twist', 'Sci-fi', 'Monoliti'],
['"Harry Potter"', 'Magia', 'Hogwarts', 'Voldemort', 'Bacchetta', 'Quidditch', 'Grifondoro', 'Malfoy', 'Incantesimi', 'Hermione', 'Pluffa', 'Horcrux', 'J. K. Rowling', 'Pensatoio', 'Mangiamorte', 'Serpeverde'],
['"Breaking Bad"', 'Walter White', 'Metanfetamine', 'Jesse Pinkman', 'Heisenberg', 'Criminalità', 'Albuquerque', 'Blue meth', 'Riciclaggio', 'Gustavo Fring', 'Better call Saul', 'El Camino', 'Conflitto', 'Cartello', 'Drammatico', 'Los pollos hermanos'],
['"The Office"', 'Scranton', 'Dunder Mifflin', 'Michael Scott', 'Jim Halpert', 'Pam Beesly', 'Comicità', 'Documentario', 'Dwight Schrute', 'Ufficio', 'Satira', 'Eccentricità', 'Colleghi', 'Carta', 'Scherzi', 'Ricky Gervais'],
['"Avatar"', 'Pandora', 'Navi', 'James Cameron', '3D', 'Acqua', 'Tecnologia', 'Colonie', 'Ecologia', 'Sully', 'Invasione', 'Record', 'Blu', 'Colonialismo', 'Tradizione', 'Sensibilità ambientale'],
['"Il cavaliere oscuro"', 'Joker', 'Batman', 'Gotham', 'Christopher Nolan', 'Harvey Dent', 'Bruce Wayne', 'Cattivo/Villain', 'Criminalità', 'Batmobile', 'Heath Ledger', '2008', 'Psicologia', 'Michael Caine', 'Trilogia', 'Corruzione'],
['"Black Panther"', 'Wakanda', "T'Challa", 'Supereroe', 'Marvel', 'Vibranio', 'Killmonger', 'Okoye', 'Shuri', 'Africa', 'Avenger', 'Costumi', 'Politica', 'Chadwick Boseman', 'Ryan Coogler', 'Utopia'],
['"BTS"', 'K-pop', 'Idol', 'ARMY', 'Jin', 'Jimin', 'RM (Rap Monster)', 'Album', 'Concerti', 'Jung Kook', 'Corea del Sud', 'Bangtan Sonyeondan', 'Coreografie', 'UNICEF', 'Leva militare', 'Wings'],
['Europei 2021', "It's coming home", 'Italia', 'Inghilterra', 'Wembley', 'Gianluigi Donnarumma', 'Saka', 'Chiellini', 'Tiro a giro', 'Rigori', 'Federico Chiesa', 'Pasta asciutta', '11 luglio', 'Posticipati', 'Roberto Mancini', 'Calcio'],
['"Squid Game"', 'Gioco', 'Biscotti', 'Seong Gi-hun', 'Maschere', 'Soldi', 'Eliminazione', 'Forme geometriche', 'Sangue', 'Contratto', 'Corea del sud', 'Battle Royale', 'Colori', 'Netflix', 'Biglie', 'Debito'],
['TikTok', 'Video brevi', 'Viralità', 'Challenge', 'Influencer', 'Balli', 'Hashtag', 'Trend', 'Creatività', 'Algoritmo', 'Lip-sync', 'Musically', 'Musica', 'Vine', 'Khaby Lame', 'Cina'],
['COVID-19', 'Pandemia', 'Distanziamento', 'Congiunti', 'Mascherine', 'Lockdown', 'Vaccino', 'Giuseppe Conte', 'Quarantena', 'Ce la faremo', 'Terapia intensiva', 'Astrazeneca', 'DPCM', 'Varianti', 'Tampone', 'Cina'],
["L'Era Glaciale (film)", 'Scrat', 'Manny', 'Sid', 'Diego', 'Glaciazione', 'Dinosauri', 'Blue Sky Studios', 'Animazione', 'Mammut', 'Pinguini', 'Acchiappasogni', 'Caccia', 'Avventura', 'Preistoria', 'Ghianda'],
['Shrek', 'Orco', 'Fiona', 'Ciuchino', 'Farquaad', 'Palude', 'Cipolle', 'Favole', 'Cameron Diaz', 'Antonio Banderas', 'Drago', 'Eddie Murphy', 'Parodia', 'Molto molto lontano', 'Smash Mouth', 'Castello'],
['Disney', 'Topolino', 'Marvel', 'Biancaneve', 'Fox', 'Star wars', 'Pixar', 'Animazione', 'Walt Disney', 'Disney World / Disneyland', 'Principesse', 'La Sirenetta', 'Frozen', 'Oscar', 'Fantasia', 'Musical'],
['Michael Jackson', 'Thriller', 'Moonwalk', 'Beat It', 'Billie Jean', 'Re del Pop', 'Guanti', 'Neverland', 'MTV', 'Jackson 5', 'Smooth Criminal', 'Record', 'Scimpanzé', 'Vitiligine', 'Bad', 'Dangerous'],
['Jack Black', 'School of Rock', 'Tenacious D', 'Kung Fu Panda', 'Commedia', 'Film', 'King Kong', 'Strumentista', 'Stand-up', 'Nacho Libre', 'Doppiatore', 'Rock', 'Bowser', 'Amore a prima svista', 'Gulliver', 'Yotube'],
['Sud Africa', 'Nelson Mandela', 'Johannesburg', 'Cape Town', 'Safari', 'Kruger National Park', 'Apartheid', 'Rainbow Nation', 'Bantustan', 'Zulu', 'Vino', 'Fynbos', 'Hermanus', 'Oro', 'Kalahari', 'Elon Musk'],
['Nintendo', 'Mario', 'Zelda', 'Game Boy', 'Switch', 'Donkey Kong', 'Pokémon', 'NES', 'Wii', 'Yamauchi Fusajirō', 'DS', 'Giappone', 'Kirby', 'Splatoon', 'Smash Bros', 'Carte'],
['Spagna', 'Madrid', 'Barcellona', 'Paella', 'Flamenco', 'Sagrada Família', 'Alhambra', 'Tapas', 'La Rioja', 'Gaudí', 'Pamplona', 'Granada', 'Monarchia', 'Ibiza', 'Segovia', 'Corrida'],
['Mr. Bean', 'Rowan Atkinson', 'Commedia', 'Silenzioso / muto', 'Teddy', 'Mini cooper', 'Sketch', 'UK', 'Mimo', 'Neo', 'Cravatta', 'Vacanze', 'Julia Wicket', 'Milionario', 'Stupido', 'Reliant Regal'],
['Pallavolo', 'Rete', 'Set', 'Ace', 'Schiacciata', 'William Morgan', 'Alzatore', 'Blocco', 'Muro', 'Libero', 'Allenatore', 'Servizio', 'Rotazione', 'Squadra', 'Martello', 'Invasione'],
['NBA', 'LeBron James', 'Golden State Warriors', 'Basketball', 'Draft', 'MVP', 'Tripla doppia', 'All-Star Game', "Shaquille O'Neal", 'Michael Jordan', 'Boston Celtics', 'Playoff', 'Passi', 'Jerry West', 'EST/WEST', 'Finali'],
['Cinema', 'Regia', 'Sceneggiatura', 'Montaggio', 'Attori', 'Colonna sonora', 'Genere', 'Oscar', 'Set', 'Hollywood', 'Film', 'Sala', 'Proiettore', 'Cinecittà', 'Effetti speciali', 'Louis Lumière'],
['Aerei', 'Cabina di pilotaggio', 'Boeing', 'Aliante', 'Atterraggio', 'Decollo', 'Turbina', 'Fratelli Wright', 'Fusoliera', 'Jet', 'Comandante', 'Volo', 'Concorde', 'Ali', 'Turbolenza', 'Torre di controllo'],
['Russia', 'Mosca', 'San Pietroburgo', 'Cremlino', 'Borscht', 'Transiberiana', 'Putin', 'Gulag', 'Matrioska', 'Vodka', 'Volga', 'Zar', 'Siberia', 'Cattedrale di San Basilio', 'Urali', 'Uova Fabergé'],
['Robert De Niro', 'Taxi Driver', 'Quei bravi ragazzi', 'Toro scatenato', 'Al Pacino', 'Martin Scorsese', 'Il padrino - Parte II', 'Italia', 'Heat', 'Oscar', 'Coppola', 'Stai parlando con me?', 'New York City', 'Ferruccio Amendola', 'Taxi Driver', 'The Irishman'],
['Beatles', 'Apple Records', 'Yōko Ono', 'George Harrison', 'Ringo Starr', 'Abbey Road', 'Sgt. Pepper’s', 'Sir', 'Let It Be', 'Yellow Submarine', 'Liverpool', 'Revolver', 'Help!', 'Lucy in the Sky with Diamonds', 'Stuart Sutcliffe', 'The White Album'],
['Impero Romano', 'Cesare', 'Augusto', 'Senato', 'Legione', 'Colosseo', 'Pompei', 'Acquedotto', 'Gladiatori', 'Costantinopoli', 'Pax Romana', 'Pantheon', 'Giulio Cesare', 'SPQR', 'Cicerone', 'Imperatore'],
['Seconda Guerra Mondiale', 'D-Day', 'Nazismo', 'Olocausto', 'Pearl Harbor', 'Churchill', 'Guerra lampo', 'Stalin', 'Hiroshima', 'Campi di concentramento', 'Partigiani', 'Alleati', 'Asse', 'Progetto Manhattan', 'Franklin D. Roosevelt', 'Processo di Norimberga'],
['Ulisse', 'Odissea', 'James Joyce', 'Ettore', 'Penelope', 'Scilla e Cariddi', 'Polifemo', 'Ithaca', 'Circe', 'Telemaco', 'Nausicaa', 'Sirene', 'Troia', 'Nessuno', 'Argo', 'Omero'],
['Poker', 'Asso', 'Scala', 'Adriano Celentano', 'Colore' , 'Full', 'Chip', 'Buio', 'Check', 'All-in', 'Vedere', 'Doppia coppia', 'Casinò', 'Texas hold \'em', 'Dealer', 'Poker face'],
['SpongeBob', 'Bikini Bottom', 'Patrick', 'Squiddi', 'Krabby Patty', 'Mr. Krabs', 'Sandy Cheeks', 'Plankton', 'Ananas', 'Gary', 'Meduse', 'Patente', 'Krusty Krab', 'Nickelodeon', 'Keanu Reeves', 'Claudio Moneta'],
['Pirati dei Caraibi', 'Jack Sparrow', 'Perla Nera', 'Will Turner', 'Elizabeth Swann', 'Davy Jones', 'Tortuga', 'Barbossa', 'Sirene', 'Maledizione', 'Orlando Bloom', 'Commodoro Norrington', 'Olandese Volante', 'Voodoo', 'Galeone', 'Kraken'],
['Dragon Ball', 'Fusione', 'Saiyan', 'Kamehameha', 'Vegeta', 'Giorgio Vanni', 'Shenron', 'Bulma', 'Scimmioni', 'Trunks', 'Namek', 'Piccolo', 'Cell', 'Majin Buu', 'Toriyama', 'Capsule Corporation'],
['Antica Grecia', 'Atene', 'Partenone', 'Olimpiadi', 'Mitologia', 'Acropoli', 'Filosofia', 'Sparta', 'Democrazia', 'Platone', 'Omero', 'Isole Cicladi', 'Zeus', 'Egeo', 'Templi', 'Teatro'],
['Titanic', 'RMS', 'Iceberg', 'Southampton', 'Leonardo DiCaprio', 'Rose', '1912', 'Jack Dawson', 'White Star Line', 'Titan', 'James Cameron', 'Sopravvissuti', 'Prima classe', 'Inaffondabile', "Cuore dell'oceano", 'New York'],
['Brasile', 'Rio de Janeiro', 'Carnevale', 'Amazonia', 'Samba', 'Brasilia', 'Copacabana', 'Pelé', 'Caipirinha', 'Favelas', 'Calcio', 'Cristo Redentore', 'Pantanal', 'Bossa Nova', 'Café', 'Amazzoni'],
['Gandhi', 'Pacifismo', 'Indipendenza', 'Marcia del sale', 'Ahimsa', 'Mahatma', 'Satyagraha', 'India', 'Avvocato', 'Assassinio', 'Sudafrica', 'Harijan', 'Autogoverno', 'Bapu', 'Dharma', 'Treno'],
['Einstein', 'Relatività', 'E=mc²', 'Fisica', 'Nobel', 'Bomba atomica', 'Spazio-tempo', 'Cervello', 'Infinito', 'Quanti', 'Bose', 'Curvatura', 'Atomo', 'Universo', 'Energia', 'Germania'],
['Orchestra', 'Direttore', 'Sinfonia', 'Violino', 'Fiati', 'Percussioni', 'Whiplash', 'Bacchetta', 'Partitura', 'Concerto', 'Strumenti ad arco', 'Oboe', 'Corno', 'Triagolo', 'London Symphony Orchestra', 'Giuseppe Vessicchio'],
['Pokémon', 'Pikachu', 'Ash Ketchum', 'Pokédex', 'Team Rocket', 'Shiny', 'Capopalestra', 'Kanto', 'Poké Ball', 'Arceus', 'Leggendari', 'Professor Oak', 'Evoluzioni', 'Lavandonia', 'Centro Pokémon', 'Satoshi Tajiri'],
["Corse d'auto", 'Formula 1', 'Pit stop', 'Circuito', 'Grand Prix', 'Nascar', 'Pole position', 'Monza', 'Rally', 'Le Mans', 'Accelerazione', 'Chicane', 'Box', 'Lewis Hamilton', 'Safety car', 'Podio'],
['Paolo Villaggio', 'Fantozzi', 'Genova', 'Pina', 'Giandomenico Fracchia', 'Megaditta', 'Fabrizio De André', 'La corazzata Potëmkin', 'Roma', 'Satira', 'Sampdoria', 'Calboni', 'Professor Kranz', 'Hotel Transylvania 2', 'Mariangela', 'Goriziana'],
['Due Fantagenitori', 'Sheldon Dinkleberg', 'Cosmo', 'Wanda', 'Vicky', 'Folletti', 'Jorgen Von Strangle', 'Bachette magiche', 'Denzel Crocker', 'Tootie', 'Anti fante', 'Crimson Mentone', 'Butch Hartman', 'Poof', 'Fairy World', 'Nickelodeon'],
['Sherlock Holmes', 'Arthur Conan Doyle', 'Watson', 'Baker Street', 'Deduzione', 'Moriarty', 'Scotland Yard', 'Indagine', 'Violino', 'Londra', 'Pipa', 'Irregolari di Baker Street', 'Irene Adler', 'Elementare', 'Giallo', 'Lestrade'],
['Shakespeare', 'Amleto', 'Romeo e Giulietta', 'Macbeth', 'Otello', 'Sonetto', 'Globe Theatre', 'Elisabettiano', 'Tragedia', 'Metateatro', 'Re Lear', 'La tempesta', 'Il mercante di Venezia', 'Sogno di una notte di mezza estate', "Bardo dell'Avon", 'Joseph Fiennes'],
['NASA', 'Apollo', 'Space Shuttle', 'Hubble', 'Rover marziano', 'Stazione spaziale internazionale', 'Neil Armstrong', 'Saturn V', 'Houston', 'Allunaggio', 'Astronauta', 'Cape Canaveral', 'Voyager', 'Dwight D. Eisenhower', 'JPL (Jet Propulsion Laboratory)', 'Orion'],
['The Simpsons', 'Divano', 'Marge', 'Centrale nucleare', 'Lisa', 'Maggie', 'Springfield', 'Krusty', 'Birra Duff', 'Ned Flanders', 'Mr. Burns', 'Taverna di Boe', 'Grattachecca e Fichetto', 'Telespalla Bob', 'Ciambelle', 'La paura fa novanta'],
['James Bond', '007', 'MI6', 'Aston Martin', 'Licenza di uccidere', 'Daniel Craig', 'Casino Royale', 'Goldfinger', 'Spectre', 'Martini', 'Gadget', 'Skyfall', 'Sean Connery', 'Roger Moore', 'Bond Girl', 'Walther PPK'],
['Anime', 'Naruto', 'One Piece', 'Studio Ghibli', 'MAPPA', 'Manga', 'Crunchyroll', 'Giappone', 'Kodomo', 'Dragon Ball', 'Evangelion', 'Cosplay', 'Otaku', 'Shonen', 'VVVVID', 'Seinen'],
['Alieni', 'UFO', 'E.T.', 'Extraterrestre', 'Area 51', 'Ridley Scott', 'SETI', 'X-Files', 'Incontri ravvicinati', 'Grigi', 'Marte', 'Astronave', 'Cerchi nel grano', 'Paradosso di Fermi', 'Fantascienza', 'Nordici']
]
