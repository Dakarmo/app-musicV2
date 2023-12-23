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