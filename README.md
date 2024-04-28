# Transforming Comics into Accessible Audio Narratives

## Overview

This project aims to make the vibrant world of comics accessible to everyone, including the visually impaired, by transforming them into audio narratives. Developed as a capstone project for a postgraduate degree in Data Storytelling, it explores the use of technology to enhance narrative accessibility through an old Daredevil comic now in the public domain.

## Design and Functionality on CodeSandbox

The "Spell Bubble" web application features a responsive design tailored for accessibility and user engagement. The interface is built with HTML, CSS, and JavaScript, ensuring compatibility across various devices and screen sizes. Key features include:

- **Responsive Layout**: Adapts seamlessly to different devices, providing an optimal viewing experience on both desktops and mobile phones.
- **Interactive Controls**: Users can navigate through comic panels using clearly labeled buttons, facilitating ease of use for all, including those relying on screen readers.
- **Audio Integration**: Each comic panel comes with an audio description, playable via a custom-built audio player. This feature is designed to bring the comic's story to life through sound, enhancing the narrative for visually impaired users.
- **Dynamic Content Loading**: The application dynamically loads comic panels and audio files, ensuring smooth transitions and minimal load times.
- **Accessible Design**: High-contrast colors and large text are used to assist users with visibility impairments.

## Phase 1: Extracting and Refining Text

### 1.1 Character and Panel Identification

Techniques used include image refinement to base64, computer vision for panel separation, and interactive character identification.

### 1.2 Text Extraction

Utilized OCR to convert dialogues into accessible text, focusing on preserving the essence and integrity of the original comics.

### 1.3 Post-Processing with NLP and GPT

Tools used: SpaCy and OpenAI for refining texts, addressing ambiguities to ensure vibrancy in transcription.

### 1.4 Associating Texts to Characters

Ensured that each speech is correctly associated with its corresponding character for narrative fidelity.

## Phase 2: Creating Imagetic Descriptions

### 2.1 Generating Descriptions with AI

Implemented detailed AI-driven prompts to capture action, emotion, and scenery in each panel.

### 2.2 Sequential Narrative

Adjusted narratives to maintain story fluidity, ensuring smooth transitions between panels.

## Phase 3: From Text to Audio

### 3.1 Narration and Dialogue Transcription

Employed OpenAI's Text-to-Speech to voice characters, customizing timbres and tones for a rich auditory experience.

### 3.2 Voice Personalization Strategies

Each character was given a unique voice, while maintaining a neutral, engaging tone for narration.

### 3.3 Harmonious Integration

Combined narration and dialogue effectively, using strategic pauses and synchronization to enhance the auditory experience.

## Next Steps and Future Plans

Plans to enhance the website design for better attractiveness, responsiveness, and accessibility. Aiming to test the tool with real users to iterate based on feedback, ensuring that "Spell Bubble" adapts to the needs of its audience.

## Installation and Usage

This project's notebooks can be accessed and run either through Google Colab for convenience or locally for those who prefer it. Additionally, the interactive web application can be viewed and interacted with directly through CodeSandbox. Below are the instructions for accessing the project through these platforms:

### Running on Google Colab

1. Visit the [Google Colab](https://colab.research.google.com/) website.
2. Sign in with your Google account if not already signed in.
3. Click on 'File' > 'Open notebook' > 'GitHub' tab.
4. Enter the URL of this repository and select the notebook you want to run.

### Running Locally

1. Ensure you have Jupyter Notebook installed. If not, you can install it using the following command in your terminal (if using pip): `pip install notebook`
2. Clone this repository by running the following command in your terminal: `git clone`
3. Navigate to the cloned repository directory.
4. Launch Jupyter Notebook by running: `jupyter notebook`
5. Navigate to the DATA folder to access the necessary datasets.
6. Open the .ipynb files within the Jupyter environment to start running them step by step.

### Viewing on CodeSandbox

To interact with the web application:
1. Visit the [Spell Bubble project on CodeSandbox](https://codesandbox.io/p/sandbox/thirsty-hermann-43zjq4?from-embed=&layout=%257B%2522sidebarPanel%2522%253A%2522GIT%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clv26pben00063b6ichijsohp%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clv26pben00023b6iu7x5x7oj%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clv26pben00033b6issdihz81%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clv26pben00053b6iijqkg6d6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B63.70159352%252C36.29840648%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clv26pben00023b6iu7x5x7oj%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv26pbem00013b6i2j4o5ugj%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Findex.html%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clv26pben00023b6iu7x5x7oj%2522%252C%2522activeTabId%2522%253A%2522clv26pbem00013b6i2j4o5ugj%2522%257D%252C%2522clv26pben00053b6iijqkg6d6%2522%253A%257B%2522id%2522%253A%2522clv26pben00053b6iijqkg6d6%2522%252C%2522activeTabId%2522%253A%2522clvgw86cx001e3b6i3sy6te5m%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522id%2522%253A%2522clvgw86cx001e3b6i3sy6te5m%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clv26pben00033b6issdihz81%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clv26pben00033b6issdihz81%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A16.54237288135593%257D).
2. Explore the functionalities directly from your browser without any installations.

## Contributing

Contributions to "Spell Bubble" are welcome! Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the Creative Commons Attribution 4.0 International License - see the [LICENSE.md](https://github.com/luananova/Transforming-Comics-into-Accessible-Audio-Narratives/blob/main/LICENSE.md) file for details.

## Acknowledgments

Thanks to Leah Brochu and Rachel Osolen for their guidelines on Comic Book / Graphic Novel Description, which greatly informed the descriptive processes in this project.
