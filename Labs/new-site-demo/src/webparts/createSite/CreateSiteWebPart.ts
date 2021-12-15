import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import { SPHttpClient,SPHttpClientResponse,ISPHttpClientOptions } from "@microsoft/sp-http";
import styles from './CreateSiteWebPart.module.scss';
import * as strings from 'CreateSiteWebPartStrings';

export interface ICreateSiteWebPartProps {
  description: string;
}

export default class CreateSiteWebPart extends BaseClientSideWebPart<ICreateSiteWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.createSite }">
       <h1>Create a new Subsite</h1>

       Subsite Title
       <input type='text' id='txtSubSiteTitle'/><br/>
       Sub Site Url
       <input type='text' id='txtSubSiteUrl'/><br/>
       Sub site Descrption
       <input type='text' id='txtSubSiteDiscription'/><br/>

       <input type='button' id='btnCreateSubSite' value='Create Sub Site' />
      </div>`;

      this.bindEvents();
  }

  private bindEvents():void{
    this.domElement.querySelector('#btnCreateSubSite').addEventListener('click',()=>{
        this.createSubSite();
    });
  }

  private createSubSite():void
  {
    let subSiteTitle=document.getElementById("txtSubSiteTitle")['value'];
    let subSiteUrl=document.getElementById("txtSubSiteUrl")['value'];
    let subSitetxtSubSiteDiscription=document.getElementById("txtSubSiteDiscription")['value'];
    const url:string=this.context.pageContext.web.absoluteUrl+"/_api/web/webinfos/add";

  
    const sphttpclienetoptions:ISPHttpClientOptions={
      body:`{
          "parameters":{
            "@odata.type":"#SP.WebInfoCreationInformation",
            "Title":"${subSiteTitle}",
            "Url":"${subSiteUrl}",
            "Description":"${subSitetxtSubSiteDiscription}",
            "Language":1033,
            "WebTemplate":"STS#0",
            "UseUniquePermissions":true
          }
      }`
    }

    this.context.spHttpClient.post(url,SPHttpClient.configurations.v1,sphttpclienetoptions).then((response:SPHttpClientResponse)=>{
      if(response.status==200){
        alert("new subsite has been created");
      }
      else{
        alert("Error message");
      }
    });
  
  }
  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
