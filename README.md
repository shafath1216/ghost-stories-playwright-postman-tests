## 🌐 Ghost Stories Automation Test Suite

This project validates the **Ghost Stories application (https://ghost-stories.org)** using Playwright (UI tests) and Postman/Newman (API tests). This site is a ghost story blog site with an AI ghost chatbot.

The suite covers functional UI flows, API validation, routing, and error handling.

---

## 🧪 Test Coverage

| Test Case ID | Title | Category | Type | Priority | Preconditions | Expected Result | Actual Result | Status | Defect |
|--------------|-------|----------|------|----------|---------------|-----------------|--------------|--------|--------|
| GS_TC_001 | Verify application loads successfully | App Initialization | Smoke | High | App deployed and accessible | App loads without crash and UI renders | UI renders successfully | Passed | - |
| GS_TC_002 | Verify Navbar is visible | UI | UI | High | App is loaded | Navbar is displayed on top | Navbar visible | Passed | - |
| GS_TC_003 | Verify posts load on homepage | Home / API Integration | Functional | High | Backend API running | Posts are fetched and displayed | Posts displayed correctly | Passed | - |
| GS_TC_004 | Verify routing works for Add Post page | Routing | Functional | High | App running | AddPost page renders correctly | Page loads successfully | Passed | - |
| GS_TC_005 | Verify Post Detail page loads | Routing | Functional | High | At least one post exists | Correct post details are shown | Post details rendered | Passed | - |
| GS_TC_006 | Verify user can create a new post | Create Post | Functional | High | Backend API running | Post is saved and appears on homepage | Post created successfully | Passed | - |
| GS_TC_007 | Verify state updates after adding post (new post position) | State Management | Regression | High | Post exists | New post appears correctly in list | Post appears but at bottom | Failed | Position bug |
| GS_TC_008 | Verify API failure handling on post creation | Error Handling | State Management | Medium | Backend stopped or fails | Error message shown, app stable | Error shown correctly | Passed | - |
| GS_TC_009 | Verify Archive Chat page loads | Feature | Navigation | Medium | App running | Archive page renders correctly | Page loads successfully | Passed | - |
| GS_TC_010 | Verify GhostChatTrigger is visible | UI Component | UI | Medium | App running | Chat trigger is visible | Visible | Passed | - |
| GS_TC_011 | Verify invalid route handling | Routing | Routing | Medium | App running | Fallback route loads posts correctly | Home loads but posts missing | Failed | Missing state load |
| GS_TC_012 | Verify Post API returns valid JSON | API | API | High | Backend running | Returns valid JSON array | Valid JSON returned | Passed | - |
| GS_TC_013 | Verify 201 received on post creation | API | API | Medium | Backend running | Post created successfully | 201 received | Passed | - |
