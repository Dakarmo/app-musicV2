# Les commandes poour installer un angular sur un poste
    Avoir node sur le poste puis intaller typscript puis après angular
    
    - npm install -g typescript
    - install -g @angular/cli 

# Pour créer un projet angular avec la possibilité d'utiliser les component(après la dernière mise à jour d'angular) 

    ng new app-music --standalone false --skip-tests --ssr false --style css
# Pour installer tailwindcss

    - npm install -D tailwindcss postcss autoprefixer
    - npx tailwindcss init

tailwind.config.js
    content: [
        "./src/**/*.{html,ts}",
    ],

style.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

# Pour faire  un premier commit sur git
    git config user.name "John Doe"
    git config user.email "johndoe@exemple.com"

# Commande pour faire un commit sur git
    git add .
    git commit -m "message du commit"
    git push origin nomDeLaBranche


# export const ALBUMS: Album[] //Module

# quicktype.io 
    install pare json in any language

# git log --oneline

# Matérial icon
material angular
    ng add @angular/material
https://fonts.google.com/icons

dans app.module.ts :ng

    import { MatIconModule } from '@angular/material/icon';

    imports: [
        MatIconModule
    ]

# Liaison de propriété
    créer un composant dynamique
        utiliser @Input dans la partie typscript du composant
    <app-icon-button name="" title="play_circle">

    
En Angular, il existe 2 manières de lier les variables (du typescript) à la vue. Nous abons les liaisons unidirectionnelles et les liaisons bidirectionnels.
- `Liaison undirectionnelles` :  encore appelés one-way binding transfèrent les données d'un composant(depuis le ts) vers le DOM (html)
    * Interpolation : 
            utilisée pour incorporer  des valeurs de variables dans des chaîne de texte. Par exemple {{variable}}
    * Liaison des propriétés (property binding) :
            permet de lier une propriétés d'un élément du DOM à une propriété du composant. La syntaxe utilise des crochets. Par exemple, [property]="varible"
    * Liaison des évènements (event binding) :
            perment de réagir aux événements du DOM (comme les clics, les changements, les scrolls...). La syntaxe utilise les parenthèses. Par exemple, (click)="handleClick()"

- `Liaisons bidirectionnels.`


# passage d'une valeur du parent à l'enfant: @Input()

# passage d'une valeur de l'enfant au parent: @Output()
