import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  @Input() dialogData: any;
  tableVisible:boolean= false;
  wrongdata:any[]=[];
  constructor() { }
page_url
  ngOnInit() {
   this.page_url='/'+window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
   console.log("page_url="+this.page_url);
   this.messageResponse();
  }
  
  message:any='';
  messageResponse(){
    this.message=this.dialogData.data.message?this.dialogData.data.message:this.dialogData.data;
  }
  hideDialog() {
    document.getElementById('errorDialog').style.display = 'none';
    this.dialogData.visibility = false;
  }
  checkMinSize()
{
  let status:boolean=false;
  return status;
}
}
