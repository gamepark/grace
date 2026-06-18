import { LocationType } from '@gamepark/grace/material/LocationType'
import { MaterialType } from '@gamepark/grace/material/MaterialType'
import { PlayerColor } from '@gamepark/grace/PlayerColor'
import { Locator } from '@gamepark/react-game'

export const Locators: Partial<Record<LocationType, Locator<PlayerColor, MaterialType, LocationType>>> = {}
