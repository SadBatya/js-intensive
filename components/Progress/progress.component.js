import { start } from "../../data.js";
import { GameGrid } from "../GameGrid/game-grid.component.js";
import { ResultPanel } from "../ResultPanel/result-panel.component.js";

export function Progress() {
    const element = document.createElement("div");
    
    const startButton = document.createElement("button");
    startButton.append('Start')

    startButton.addEventListener('click', () => {
        start();
    });
    
    element.append(ResultPanel(), GameGrid())

    return element
}