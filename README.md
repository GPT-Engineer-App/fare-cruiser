# fare-cruiser

To develop a taxi fare calculator based on your tariff guide, we need to break down the requirements into manageable steps and features. Here's a clear explanation of the tariff guide and additional features to consider for the calculator:

Tariff Guide Explanation:
Tariff Definitions:

Tariff 1: Monday to Friday 6:00 am to 8:00 pm
Tariff 2: Monday to Friday 9:00 pm to 12:00 am, Saturdays, Sundays, and bank holidays
Tariff 3: Daily from 12:00 am to 6:00 am
Tariff 4: Christmas and New Year period
Tariff Charges:

Each tariff has a starting fee and subsequent distance charges.
Starting fee varies based on the tariff.
Subsequent distance charges are consistent across all tariffs (20p per 168 yards or 130 yards).
Special Christmas and New Year Tariffs:

Different tariffs apply on specific dates and times during the Christmas and New Year period.
Features for the Taxi Fare Calculator:
User Input:

Date and time of the journey.
Distance traveled in yards or miles.
Tariff Selection:

Users should be able to select the appropriate tariff based on the time and date of the journey.
Consider providing an automatic selection based on the entered date and time.
Calculation Logic:

Calculate the fare based on the selected tariff and the distance traveled.
Apply the starting fee and subsequent distance charges accordingly.
Holiday and Special Date Handling:

Implement logic to adjust tariffs automatically during Christmas and New Year period as per the provided schedule.
Output Display:

Clearly display the calculated fare to the user.
Optionally, provide a breakdown of charges (starting fee, distance charges, etc.).
User-Friendly UI:

Intuitive interface design for easy input of journey details.
Clear presentation of fare calculation results.
Mobile responsiveness for accessibility on various devices.
Error Handling:

Validate user input to prevent incorrect data entry.
Display informative error messages if input is invalid.
Testing and Validation:

Thoroughly test the calculator with various scenarios to ensure accuracy.
Validate against the provided tariff guide to confirm correct implementation.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/fare-cruiser.git
cd fare-cruiser
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
