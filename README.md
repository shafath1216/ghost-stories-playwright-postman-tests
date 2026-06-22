🌐 Ghost Stories Automation Test Suite

This project validates the Ghost Stories application (https://ghost-stories.org) using Playwright (UI + Navigation testing) and Postman/Newman (API testing). The application is a ghost story blog platform with an AI ghost chatbot feature.

The test suite focuses on validating UI behavior, navigation flows, API responses, state management, and error handling across the application.

🧪 Test Coverage

The automation suite is structured into the following test layers:

UI Testing
Component visibility validation
Page rendering checks
Layout and element verification
Navigation Testing
Routing between pages
Fallback route validation
Page load consistency
Functional Testing
Post creation flow
Data rendering and updates
End-to-end user workflows
API Testing
REST API response validation
Data integrity checks
Status code verification
Error handling scenarios
🧪 Test Execution Summary
| Test Case ID | Title | Category | Type | Priority | Preconditions | Expected Result | Actual Result | Status | Defect |
|--------------|-------|----------|------|----------|---------------|-----------------|--------------|--------|--------|
| GS_TC_001 | Verify application loads successfully | App Initialization | Smoke | High | App deployed and accessible | App loads without crash and UI renders | UI renders successfully | Passed | - |
| GS_TC_002 | Verify Navbar is visible | UI | UI | High | App is loaded | Navbar is displayed on top | Navbar visible | Passed | - |
| GS_TC_003 | Verify posts load on homepage | Home / API Integration | Functional | High | Backend API running | Posts are fetched and displayed | Posts displayed correctly | Passed | - |
| GS_TC_004 | Verify routing works for Add Post page | Navigation | Functional | High | App running | AddPost page renders correctly | Page loads successfully | Passed | - |
| GS_TC_005 | Verify Post Detail page loads | Navigation | Functional | High | At least one post exists | Correct post details are shown | Post details rendered | Passed | - |
| GS_TC_006 | Verify user can create a new post | Functional | Functional | High | Backend API running | Post is saved and appears on homepage | Post created successfully | Passed | - |
| GS_TC_007 | Verify state updates after adding post (new post position) | State Management | Regression | High | Post exists | New post appears correctly in list | Post appears but at bottom | Failed | Position bug |
| GS_TC_008 | Verify API failure handling on post creation | Error Handling | Functional | Medium | Backend stopped or fails | Error message shown, app stable | Error shown correctly | Passed | - |
| GS_TC_009 | Verify Archive Chat page loads | Navigation | Navigation | Medium | App running | Archive page renders correctly | Page loads successfully | Passed | - |
| GS_TC_010 | Verify GhostChatTrigger is visible | UI Component | UI | Medium | App running | Chat trigger is visible | Visible | Passed | - |
| GS_TC_011 | Verify invalid route handling | Navigation | Routing | Medium | App running | Fallback route loads posts correctly | Home loads but posts missing | Failed | Missing state load |
| GS_TC_012 | Verify Post API returns valid JSON | API | API | High | Backend running | Returns valid JSON array | Valid JSON returned | Passed | - |
| GS_TC_013 | Verify 201 received on post creation | API | API | Medium | Backend running | Post created successfully | 201 received | Passed | - |
🧭 Testing Approach

The testing strategy was designed to simulate real user interaction patterns:

Users navigating between pages
Users interacting with posts and chat features
API-driven data rendering on UI
Error handling during backend failures
Route validation for invalid URLs
🧩 Key Areas Validated
UI Layer
Navbar rendering
Chat trigger visibility
Page layout stability
Navigation Layer
Route switching between pages
Invalid route fallback behavior
Page load consistency
API Layer
Post retrieval and creation APIs
JSON response validation
Status code verification (200 / 201)
Error handling on API failure
🧪 Test Types Summary
Smoke Testing
Functional Testing
Regression Testing
UI Testing
Navigation Testing
API Testing
Error Handling Validation
📊 Result Overview
Total Test Cases: 13
Passed: 11
Failed: 2
Coverage: UI + Navigation + API + Functional flows
📌 Notes
One UI/State issue identified (post ordering bug)
One navigation/state sync issue identified (missing state load on fallback route)
API responses validated successfully across endpoints