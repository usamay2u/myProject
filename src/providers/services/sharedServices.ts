import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {
  
  initialLoadData: EventEmitter<any> = new EventEmitter();
  tabNavigation: EventEmitter<any> = new EventEmitter();
  showModal: EventEmitter<any> = new EventEmitter();
  selectGround: EventEmitter<any> = new EventEmitter();
  selectJersey: EventEmitter<any> = new EventEmitter();
  selectPlayerIcon: EventEmitter<any> = new EventEmitter();
  retrieveData: EventEmitter<any> = new EventEmitter();
  refreshTeams: EventEmitter<any> = new EventEmitter();
  refreshLeagues: EventEmitter<any> = new EventEmitter();
  refreshPlayers: EventEmitter<any> = new EventEmitter();
  refreshFooter: EventEmitter<any> = new EventEmitter();
  refreshAfterSave: EventEmitter<any> = new EventEmitter();
  setManager: EventEmitter<any> = new EventEmitter();
  setSubstitute: EventEmitter<any> = new EventEmitter();
  changeFormation: EventEmitter<any> = new EventEmitter();
  setOpenPage: EventEmitter<any> = new EventEmitter();
  setOpenTeam: EventEmitter<any> = new EventEmitter();
  selectPlayerForSwap: EventEmitter<any> = new EventEmitter();
  saveLineUp: EventEmitter<any> = new EventEmitter();
  updateMenu: EventEmitter<any> = new EventEmitter();
  ediLineUp: EventEmitter<any> = new EventEmitter();
  delLineUp: EventEmitter<any> = new EventEmitter();
  delTeam: EventEmitter<any> = new EventEmitter();
  refreshJersey: EventEmitter<any> = new EventEmitter();
  refreshFooterForLineup: EventEmitter<any> = new EventEmitter();
  toolsManagement: EventEmitter<any> = new EventEmitter();
  substituteMode: EventEmitter<any> = new EventEmitter();
  afterEditLineUp: EventEmitter<any> = new EventEmitter();
  setEditSaveMode: EventEmitter<any> = new EventEmitter();
  changePlayerCount: EventEmitter<any> = new EventEmitter();
  selectPlayerForSwapFromSubstitute: EventEmitter<any> = new EventEmitter();
  selectGoaliForSwap: EventEmitter<any> = new EventEmitter();
  shareGroundImages: EventEmitter<any> = new EventEmitter();
  refreshTeamLogo: EventEmitter<any> = new EventEmitter();
  loadJerseyPage: EventEmitter<any> = new EventEmitter();
  clearCanvas: EventEmitter<any> = new EventEmitter();
  refreshDefaultTeams: EventEmitter<any> = new EventEmitter();
  clearTeamData: EventEmitter<any> = new EventEmitter();
}