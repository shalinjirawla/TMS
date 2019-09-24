import { Component, OnInit } from '@angular/core';
import {BookingModel} from 'app/shared/model/BookingModel';
import {BookingMasterService} from 'app/shared/service-proxy/bookingMasterService';
import { from } from 'rxjs/observable/from';
var dashboard:BookingModel[];
declare var CanvasJS: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service:BookingMasterService) { }

  ngOnInit() {
    this.DashBoardLoad();
    $(".canvasjs-chart-credit").css('display', 'none');
  }
 
  DashBoardLoad() {
    var result:any[];
    var finallist:any=[];
    this.service.GetDashboardDetails().subscribe((res:BookingModel[])=>{
      result=res;
   

    if(result!=null && result!=undefined && result.length>0)
    {
      var uniq = {}

      var arrFiltered = result.filter(obj => !uniq[obj.cn] && (uniq[obj.cn] = true));
      for(var i in arrFiltered)
      {
        var cnvalue=arrFiltered[i]['cn'];          
        var resultcount = result.filter(x => x.cn === cnvalue).length;        
        cnvalue=new Date(cnvalue).toLocaleDateString()
        finallist.push({y:resultcount,label:cnvalue});
      }
      finallist.sort();
    

    let chartcolumn = new CanvasJS.Chart("chartContainercolumn", {
      animationEnabled: true,      
      data: [{
        // Change type to "column", "bar", "area", "spline", "pie",etc.
        type: "column",
        dataPoints:finallist,
      }]
    });
      
    chartcolumn.render();
  }
  })
  
  }
}
