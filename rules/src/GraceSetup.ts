import { MaterialGameSetup } from '@gamepark/rules-api'
import { GraceOptions } from './GraceOptions'
import { GraceRules } from './GraceRules'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerColor } from './PlayerColor'
import { RuleId } from './rules/RuleId'

/**
 * This class creates a new Game based on the game options
 */
export class GraceSetup extends MaterialGameSetup<PlayerColor, MaterialType, LocationType, GraceOptions> {
  Rules = GraceRules

  setupMaterial(_options: GraceOptions) {
    // TODO
  }

  start() {
    this.startPlayerTurn(RuleId.TheFirstStep, this.players[0])
  }
}
