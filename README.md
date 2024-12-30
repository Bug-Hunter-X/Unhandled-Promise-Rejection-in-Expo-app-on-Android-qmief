# Unhandled Promise Rejection in Expo app on Android

This repository demonstrates an issue where an Expo app crashes on Android devices due to an unhandled promise rejection after fetching data from an API.  The app fetches data from a public API and displays it, but crashes on Android without a clear error message.

## Bug Description

The application fetches data from `https://jsonplaceholder.typicode.com/todos` and renders it in a list. The issue manifests only on Android. The app crashes silently without providing any error details in the console or to the user.

## Steps to Reproduce

1. Clone the repository.
2. Run the app on an Android emulator or device using Expo Go.
3. Observe the app's behavior.  The app should crash.

## Solution

The solution involves implementing proper error handling within the `fetch` call.  This ensures that any network errors or other issues are caught, preventing the unhandled promise rejection and subsequent crash.  The solution is provided in `bugSolution.js`.

## Technologies Used

- React Native
- Expo
- JavaScript