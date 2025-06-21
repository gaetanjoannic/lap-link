# Ressources API Lap Link

## Circuits

| Ressource | URL | Méthodes HTTP | Paramètres et variations | Commentaires |
|-----------|-----|--------------|-------------------------|--------------|
| Liste des circuits | `/circuits` | GET | `?search={query}` - Recherche par nom/location<br>`?limit={n}&offset={n}` - Pagination | Retourne circuits avec position de départ |
| Détails d'un circuit | `/circuits/{id}` | GET | `id` - ID du circuit | Retourne circuit avec coordonnées GPS |
| Points GPS d'un circuit | `/circuits/{id}/points` | GET | `id` - ID du circuit<br>`?ordered=true` - Points triés par ordre | Pour afficher le tracé complet du circuit |
| Secteurs d'un circuit | `/circuits/{id}/sectors` | GET | `id` - ID du circuit | Pour les temps par secteur |

## Utilisateurs

| Ressource | URL | Méthodes HTTP | Paramètres et variations | Commentaires |
|-----------|-----|--------------|-------------------------|--------------|
| Inscription | `/users/register` | POST | Body: `{email, username, password}` | Création de compte |
| Connexion | `/users/login` | POST | Body: `{email, password}` | Authentification |
| Profil utilisateur | `/users/{id}` | GET, PUT | `id` - ID utilisateur<br>Body: données modifiées | Informations et mise à jour du profil<br>Ressource protégée |
| Véhicules utilisateur | `/users/{id}/vehicles` | GET | `id` - ID utilisateur | Liste des voitures de l'utilisateur<br>Ressource protégée |
| Ajouter véhicule | `/users/{id}/vehicles` | POST | `id` - ID utilisateur<br>Body: `{make, model, year, ...}` | Permet d'ajouter un véhicule<br>Ressource protégée |

## Sessions de pilotage

| Ressource | URL | Méthode HTTP | Paramètres et variations | Commentaires |
|-----------|-----|--------------|-------------------------|--------------|
| Démarrer session | `/sessions` | POST | Body: `{user_id, circuit_id, vehicle_id}` | Création nouvelle session |
| Session active | `/sessions/{id}` | GET | `id` - ID session | Détails session en cours |
| Terminer session | `/sessions/{id}/end` | PUT | `id` - ID session<br>Body: données finales | Clôture de session |
| Historique sessions | `/users/{user_id}/sessions` | GET | `user_id` - ID utilisateur<br>`?circuit_id={id}` - Filtrer par circuit<br>`?limit={n}&offset={n}` | Historique des courses |
| Enregistrer point GPS | `/sessions/{id}/points` | POST | `id` - ID session<br>Body: `{position, timestamp, speed, lap_number}` | Temps réel pendant course |

## Temps de tours

| Ressource | URL | Méthode HTTP | Paramètres et variations | Commentaires |
|-----------|-----|--------------|-------------------------|--------------|
| Temps par session | `/sessions/{id}/laps` | GET | `id` - ID session | Tous les tours d'une session |
| Enregistrer temps | `/sessions/{id}/laps` | POST | `id` - ID session<br>Body: `{lap_number, lap_time, sectors}` | Nouveau temps de tour |
| Meilleurs temps circuit | `/circuits/{id}/leaderboard` | GET | `id` - ID circuit<br>`?limit={n}` - Top N<br>`?vehicle_type={type}` - Par catégorie | Classements généraux |
| Record personnel | `/users/{user_id}/best-times` | GET | `user_id` - ID utilisateur<br>`?circuit_id={id}` - Par circuit | Meilleurs temps utilisateur |

## Crews

| Ressource | URL | Méthode HTTP | Paramètres et variations | Commentaires |
|-----------|-----|--------------|-------------------------|--------------|
| Liste des crews | `/crews` | GET | `?search={query}` - Recherche<br>`?public=true` - Crews publics | Crews disponibles |
| Détails crew | `/crews/{id}` | GET | `id` - ID crew | Informations et membres |
| Créer crew | `/crews` | POST | Body: `{name, description, is_public, creator_id}` | Nouveau groupe |
| Rejoindre crew | `/crews/{id}/join` | POST | `id` - ID crew<br>Body: `{user_id}` | Adhésion à un groupe |
| Quitter crew | `/crews/{id}/leave` | DELETE | `id` - ID crew<br>`user_id` en param | Quitter un groupe |
| Classement crew | `/crews/{id}/leaderboard` | GET | `id` - ID crew<br>`?circuit_id={circuit}` - Par circuit | Comparaison des membres |

## Événements

| Ressource | URL | Méthode HTTP | Paramètres et variations | Commentaires |
|-----------|-----|--------------|-------------------------|--------------|
| Événements actifs | `/events` | GET | `?status=active` - En cours<br>`?upcoming=true` - À venir<br>`?past=true` - Terminés | Liste des compétitions |
| Détails événement | `/events/{id}` | GET | `id` - ID événement | Infos complètes |
| S'inscrire | `/events/{id}/register` | POST | `id` - ID événement<br>Body: `{user_id, vehicle_id}` | Participation |
| Classement événement | `/events/{id}/leaderboard` | GET | `id` - ID événement<br>`?live=true` - Temps réel | Podium et classements |
| Créer événement | `/events` | POST | Body: détails complets | Pour organisateurs/partenaires |

## Statistiques

| Ressource | URL | Méthode HTTP | Paramètres et variations | Commentaires |
|-----------|-----|--------------|-------------------------|--------------|
| Stats générales | `/stats/overview` | GET | - | Statistiques globales app |
| Stats utilisateur | `/stats/users/{id}` | GET | `id` - ID utilisateur<br>`?period={timeframe}` | Progressions, moyennes |
| Stats circuit | `/stats/circuits/{id}` | GET | `id` - ID circuit | Fréquentation, records |

## Notes d'implémentation

- **Authentification** : Prévoir système JWT pour sécuriser les endpoints utilisateur
- **Temps réel** : Considérer WebSockets pour `/sessions/{id}/points` et leaderboards live
- **Géolocalisation** : Utiliser PostGIS pour calculs de proximité et validation des tours
- **Cache** : Implémenter cache Redis pour leaderboards et stats fréquemment consultées
- **Pagination** : Standardiser avec `limit`/`offset` ou `page`/`per_page`
- **Filtres** : Ajouter filtres par date, véhicule, conditions météo selon besoins
