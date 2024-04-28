# Transforming Comics into Accessible Audio Narratives

## Overview
This project aims to make the vibrant world of comics accessible to everyone, including the visually impaired, by transforming them into audio narratives. Developed as a capstone project for a postgraduate degree in Data Storytelling, it explores the use of technology to enhance narrative accessibility through an old Daredevil comic now in the public domain.

## Phase 1: Extracting and Refining Text
### 1.1 Character and Panel Identification
- Techniques used: Image refinement to base64, computer vision for panel separation, and interactive character identification.
### 1.2 Text Extraction
- Utilized OCR to convert dialogues into accessible text, focusing on preserving the essence and integrity of the original comics.
### 1.3 Post-Processing with NLP and GPT
- Tools used: SpaCy and OpenAI for refining texts, addressing ambiguities to ensure vibrancy in transcription.
### 1.4 Associating Texts to Characters
- Ensured that each speech is correctly associated with its corresponding character for narrative fidelity.

## Phase 2: Creating Imagetic Descriptions
### 2.1 Generating Descriptions with AI
- Implemented detailed AI-driven prompts to capture action, emotion, and scenery in each panel.
### 2.2 Sequential Narrative
- Adjusted narratives to maintain story fluidity, ensuring smooth transitions between panels.

## Phase 3: From Text to Audio
### 3.1 Narration and Dialogue Transcription
- Employed OpenAI's Text-to-Speech to voice characters, customizing timbres and tones for a rich auditory experience.
### 3.2 Voice Personalization Strategies
- Each character was given a unique voice, while maintaining a neutral, engaging tone for narration.
### 3.3 Harmonious Integration
- Combined narration and dialogue effectively, using strategic pauses and synchronization to enhance the auditory experience.

## Next Steps and Future Plans
- Plans to enhance the website design for better attractiveness, responsiveness, and accessibility.
- Aiming to test the tool with real users to iterate based on feedback, ensuring that Spell Bubble adapts to the needs of its audience.

## Installation and Usage
This project's notebooks can be accessed and run either through Google Colab for convenience or locally for those who prefer it. Below are the instructions for both methods.

### Running on Google Colab
1. Visit the [Google Colab](https://colab.research.google.com/) website.
2. Sign in with your Google account if not already signed in.
3. Click on 'File' > 'Open notebook' > 'GitHub' tab.
4. Enter the URL of this repository and select the notebook you want to run.

### Running Locally
1. Ensure you have Jupyter Notebook installed. If not, you can install it using the following command in your terminal (if using pip): pip install notebook
2. Clone this repository by running the following command in your terminal: git clone <URL-of-this-repository>
3. Navigate to the cloned repository directory.
4. Launch Jupyter Notebook by running: jupyter notebook
5. Navigate to the `DATA` folder to access the necessary datasets.
6. Open the `.ipynb` files within the Jupyter environment to start running them step by step.

## Contributing
Contributions to "Spell Bubble" are welcome! Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests.

## License
This project is licensed under the Creative Commons Attribution 4.0 International License - see the [LICENSE.md](https://github.com/luananova/Transforming-Comics-into-Accessible-Audio-Narratives/blob/main/LICENSE.md) file for details.

## Acknowledgments
- Thanks to Leah Brochu and Rachel Osolen for their guidelines on Comic Book / Graphic Novel Description, which greatly informed the descriptive processes in this project.
