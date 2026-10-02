// [question, réponse, page du livre]
export type Q = [string, string, number];

export const FICHES: Q[][] = [
  // Fiche 1
  [
    ["Quelle est la périodicité des vérifications techniques obligatoires pour les chronotachygraphes ?", "2 ans", 128],
    ["Combien de périodes consécutives (1 période = 24 h), un conducteur assurant un transport national occasionnel de personnes peut-il conduire ?", "6 ou 6 périodes", 131],
    ["En règle générale, les véhicules lourds utilisent deux batteries de 12 volts montées en ... ?", "Série", 181],
    ["Quelle(s) limitation(s) de vitesse est/sont signalée(s) à l'arrière d'un autocar neuf de 26 t de PTAC ?", "100 - 90 ou 100 km/h - 90 km/h", 74],
    ["Vous conduisez un autocar comportant un système de climatisation. Quelle peut être sa largeur maximale ?", "2,55 m", 13],
    ["Lors de la visite technique, l'expert vérifie-t-il le fonctionnement de la climatisation ?", "Non", 42],
    ["Quelle est, en dehors de la conduite de nuit, la durée maximale autorisée de conduite continue pour un conducteur de véhicule de transport en commun ?", "4 h 30 ou 4 h 30 mn", 130],
    ["Cette limitation de vitesse (50 + pictogramme camion) peut-elle concerner les véhicules autres que les trains routiers, trains doubles et véhicules articulés ?", "Oui", 49],
    ["En France, à partir de quelle quantité d'alcool pur par litre de sang un conducteur de transport en commun encourt-il une sanction ?", "0,20 g/l", 86],
    ["Le signal de détresse peut-il remplacer le triangle de présignalisation pour un véhicule d'un PTAC de plus de 3,5 t ?", "Non", 26],
  ],
  // Fiche 2
  [
    ["Une pierre coincée entre des roues jumelées peut entraîner l'éclatement d'un pneumatique. Vrai ou Faux ?", "Vrai", 175],
    ["Lors d'un voyage organisé, pendant la visite programmée d'un monument, vous attendez vos passagers durant 10 minutes dans votre véhicule. Sur quel symbole devez-vous positionner le sélecteur d'activité du chronotachygraphe ?", "Disponibilité ou Carré barré", 131],
    ["Dans un véhicule neuf, les passagers doivent-ils être prévenus de l'obligation d'attacher leur ceinture de sécurité ?", "Oui", 34],
    ["Hors agglomération, sur une route à double sens, vous suivez un camion à 70 km/h. Quel intervalle de sécurité minimum devez-vous respecter ?", "50 m", 65],
    ["Quel est le PTAC maximal d'un véhicule isolé de transport en commun comportant 2 essieux ?", "19 t", 17],
    ["Pour un véhicule neuf, quel document devez-vous consulter pour savoir si un accompagnateur est obligatoire lors d'un transport d'enfants ?", "L'attestation d'aménagement", 110],
    ["Le contrôle et le remplissage du circuit de refroidissement s'effectuent plutôt moteur chaud ou moteur froid ?", "Moteur à froid ou A froid", 170],
    ["En double équipage, en France, vous êtes assis à côté du conducteur. Votre temps de conduite continue est-il interrompu ?", "Oui", 134],
    ["Ce signal (interdiction de tourner à gauche + camion) concerne uniquement les véhicules affectés au transport de marchandises excédant 3 500 kg de PTAC ?", "Non", 48],
    ["Dans une longue descente, en cas de rupture de freins, si j'utilise une voie de détresse, le véhicule que je conduis sera-t-il gravement endommagé ?", "Non", 54],
  ],
  // Fiche 3
  [
    ["Le principal avantage du système de freinage antibloquant est-il de réduire les distances de freinage ?", "Non", 178],
    ["Sauf cas d'urgence, quelle est la durée de conduite maximale journalière autorisée en tenant compte des dérogations possibles ?", "10 h ou 10 heures", 131],
    ["Généralement, en rase campagne, dans un véhicule de transport en commun d'enfants, ceux-ci peuvent-ils voyager debout ?", "Non", 110],
    ["Tous les pays de l'Union européenne ont adopté les mêmes limitations de vitesse pour les poids lourds. Vrai ou faux ?", "Faux", 189],
    ["Votre véhicule (isolé) de transport en commun comporte 2 essieux. Quelle peut être sa longueur maximale ?", "13,50 m", 14],
    ["Quelle est la périodicité des visites techniques auxquelles sont soumis les véhicules de transport en commun ?", "6 mois", 42],
    ["Une huile multigrade classée SAE 20 W 40 peut-être utilisée uniquement en hiver ?", "Non", 171],
    ["Quel symbole devez-vous afficher sur l'écran du chronotachygraphe numérique pendant que vos passagers s'installent dans le véhicule ?", "Autres tâches (marteaux)", 122],
    ["La descente dangereuse annoncée (10 %, 4,5 km) possède-t-elle un dénivelé de 100 mètres pour chaque kilomètre parcouru ?", "Oui", 50],
    ["Peut-il y avoir des voyageurs debout à l'étage inférieur d'un autobus à étages ?", "Oui", 10],
  ],
  // Fiche 4
  [
    ["En circulation, le fait de freiner désactive obligatoirement le régulateur de vitesse. Vrai ou Faux ?", "Vrai", 30],
    ["Quelle peut être la durée maximale de l'amplitude de la journée de travail pour un conducteur de transport en commun effectuant un service occasionnel ?", "14 h ou 14 heures", 131],
    ["En agglomération, la différence de consommation entre un conducteur calme et un conducteur nerveux peut atteindre 40 %. Vrai ou Faux ?", "Vrai", 98],
    ["En ville, un autocar effectuant un service occasionnel peut-il emprunter une voie réservée aux autobus ?", "Non", 54],
    ["Dans un autocar, quel est le poids moyen forfaitaire d'un voyageur adulte avec ses bagages à main ?", "70 kg", 16],
    ["Comment appelle-t-on les transports exécutés à titre onéreux pour le compte d'un client ?", "Publics ou Compte d'autrui", 104],
    ["Parmi les types de graissage moteur, il existe le graissage par pression. Vrai ou faux ?", "Vrai", 171],
    ["La réglementation sociale européenne s'applique-t-elle à un conducteur non salarié propriétaire de son véhicule ?", "Oui", 118],
    ["Ce signal (interdit aux véhicules de plus de 10 m) concerne-t-il uniquement les véhicules isolés ?", "Non", 51],
    ["Sur autoroute, en cas d'incident, pour appeler les secours, vaut-il mieux utiliser une borne d'appel ou son téléphone portable ?", "La borne d'appel", 145],
  ],
  // Fiche 5
  [
    ["Une commande de coupe-circuit est-elle obligatoire sur un véhicule de transport en commun près du poste de conduite ?", "Oui", 32],
    ["Pouvez-vous prendre votre temps de repos journalier en couchette lorsque le véhicule est à l'arrêt ?", "Oui", 132],
    ["En principe, le ralentisseur hydraulique est situé sur ... ?", "La transmission ou L'arbre de transmission", 179],
    ["En ville, un conducteur d'autocar effectuant une excursion peut-il emprunter une voie réservée aux autobus ?", "Non", 54],
    ["Dans le poids moyen forfaitaire d'un voyageur adulte, le poids des bagages à main est-il inclus ?", "Oui", 16],
    ["Suite au contrôle technique périodique, lorsque le véhicule est refusé sans interdiction de circuler, dans quel délai maximum la contre-visite doit-elle être effectuée pour éviter une visite technique complète ?", "1 mois", 42],
    ["Après 2 heures de conduite, quelle est la durée minimale d'un premier arrêt pouvant être pris en compte comme pause ?", "15 mn", 130],
    ["Je circule avec un autocar d'une longueur de 12 m. Ce signal (limité à 10 m) me concerne-t-il ?", "Oui", 51],
    ["Débrancher ou modifier les réglages du limiteur de vitesse peut entraîner une suspension du permis de conduire, même s'il n'y a pas eu d'excès de vitesse constaté. Vrai ou Faux ?", "Vrai", 186],
    ["En cas d'accident, les données du chronotachygraphe numérique peuvent-elles servir de preuve devant un tribunal ?", "Oui", 137],
  ],
  // Fiche 6
  [
    ["Quel type d'extincteur faut-il éviter d'utiliser pour éteindre les flammes d'un feu d'hydrocarbure ?", "Un extincteur à eau ou A eau", 31],
    ["En règle générale, quelle est la durée maximale de conduite journalière autorisée en respectant les temps de repos ?", "9 h", 131],
    ["Le dispositif antiblocage de roues (ABS) peut-il fonctionner en même temps que le ou les dispositifs ralentisseurs ?", "Oui", 179],
    ["Vous conduisez un autocar neuf de 19 t de PTAC. À quelle vitesse êtes-vous limité en agglomération, sur une portion de route relevée à 70 km/h ?", "70 km/h", 74],
    ["Un autobus articulé est-il réglementairement considéré comme un véhicule isolé ?", "Oui", 9],
    ["Suite au contrôle technique périodique, quelle lettre figure sur le certificat d'immatriculation lorsque le véhicule est accepté ?", "A ou La lettre A", 43],
    ["Je circule avec un véhicule mesurant 2,30 m de large. À hauteur de ce signal (2,3 m), puis-je continuer sur cette route ?", "Oui", 51],
    ["Les temps de pause sont-ils comptés dans l'amplitude totale de la journée de travail ?", "Oui", 131],
    ["En cas d'excès de vitesse de 42 km/h, je pourrai repartir si je reconnais l'infraction ?", "Non", 75],
    ["Le constat amiable d'accident peut-il constituer une preuve de responsabilité ?", "Oui", 148],
  ],
  // Fiche 7
  [
    ["Après une utilisation intense, quel type de ralentisseur peut provoquer un incendie dès l'arrêt ?", "Ralentisseur électrique", 179],
    ["En règle générale, quelle est la durée minimale normale (non réduite) de repos hebdomadaire pour un conducteur d'autocar ?", "45 h", 132],
    ["Le circuit de freinage européen rend le freinage de l'essieu avant indépendant du freinage de l'essieu arrière. Vrai ou faux ?", "Vrai", 177],
    ["Par temps de brouillard sur autoroute, si la visibilité est inférieure à 50 m, quelle est la vitesse maximale autorisée ?", "50 km/h", 74],
    ["Dans un autobus, quel est le poids moyen forfaitaire d'un voyageur adulte avec ses bagages à main ?", "65 kg", 16],
    ["Quel document spécifique aux véhicules de transport en commun doit figurer à bord d'un autocar neuf, en plus du certificat d'immatriculation et de l'attestation d'assurance ?", "L'attestation d'aménagement", 110],
    ["Vous rentrez chez vous le soir avec l'autocar de l'entreprise. Le matin, le temps de conduite pour vous rendre au collège où vous devez effectuer un transport scolaire est-il compté comme du temps de conduite ?", "Oui", 135],
    ["Ce signal (voie de détresse) m'annonce-t-il une voie de détresse qui sera située sur ma gauche ?", "Non", 54],
    ["À partir de 60 ans, quelle est la périodicité des contrôles médicaux pour les conducteurs de transports en commun ?", "1 an ou Tous les ans ou Annuelle", 82],
    ["Un chiffre doublé (ex : 33) dans le rectangle du haut de la plaque orange placée à l'arrière d'un camion signifie : \"Produit de nature à polluer les eaux\". Vrai ou faux ?", "Faux", 147],
  ],
  // Fiche 8
  [
    ["Le chronotachygraphe numérique de votre véhicule tombe en panne. Devez-vous être en mesure de présenter un document justifiant des temps de conduite et de repos ?", "Oui", 128],
    ["En règle générale, quelle est la durée minimale normale (non réduite) obligatoire de repos journalier lorsque celui-ci n'est pas fractionné ?", "11 h", 132],
    ["Circuler avec un seul pneu lisse ou détérioré n'entraîne pas de contravention si le véhicule possède une roue de secours en bon état. Vrai ou Faux ?", "Faux", 187],
    ["Quelle(s) limitation(s) de vitesse est/sont signalée(s) à l'arrière d'un autobus (en exploitation) de 18 t de PTAC ?", "70 ou 70 km/h", 74],
    ["Quelle charge maximale autorisée peut supporter un essieu isolé ?", "13 t", 17],
    ["Lors d'un contrôle sur route, dois-je présenter un justificatif de l'employeur pour le ou les jour(s) non travaillé(s) ?", "Oui", 137],
    ["Quel symbole devez-vous afficher sur l'écran du chronotachygraphe numérique lorsque vous nettoyez votre véhicule ?", "Autres tâches (marteaux)", 130],
    ["Lorsque le conducteur serre le frein de parc, le cylindre de frein à ressort se remplit d'air. Vrai ou faux ?", "Faux", 178],
    ["Je circule, à vide, avec un véhicule de 5 tonnes de poids à vide et de 15 tonnes de PTAC. À hauteur de ce signal (5,5 t), puis-je passer ?", "Non", 51],
    ["Quand je circule en Espagne, quel numéro de téléphone est-il conseillé d'utiliser pour appeler les secours à partir d'un portable ?", "112", 145],
  ],
];
