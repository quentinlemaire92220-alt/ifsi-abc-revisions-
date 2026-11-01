# UE C1.1 — Préparation de l'intégration V7 (non publiable)

> **État actuel — 1er novembre 2026 :** version candidate **V7.3**, **21 pages**, déjà sauvegardée dans le Drive privé propriétaire. SHA-256 `a74f9df5707f5fc23db99ff9624abf79f4a0cb8bc5f88f14c7fc5c82226323fc`. QCM **V4**, 56 questions, 21 pages, SHA-256 `4153a3b554fb7dc676fb745c26f8ab7c302493c51616b743b1af46a2ca6cac8e`. Les versions V7 / V7.1 / V6 mentionnées plus bas sont historiques. **V7.3 n'est pas publiée**, et ses contrôles sont consignés dans `QA_PREFLIGHT_20261101.md`. Quelques polices de moins de 8 pt et les lacunes du cours bloquent la validation finale. PR à garder **en brouillon**.


Date : 31 octobre 2026. Ce document de suivi ne contient **aucune donnée du cours, transcription, lien Drive privé ou PDF**.

## Livrables privés vérifiés
- Fiche hybride V7 : **20 pages**, SHA-256 `58456ae15679ca9994172ce1c1d6495aedc94a66948cfc469d370091fec51d25`.
- QCM corrigés V4 : **56 questions sur 21 pages**, SHA-256 `4153a3b554fb7dc676fb745c26f8ab7c302493c51616b743b1af46a2ca6cac8e`.
- Flashcards historiques : **56**, non modifiées.
- Vocaux historiques déclarés : **2**, non modifiés.
- PDF précédent V6 et archives préservés.

## Différences à garder synchronisées
- Q30 : formulation grammaticale clarifiée, réponses inchangées.
- Q50 : l'objet de la question (« incidence ») est explicité, réponses inchangées.
- Ni les 56 réponses, ni les 56 cartes ne changent.
- Le document V7 contient quatre vues graphiques supplémentaires issues des diapositives du cours 53, 90, 95 et 98. Le modèle de référence Pharmacologie a été consulté.

## Contrôles restant bloquants
1. Transcription authentifiée Santé mondiale **introuvable** : le cours est à qualifier « support officiel + oral non disponible », sans prétendre à une couverture orale exhaustive.
2. La consigne « cinq cancers les plus fréquents / cinq les plus mortels » n'est **pas entièrement documentée** dans les diapositives fournies.
3. Vérifier les sources de chiffres contradictoires et la cohérence des légendes, notamment les données de causes de décès en France 2021/2023.
4. Relecture manuelle fine de la V7 à l'échelle d'impression ; certaines légendes des images officielles restent petites.
5. Vérifier le droit de rediffuser des diapositives officielles dans l'application publique, ou remplacer les quatre visuels par des infographies originales dérivées des faits sourcés.
6. Contrôler la correspondance exacte entre la banque active, le PDF QCM V4, les fiches et les références du catalogue.

## Release gate

- `studentReleaseApproved=false` et `explicitAcceptanceOfFinalBytes=false`.
- Ne pas modifier `course-registry-v741.json`, `sheets-3.json`, les URL publiques ni les permissions Drive avant satisfaction de tous les contrôles.
- Cette PR peut servir de base de travail, mais **reste en brouillon et ne doit pas être fusionnée** comme une publication prête.


## Contrôle de pagination après relecture (1er novembre 2026)

- La V7 d'origine contenait deux pieds de page par diapositive reprise : `n/16` et `n/20`. Il s'agissait d'un défaut **réel**, identifié dans l'extraction PDF.
- Fiche corrigée conservée dans le Drive **privé (permission owner seulement)** : 20 pages A4, taille **6 427 640 octets**, SHA-256 `6d2b70b87b5b42e783d550043a35ff106c7088aebcba0cf674f451a379e3ce4c`.
- Contrôle automatisé sur les **20 pages** : un seul pied de page, numéro `1/20` à `20/20`, aucune ancienne pagination `/16`. Les pixels de toute la zone au-dessus du pied de page sont identiques à la V7 source et le texte est préservé.
- Les graphiques copiés du support officiel n'ont pas été modifiés : l'autorisation de les rediffuser publiquement reste **à établir**. Ne pas présumer d'un droit de publication à partir de la remise du support de cours.
- L'accord « je valide, on continue » autorise la poursuite du travail ; il ne vaut pas preuve d'acceptation des **octets post-correction** ni des droits de diffusion.
- Le dossier respecte le périmètre limité aux supports et ressources remis par l'utilisateur, sans recherche externe. **Aucun changement des URL, du catalogue, de la banque active, du versionnage ou du build.**
\n\n## Version V7.3 privée — Sommaire et visuels originaux (1er novembre 2026)\n\n- **21 pages**, table des matières page 2, 19 rubriques, 23 liens internes et 26 signets.\n- Les **cinq pages modifiées** sont les pages 1, 8, 12, 14 et 16. Elles comportent désormais des compositions vectorielles originales fondées exclusivement sur les diapositives 15, 53-54, 90, 95, 98 et la synthèse 100. **Aucun raster copié** du support officiel n'est présent dans ces cinq pages.\n- Les **16 pages non modifiées sont pixel-identiques** au PDF V7.1.\n- Contrôles : 21/21 pieds de page uniques et numérotés; 23 liens internes et 26 signets opérationnels; aucun mot hors des limites des pages; lexique sélectionnable en fin de fiche.\n- SHA-256 du candidat **local privé** : `a74f9df5707f5fc23db99ff9624abf79f4a0cb8bc5f88f14c7fc5c82226323fc`, **533 760 octets**. Ce fichier n'est **pas encore versé à Drive** et n'est pas approuvé pour une diffusion publique.\n- La transcription originale et les classements complets des cinq cancers fréquents/mortels restent absents des matériaux sources; la discordance de millésime 2021/2023 des causes de décès est signalée.\n- **Aucune action sur** `qextra-59.txt`, `sheets-3.json`, `course-registry-v741.json`, le version/build, les anciens PDF, les 56 flashcards ou les deux vocaux.\n- **Verrou de publication maintenu** jusqu'à approbation explicite des octets finaux et contrôle des réserves.\n