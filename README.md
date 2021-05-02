# QUADRA

___
# Quel est le meilleur Framework JS ???

## Avantages de REACT JS
	- Performant
	- Facile à prendre en main
	- Framework le plus répandu et le plus populaire
	- Excellent soutien de Facebook et la communauté

## Inconvenients de REACT JS
	- Pas de gestion d’état ni de router officiels
	- Nécessite un bon niveau en JavaScript
	- Nécessite un bon développeur sénior, sinon le travail en équipe sera compliqué avec une mauvaise architecture de l’application


## Avantages de VUE JS
	- Facile à prendre en main
	- Une popularité en croissance constante
	- Flexible et complet
	- Performant
	- Très adapté pour des preuves de concept ou des petites / moyennes applications

## Inconvenients de VUE JS
	- Pas de soutien GAFAM
	- Faible structuration (Inconvenient pour les grands projets)
	- Un seul contributeur à plein temps


## Avantages d'Angular JS
	- Très populaire pour les grosses et moyennes entreprises
	- Permet une bonne productivité
	- Idéal pour les larges projets en équipe grâce notamment à l’architecture orientée
	- Performant
	- Excellent soutien par Google et la communauté

## Inconvenients d'Angular JS
	- Long et complexe à apprendre
	- Moins de liberté
	- Flexibilité faible pour les projets de petites envergures
	- Pas adapté aux petits projets sans complexité


### Conclusion
Il n'y a pas forcément un framework meilleur que l'autre car le choix dépendra de la nature du projet et des ressources nécessaires à fournir selon les marges et les contraintes de chaque projet.
Mais en ce qui concerne mon avis personnel étant plus à l'aise avec la flexibilité de VUE JS je pencherai pour ce framework vu mon expérience et mes acquis. Ce dernier prouve aussi que juger d'un framework si il est meilleur ou pas dépend aussi du développeur.


___
# Comment peut-on s’assurer qu’une application web soit compatible sur tous les devices actuels (Desktop, Tablet, Mobile) ?

Pour s’assurer qu’une application web soit compatible avec tous les devices ; on peut soit la
développer sur le web et utiliser des outils tels que ElectronJS, cordova ou phonegap pour l’adapter
à chaque device, soit développer une PWA (Progressive Web Apps ) qui s’appuie sur les navigateurs
et est utilisable par n’importe quel système. Les PWA sont développer en langage simple (HTML5,
CSS3 et JavaScript) et leurs distributions est simple à travers une URL via un navigateur. On peut
également développer son application sur des framewoks tels que React Native qui est une
extension de ReactJS et Flutter qui est un Framework de google. Ils permettent de faire du
développement multi-plateforme.

___
# Faire le BACKUP
	- Créer un dossier backup-42 à la racine dans mon cas c'est le C:
	- La commande est la suivante:
		- cbbackup http://<host>:<port> /backup-42 -u <login> -p <password> --single-node

___
# Faire l'IMPORTATION
	- Créer un dossier data_couchbase à la racine dans mon cas c'est ke C:
	- Créer les buckets ```categories et articles```
	- La commande est la suivante:
		- cbimport json --format list -c http://<host>:<port> -u <login> -p <password> -d file:///data_couchbase/categories.json -b categories -g #UUID#
		- cbimport json --format list -c http://<host>:<port> -u <login> -p <password> -d file:///data_couchbase/articles.json -b articles -g #UUID#
		- NB: Les json utilisés sont dans le dossier storage du projet GITHUB