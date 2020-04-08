
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  constructor(
    private dbProvider: DatabaseProvider) {
    // console.log('Hello DataServiceProvider Provider');
  }
  getMenus() {
    return new Promise((resolve, reject) => {
      let menu: any = [],menuList:any=[]
      this.dbProvider.selectLineUpCategory().
        then((response) => {
          let lineupArr: any = [];
          lineupArr = response;
          var  categories = [];

          // if(lineupArr.length > 0) {
            for (var i = 0; i < lineupArr.length; i++) {
              let categoryExist = categories.find(e => e.id === lineupArr[i].teamId)
              if (categoryExist === undefined) {
                // if(lineupArr[i].teamName != '' && lineupArr[i].teamName != undefined)
                  categories.push({ "name": lineupArr[i].name, "id": lineupArr[i].teamId, 'lineupId': lineupArr[i].id, 'teamName': lineupArr[i].teamName, "team_id": lineupArr[i].team_id});
              }
              //      items.push({"subcategory":"LineUpName"+lineupArr[i].id +" | "+ lineupArr[i].time,'lineupId':lineupArr[i].id})
            }
          // }
          
          // if(categories.length > 0) {
            for (var i = 0; i < categories.length; i++) {
              var items = []
              // console.log("item", items);
              
              this.dbProvider.selectLineUps(categories[i].id).
                then((response) => {
                  let lineupNewArr: any = [],items=[],name='',logo='',teamId='', team_id=''
                  lineupNewArr = response
                  // console.log("lineupNewArr", lineupNewArr);
                  //clearing all old values
                  localStorage.setItem("subcategory",JSON.stringify(items))
                  localStorage.setItem("categoryName",name)
                  localStorage.setItem("logoMenu",logo)
                  localStorage.setItem("logoTeamID",teamId)
                  localStorage.setItem("logoTeam_ID",team_id)

                  if(lineupNewArr.length > 0) {
                    for (var j = 0; j < lineupNewArr.length; j++) {
                      let time = new Date(lineupNewArr[j].time)
                      var options = { hour:'numeric',
                                      minute:'numeric',
                                      hour12:true}
                      var timeString = time.toLocaleString('en-US',options)
                      // console.log(timeString)

                      // let LineUpName = localStorage.getItem('LineUpName') ? localStorage.getItem('LineUpName') : "LineUpName";
                      let LineUpName = lineupNewArr[j].teamName ? lineupNewArr[j].teamName : "LineUpName";
                      if(LineUpName == "LineUp") {
                        LineUpName = LineUpName + lineupNewArr[j].id;
                        // items.push({ "subcategory": LineUpName + lineupNewArr[j].id ,"time": timeString,"id": lineupNewArr[j].id})
                        items.push({ "subcategory": LineUpName, "time": timeString, "id": lineupNewArr[j].id});
                        name = lineupNewArr[j].name;
                        logo = lineupNewArr[j].logo;
                        teamId = lineupNewArr[j].teamId;
                        team_id = lineupNewArr[j].team_id;
                      } else if(LineUpName == "Team") {
                        // items.push({ "subcategory": LineUpName + lineupNewArr[j].id ,"time": timeString,"id": lineupNewArr[j].id})
                        name = lineupNewArr[j].name;
                        logo = lineupNewArr[j].logo;
                        teamId = lineupNewArr[j].teamId;
                        team_id = lineupNewArr[j].team_id;
                      } else {
                        // items.push({ "subcategory": LineUpName + lineupNewArr[j].id ,"time": timeString,"id": lineupNewArr[j].id})
                        items.push({ "subcategory": LineUpName, "time": timeString, "id": lineupNewArr[j].id});
                        name = lineupNewArr[j].name;
                        logo = lineupNewArr[j].logo;
                        teamId = lineupNewArr[j].teamId;
                        team_id = lineupNewArr[j].team_id;
                        }
                    }
                  }

                  localStorage.setItem("subcategory",JSON.stringify(items))
                  localStorage.setItem("categoryName",name)
                  localStorage.setItem("logoMenu",logo)
                  localStorage.setItem("logoTeamID",teamId)
                  localStorage.setItem("logoTeam_ID",team_id)
                  // items.push({"subcategory":"LineUpName"+lineupArr[i].id +" | "+ lineupArr[i].time})
                
                //  console.log(name);
                //  console.log("item", items);
                menu.push({ "category": localStorage.getItem("categoryName"),"teamID": localStorage.getItem("logoTeamID"),"logo": localStorage.getItem("logoMenu"), "subs": JSON.parse(localStorage.getItem("subcategory")), "team_id": localStorage.getItem("logoTeam_ID")});
                
              })  
            }
          // }

          // console.log("cat", categories);
          // console.log("menu", menu);
          resolve(menu)
          //[{"category":"PC","subs": [{"subcategory":"Processor"}]}
        })

    })
  }
}
