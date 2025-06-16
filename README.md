# Web Development Project 2 - The Ultimate Pokemon Trainer - Kanto Region

Submitted by: **Edward Torres**

This web app: **This web app tests the user's knowledge on Pokemon in the Kanto Region**

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [ ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Video Walkthrough: https://i.imgur.com/lpnQJ78.gif

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif 


## Notes

With this app, I had challenges when randomizing the cards using the 'Next' button. I was able to randomize them, but when the web app first rendered, nothing was showing. I had to set the original set first, and once all cards have been played, the cards show up randomized. 

I also had trouble with making the cards flip when you clicked on them to see the answer. A significant amount of CSS needed to be applied to ensure a smooth transition. When I first implemented it, you would be able to see the answer for the next card when you clicked the "Next" button. I used setTimeout to give the application time to show the next question without exposing the answer.


## License

    Copyright [2025] [Edward Torres]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.