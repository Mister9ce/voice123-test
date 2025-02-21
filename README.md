# Voice123 Test Project

## Overview
This project is a **Next.js** application that fetches and displays **voice actor profiles** from an external API. The application features **search functionality, pagination, keyword highlighting, and an integrated audio player** to enhance user experience.

**DEMO**: [Demo link](https://voice123-test-5esq20n5f-mister9ces-projects.vercel.app/?keywords=&page=1)

---

## Features
- **Voice Actor Cards**: Displays actor information with images, names, sample audio etc..
- **Search Functionality**: Implements real-time filtering with keyword highlighting.
- **Pagination**: Supports easy navigation between multiple pages of voice actors.
- **Audio Player**: Ensures only one audio sample plays at a time.
- **UI Components**: Built with reusable, accessible components using ShadCN UI.
- **Error Handling**: Implements fallback mechanisms for missing images and broken audio URLs.
- **Responsive Design**: Optimized for various screen sizes and devices.

---

## Tech Stack
- **Next.js** (Frontend framework)
- **TypeScript** (Styling)
- **ShadCN UI** (UI components)
- **Jest & React Testing Library** (Testing)
- **Postman** (API exploration)
- **Figma** (UI Prototyping)

---

## Setup Instructions

### **1. Clone the Repository**
```sh
git clone https://github.com/Mister9ce/voice123-test.git

cd voice123-test
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Run the Development Server**
```sh
npm run dev
```
The application will be available at **http://localhost:3000**.

### **4. Running Tests**
To run unit tests:
```sh
npm run test
```

---

## Work Log

### **Day 1**
#### 1. API Exploration
- Explored API responses using Postman.
- Noted differences in audio URL structures, custom headers, and authentication requirements.
- **Duration**: 2 hours

#### 2. UI Prototyping
- Created a **mockup** in Figma.
- **Duration**: 1 hour

#### 3. Project Setup & Initialization
- Initialized Next.js project and installed dependencies.
- **Duration**: 2 hours

#### 4. UI Component Development
- Built **header, voice actor cards, pagination buttons**.
- Used **ShadCN UI components** to speed up prototyping.
- **Duration**: 4 hours

---

### **Day 2**
#### 1. API Integration
- Fetched API response to populate voice actor cards.
- Handled missing image links by adding placeholders.
- **Duration**: 1 hour

#### 2. Implementing Audio Player
- Built an **audio player component**.
- Addressed issues with missing base URLs and authentication requirements.
- Created an **audio provider** to ensure only one audio plays at a time.
- **Duration**: 3 hours

#### 3. Search Functionality & Keyword Highlighting
- Developed **search bar with real-time filtering**.
- Implemented **keyword highlighting** in search results.
- **Duration**: 3.5 hours

#### 4. Pagination Implementation
- Added functionality to the pagination component.
- **Duration**: 1 hour

#### 5. UI Enhancements
- Improved **voice actor card UI, audio player UI, filter chips, and responsiveness**.
- Added icons and refined layout.
- **Duration**: 1 hour

#### 6. Unit Testing
- Wrote **unit tests** for critical components.
- **Duration**: 1 hour

---

## Recommendations & Improvements

1. **Authentication for Audio Files**
   - Implement secure **authentication mechanisms** for accessing protected audio files.

2. **Improved Fallback Mechanisms**
   - Implement better fallback logic for missing **images and audio URLs**.

3. **Performance Optimization**
   - Use **caching and preloading** to improve loading speeds and user experience.

4. **Enhanced API Error Handling**
   - Implement detailed logging and retry mechanisms for network requests.


