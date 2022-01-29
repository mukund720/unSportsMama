import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";


@Injectable()
export class WebApiService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.getAPIEndPoint();
  }

  public online: boolean = navigator.onLine;
  baseUrl="" 
  getAccessToken() {
  }
  // send error
  commonPostErrorRepoting(url, payload) {
    this.commonPostMethod(url, payload).subscribe(data => { }, error => { });
  }


  commonPostMethod(url: string, data: any): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // authorization: this.getAccessToken(),
    });
    let page_url: any = "/" + window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

 let body=data;
    let today:Date=new Date();
    body.request_server_time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+":"+today.getMilliseconds()
    let endPoint:any ='';
      endPoint = this.baseUrl + url;
    return this.http.post(endPoint, body, { headers });
  }

  commonGetMethod(args: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // authorization: this.getAccessToken()
    });
    const baseEndPoint = this.baseUrl + '/' + args;
    return this.http.post(baseEndPoint, { headers });
  }

  removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  isInt(n) {
    return Number(n) === n && n % 1 === 0;
  }
  isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }
  convertNaN(value) {
    if (this.isFloat(value)) {
      value = parseFloat(value).toFixed(2) || 0;
    } else {
      value = value || 0;
    }
    if (isNaN(value)) {
      value = 0;
    }
    const t = value || 0;
    return t;
  }
  convertToZero(value) {
    return parseFloat(value) >= 1 ? value : 0;
  }
  padValue(value): number {
    return Number(value) < 10 ? '0' + value : value;
  }

  getFilename(name) {
    return name.substring(0, name.lastIndexOf('.'));
  }
  getFileExtension(filename) {
    return filename.split('.').pop();
  }
  getFileIcon(type) {
    let class_name: any = 'fa fa-file';

    switch (type.toLowerCase()) {
      case 'pdf':
        class_name = 'fa fa-file-pdf-o';
        break;
      case 'png':
        class_name = 'fa fa-file-image-o';
        break;
      case 'jpg':
        class_name = 'fa fa-file-image-o';
        break;
      case 'jpeg':
        class_name = 'fa fa-file-image-o';
        break;
      case 'gif':
        class_name = 'fa fa-file-image-o';
        break;
      case 'bmp':
        class_name = 'fa fa-file-image-o';
        break;
      case 'txt':
        class_name = 'fa fa-file-text-o';
        break;
      case 'tif':
        class_name = 'fa fa-file-text-o';
        break;
      case 'tiff':
        class_name = 'fa fa-file-text-o';
        break;

      case 'doc':
        class_name = 'fa fa-file-word-o';
        break;
      case 'docx':
        class_name = 'fa fa-file-word-o';
        break;
      case 'rtf':
        class_name = 'fa fa-file-word-o';
        break;
      case 'wks':
        class_name = 'fa fa-file-word-o';
        break;
      case 'wps':
        class_name = 'fa fa-file-word-o';
        break;
      case 'wpd':
        class_name = 'fa fa-file-word-o';
        break;

      case 'xlr':
        class_name = 'fa fa-file-excel-o';
        break;
      case 'xls':
        class_name = 'fa fa-file-excel-o';
        break;
      case 'xlsx':
        class_name = 'fa fa-file-excel-o';
        break;
      case 'csv':
        class_name = 'fa fa-file-text';
        break;

      case 'ppt':
        class_name = 'fa fa-file-powerpoint-o';
        break;

      case 'pps':
        class_name = 'fa fa-file-powerpoint-o';
        break;
      case 'pptx':
        class_name = 'fa fa-file-powerpoint-o';
        break;

      default:
        class_name = 'fa fa-file';
    }

    return class_name;
  }
  makeFocusById(id: string) {
    setTimeout(() => {
      document.getElementById(id).focus();
    }, 500);
  }

  delayLoad(delayInMilliseconds) {
    // delayInMilliseconds = 1000; 1 second
    setTimeout(() => { }, delayInMilliseconds);
  }

  getDomainName(hostName)
{
    return hostName.substring(hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1);
}
getAPIEndPoint() {

    if (window.location.hostname == "localhost") {
      this.baseUrl = "http://localhost:3000/";
    }
    else {
      this.baseUrl = "http://localhost:3000/";
    }
  }

   redirectURL(url: string) {
    this.router.navigate([url]).catch(err => {
           setTimeout(() => {
        this.router.navigate([url]);
      }, 2000)
    });
  }

  isOnline() {
    if (this.online) {
      // console.log("online");
      return true;
    }
    else {
      // console.log("offline");

      return false;
    }
  }
 
  dynamicWidth(len) {
    let totalWidth = 800;
    let t = Math.round(totalWidth / len);
    let x = Array(len + 1).join("::" + t).split("::");
    return x.filter((data) => {
      return data != '';
    });
  }

  returnData(array, id,default_value) {
    let temp: any = [];
    array=array?array:[];
    if(array.length!=undefined)
    {
    temp = array.filter((v) => { return v.id == id })
    // console.log(id)
    // console.log(array)
    if (temp.length > 0) {
      return temp[0];
    }
    return { "name": '', "Code": '','default_value':default_value,'custom_title':default_value,'full_name':default_value ,'is_visible':default_value };
  }
    return { "name": '', "Code": '','default_value':default_value,'custom_title':default_value,'is_visible':default_value };

}
  checkDecimal(event) {
    let data:any={'target':{value:''}};
    data=event?event:{'target':{value:''}};
    let value=this.convertNaN(data.target.value)?this.convertNaN(data.target.value):'0'
    value=parseFloat(value);
    if (this.isFloat(value)) {

      let data=(value+"").split(".")[1]?(value+"").split(".")[1]:'';
      if(data.length>2)
      {
        event.target.value = parseFloat(value).toFixed(2) || 0
        return false;

      }

    }
  }
isJSON(str) {
  try {
      return (JSON.parse(str));
  } catch (e) {
      return false;
  }
}
}
