
# Candidate Review Interface

This project is aimed at reviewing candidates and is intended for HRs.

## Installation

To install the project, follow these steps:
1.
```bash
git clone <[repository-url](https://github.com/Ankesh2004/candidate-review-interface)>
```
2.
```bash
cd <candidate-review-interface>
```
3.
```bash
npm install
```


## Code Overview

The `Dashboard` component is the main component of the application. It imports several other components and services:

- `Navbar`: This is the navigation bar component.
- `AssignmentCard`: This component represents an assignment.
- `UserData`: This component displays user data.
- `getAssignmentData`, `getSubmissionData`, `getUserScoreData`: These are API service functions to fetch data.
- `Spinner`: This is a loading spinner component.

The `Dashboard` component maintains several pieces of state:

- `assignmentData`: This holds the data for the assignments.
- `submissionData`: This holds the data for the submissions.
- `status`: This holds the current status of the submissions.
- `user_id`: This holds the current user's ID.
- `currentUserData`: This holds the current user's data.
- `loading`: This is a boolean that indicates whether the data is still loading.

There are also several asynchronous functions defined within the `Dashboard` component:

- `fetchAssignmentData`: This function fetches the assignment data and updates the `assignmentData` state.
- `fetchSubmissionData`: This function fetches the submission data based on the status and updates the `submissionData` state.
- `fetchUserScoreData`: This function fetches the user score data based on the assignment ID and user ID, and updates the `currentUserData` state.

The `useEffect` hook is used to fetch data when the component mounts. It calls the `fetchAssignmentData` and `fetchSubmissionData` functions to fetch the assignment and submission data respectively. The user ID is then set to the ID of the first submission, or "1" if there are no submissions. The `fetchUserScoreData` function is then called to fetch the user score data for the given assignment and user ID. The `loading` state is then set to `false` to indicate that the data has finished loading.

The component returns a `div` that displays a loading spinner if the data is still loading. If the data has finished loading, it displays a `div` with the `Sidebar` and `Footer` components, as well as a main section that contains the `Navbar`, `AssignmentCard`, and `UserData` components.

The `Navbar` component is passed the assignment data. The `AssignmentCard` component is passed the assignment data, submission data, status, a function to handle status changes, a function to handle user changes, and the user ID. The `UserData` component is passed the current user data.


## API Reference

### Get assignment data

```
const response = await getAssignmentData();
```

### Get submission data

```
const response = await getSubmissionData(status);
```

### Get user score data

```
const response = await getUserScoreData(assignmentId, user_id);
```

## Running Tests

To run tests, execute the following command:

```bash
npm test
```

## Deployment

This project is deployed on Vercel, [deployed link](https://candidate-review-interface.vercel.app/)

## Authors

[@Ankesh2004](https://github.com/Ankesh2004)

