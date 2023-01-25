# Component Hierarchy

![](/public/component-hierarchy.png alt="nested component image")

## Description

This application allows you to pass cards back and forth between users and a deck. Before starting this lab, take a good look at the different components and try to draw out the component hierarchy. You should have a good idea of what each component is doing and how it is interacting with the shared state. Once you have a good idea of the state, then refactor the application to instead use a GameContext object.

### Rubric

| Task                                                                      | Points |
| ------------------------------------------------------------------------- | ------ |
| A component hierarchy drawing indicating which components need what state | 4      |
| GameContext.js properly exports shared state through context              | 2      |
| GameProvider added to index.js                                            | 2      |
| Components refactored to use GameContext.js instead of prop drilling      | 2      |
