## MasterMind Game

A really interesting code breaking board game for two players.
One _Player_ becomes the codebreaker and the other (_computer_ here) becomes the codemaker. The codemaker chooses a pattern of four code pegs. The codebreaker tries to guess the pattern, in both order and color, within given turns. Each guess is made by placing a row of code pegs on the decoding board. Once placed, the codemaker provides feedback by placing from zero to four key pegs in the small holes of the row with the guess. A _red_ key peg is placed for each code peg from the guess which is correct in both color and position. A black_ key peg indicates the existence of a correct color code peg placed in the wrong position.
More about mastermind [here](https://en.wikipedia.org/wiki/Mastermind_(board_game)).

__Demo__ can be found [here](https://mastermind-game.vercel.app/).

## Structure
As the game says, we have a board consisting of some rows and cols where for each turn we pick up a color choice and place it in cell. Here, we have 10 rows and 4 columns.

On the left we have color choices that can be picked and placed at the current row. Also we have option to reset the game and see instructions which will be shown in modal.

## Assumptions

- Hidden code will always have unique color choices.
- Keeping 1 player game where user will be codebreaker always as it will become boring at some point for codemaker and can leave scope of error while giving feedback for each turn which can ruin the game.

## Future Scope

- Can increase game complexity by having levels like:

    - Easy: Increase in number of turns (rows)
    - Medium: Increase in number of pegs which same number of turns (cols)
    - Hard: Can have medium level + duplicates pegs allowed in a single turn (contradictory to assumptions taken)

- Can be played in mobile as well for now but UX can be improvised for small devices. Instead of scrolling to select color, we can have a fixed span of colors and board can be scrollable.

- Game result status can be shown in the same layer that means without modal, so that user can check go through his previous turns and can compare / analysis till where he was going in right direction.

- UI can be improved and can have an interactive game-like look. For eg: Instead of flat colors we can have 3D pegs with elevated board.
    

## Tech Stack
- [NextJS](https://nextjs.org/): React front-end development web framework 
- [Tailwind](https://tailwindcss.com/): Utility-first CSS framework
- [Vercel](https://vercel.com/): Easy deployment service
- [React Modal](https://github.com/reactjs/react-modal)
- [Lodash](https://lodash.com/)

## Local Setup


First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

_Note: Use node version 12 is found error while running._
