import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {
  //local server    ---  'http://192.168.0.110/soccer11/index.php/Soccerapi'
  //private baseUrl = 'http://192.168.0.110/soccer11/index.php/Soccerapi';
  // private baseUrl = 'http://128.199.118.13/soccer11/index.php/Soccerapi';
  private baseUrl = 'https://www.mysoccer11.com/soccer_admin/index.php/Soccerapi';
  // private baseUrl = 'http://128.199.118.13/soccer11/index.php/Soccerapi';

  constructor(public httpClient: HttpClient
   ) {
    console.log('Hello ServicesProvider Provider');
  }

  getLeagues() {
    // console.log('services');
    return this.httpClient.get(this.baseUrl + '/get_league/')
  }

  getTeamById(leagueId: number) {
    // console.log(leagueId);
    return this.httpClient.get(this.baseUrl + '/get_teams/' + leagueId)
  }

  getPlayerbyTeamId(teamId: number){
    // console.log(teamId);
    return this.httpClient.get(this.baseUrl + '/get_players/' + teamId)
  }

  getJerseys(){
    return this.httpClient.get(this.baseUrl + '/get_jerseys/' )
  }

  getJerseysByTeamId(teamId: number){
    return this.httpClient.get(this.baseUrl + '/get_jerseys_by_team_id/'  + teamId)
  }

  getGround(){
   return this.httpClient.get(this.baseUrl + '/get_grounds/' )
  }

  getContent(){
    return this.httpClient.get(this.baseUrl + '/get_dashboard_content/' )
  }

  getGroundStatus(count: any, device_id: any){
    return this.httpClient.post(this.baseUrl + '/is_change_in_grounds/', {count: count, device_id: device_id})
  }

  insertDeviceID(device_id: any){
    return this.httpClient.post(this.baseUrl + '/insert_deviceid/', {device_id: device_id})
  }

  addTeam(formObjData){
    // console.log("formObjData ---->>>>--- ", formObjData);
    //return "Responce from add team Services...";
    return this.httpClient.get(this.baseUrl + '/get_grounds/' )
  }

  postImage(formObjData){
    // console.log('formObjData', formObjData);
    return this.httpClient.post(this.baseUrl + '/saveImage', JSON.stringify(formObjData) )
  }
}
