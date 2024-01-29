# Pattern Hunters

Pattern Hunters is a browser extension designed to identify dark patterns on websites. This project includes a browser extension, a web scraper, and an NLP model trained to recognize dark patterns in website content.

## Table of Contents

- [Introduction](#introduction)
- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)

## Introduction

A dark pattern is a user interface carefully crafted to trick users into doing a certain action that they wouldn’t have done otherwise. Dark patterns are of many types such as forced action, nagging, confirm shaming, interface interference, false urgency, and basket sneaking to name a few. We aim to solve this problem by providing a solution that can detect dark patterns on various e-commerce digital platforms to keep our consumers safe through a browser extension by highlighting the dark patterns and providing the users with knowledge about them. It would help protect users from the malicious intentions of developers who aim to increase their profits through these malpractices. We aim to create a transparent digital world. 

## Directory structure
```bash
├── Dark Pattern
│   ├── Augmentation --> This module contains code for data augmentation using contextualized word embeddings.
|   |
│   ├── Dataset --> Holds the dataset in TSV format used for training the NLP model.
|   |
│   ├── Deliverables --> HTML, CSS, and JavaScript files of the browser extension.
│   │   
│   ├── Models --> Contains pickled (.pkl) files of the trained NLP model.
|   |
│   ├── Scrapper --> Contains files for the web scraper extracting text from webpages.
|   |
│   ├── Training --> Code files used to train the NLP model.
```

## Getting Started

To get started with Pattern Hunters, follow these steps:

1. Clone the repository: `git clone https://github.com/ItsPranavz/pattern-hunters.git`
2. Install dependencies: `pip install -r requirements.txt`

## Usage

Gaurav fill this Section please

## Documentation

Will update documentations once we are done with doc file

## Contributing

We welcome contributions! If you find a bug or have an idea for an enhancement, please open an issue. If you'd like to contribute code, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push your changes to the branch: `git push origin feature-name`.
5. Submit a pull request.

