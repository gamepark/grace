import { GraceOptionsSpec } from '@gamepark/grace/GraceOptions'
import { GraceRules } from '@gamepark/grace/GraceRules'
import { GraceSetup } from '@gamepark/grace/GraceSetup'
import { GameProvider } from '@gamepark/react-game'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { gameAnimations } from './animations/GameAnimations'
import { App } from './App'
import { Locators } from './locators/Locators'
import { Material } from './material/Material'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameProvider
      game="grace"
      Rules={GraceRules}
      optionsSpec={GraceOptionsSpec}
      GameSetup={GraceSetup}
      material={Material}
      locators={Locators}
      animations={gameAnimations}
    >
      <App />
    </GameProvider>
  </StrictMode>
)
