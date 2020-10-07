# poke-lair

***Disclaimer**: This project is entirely in English because PokéAPI is also in English.*

***Another Disclaimer**: I made some important points on the final of this README.md document. Please read!*

### Context
The video-game franchise Pokémon latest game, *Sword* and *Shield* editions (only avaiable on Nintendo Switch), was poor received on the public because they did not feature all existing Pokémon. In the Galar region (where the games takes place), Pokemon in all other regions simply non-existent...

***Then comes PokeLair***. Macro Cosmos (the antagonist company of the *Sword* and *Shield* games), the company behind this *shady* site on the dark web, made a store for every Pokémon type (selling Pokémon, what is strictly forbbiden everywhere) where the Galarians (*people from the Galar region*) rely on having only one way to have Pokémon from the other regions (Kanto, Johto, Sinnoh, Alola, ...).

![logo](https://raw.githubusercontent.com/kyros200/poke-lair/main/src/imgs/logo.png)

*Macro Cosmos Logo*

So, as a user, you can shop on ***PokeLair*** to choose between all Pokémon from all other regions (*so, until #807 on National Dex*) and form the best team you ever dreamed, as long as you can afford of course.

***Avaiable in Galarian and English only***

### Installing
```
yarn install
yarn start
```
And then access `localhost:3000`
### Overview
**First things first, this is a Galarian site**. If you wish to change to **English** language, please do it so on the upper-right corner of the site.

![Main menu, Normal Store](https://i.imgur.com/5VciKWC.jpg)

*Main Menu on the Normal Pokemon Store*

This is the Main Page. **You can change wich Type store do you want** on the upper-right corner of the site. For example, you can change the Type store to steel to show all Steel-type Pokémon! ***All Types are avaiable right now!!!***

![Switch Type Store Gif](https://i.gyazo.com/0df971a6d7da886f6ec4f4a4ff512c60.gif)

*Switching to Dark Type Store*

On the right-side you can see your Pokémon team (*currently empty*), and on the left side you can see the options of Pokémon you can put on your team. 

If you are having problems finding where are your favorite Pokémon, you can use the ***Search*** feature!

![Search Feature gif](https://i.gyazo.com/d990353f09b6714de4095f88ed2148e1.gif)

*Search Feature in action*

Clicking "Add..." on a Pokémon card will open a new screen. On the left side it'll tell more details about the choosen Pokémon; On the right side the user will fill all the desired things he/she wants: if the Pokémon is Shiny; What Level; What moves it will learn.

![Pokemon Details Screen](https://i.imgur.com/bvg2g7J.jpg)

*Pokemon Details Screen*

There are 3 types of Moves to choose for your Pokemon:
* Initial Moves: Moves that the Pokémon learn at Level 1.
* Learned Moves: Moves that the Pokémon learn at some level above 1. You can only choose these moves if you pass the Level requirement.
* TM Moves: Moves that the Pokémon can learn with a TM item.

As it is known, every Pokémon have only 4 move slots.

Every Pokémon have a base price, based on his stats when Level 1. Price can increase when:
* You want to have a Shiny Pokémon (it will triple the final price).
* You Level up your Pokemon. Each level costs the same amount of money.
* You want to have a TM move on your Pokémon. Only the TM moves costs money.

When all set, you just need to press on "I Choose You!" button to add your custom Pokémon to your team.

![Adding Pokemon to the Team gif](https://i.gyazo.com/4f4e3dd9f52763791faa10958989a7a7.gif)

*Pokémon being added to the Team.*

As a rule, you cannot buy more than 6 Pokémon because the user is forming a team!

Finally, when satisfied, you can Checkout your team to proceed to payment. Clicking on the "Checkout" button will lead you a final screen to confirm the final price and the team formed.

![Checkout photo](https://i.imgur.com/owyIWDY.jpg)

*Final screen you show you your Pokémon and the final price before being redirect for payment*

And thats the overview of the project!

### Mobile

Mobile is functional but is not perfect at all. A lot of code need to be refactored/redone to be truly responsive.

![Mobile demo gif](https://i.gyazo.com/6d491151243e0181a729774ed69b23e7.gif)

*A glimpse of how mobile works.*

### Problems

I had some problems developing this mini-project, and that was all my fault. This section is to tell what I have failed and what I wish I could do more in the future in this one-week sprint.

* Spent too much time researching the flavour and the idea of the site in general. I basically played *Pokémon Sword* game for over 10 hours to get a glimpse of an idea for the site. In total I spent like 2 days just to have a draft.
* I also spent more time that I was hoping with the PokéAPI. It's simply not intuitive and I had to refactor my code twice just to be generic and to accomodate all necessary things on the project.
* I wanted to be perfectionist. I was doing a MVP, not a full project, and that was my mistake. As you can see, as the time went on, I just could not worry so much on all the UI details (on the bright side I made every functional feature that I wanted).
* With all said, I made a theme for every Type of Pokémon, but this theme just changes the primary color on the Material-ui Theme. I made in a generic way, so if I want to add something it should be easy.

Overall, I do not regret of what this project has become. I enjoyed a lot having an opportunity to develop a fun site, creating some lore and putting all avaiable flavor that I could find (like all gifs in *Galarian*). Hope you enjoy!


2020, made by Rafael Najjar.