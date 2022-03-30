# Próbafeladat

Légyszíves forkold ezt a repository-t és abban készítsd el a feladatot.

### Technológiák:


* Vue 3 (script setup, composition api)
* Typescript (modules)
* Pinia
* Vue-router
* Vite
* Scss

SWAPI-t használva hozz létre egy kereső app-ot a űrhajókhoz.
https://swapi.dev/

Az alkalmazásnak reszponzív-nak kell lennie. Ne használj semmi framework-ot.
A design-t nem kell túlgondolni, de nézzen ki valahogy.

## Legyen két menüpont
* Űrhajók
* Kedvencek

### Űrhajók menüpont
#### /spaceships

Legyen egy szabadszavas kereső a lista felett, ami az űrhajók között keres, írás közben frissítsd a listát dinamikusan, de ne terheljük a szervert feleslegesen.

##### A keresési listában következő információk jelenjenek meg
* manufacturer
* model
* name
* kedvenc-e

Az űrhajókat lehessen a kedvencek közé rakni és elvenni és a listában látszódnia kell hogy az adott elem benne van-e kedvencekbe.
Kattintásra jöjjön be az űrhajó teljes adatlapja.
#### /spaceships/:id

### Kedvencek menüpont
#### /favorites
Használd a kereső listáját a kedvencek megjelenítéséhez.

