import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './CreateListWebPart.module.scss';
import * as strings from 'CreateListWebPartStrings';

//imported for http dependency to call sharepoint api's
import { SPHttpClient,SPHttpClientResponse,ISPHttpClientOptions } from "@microsoft/sp-http";

export interface ICreateListWebPartProps {
  description: string;
}

export default class CreateListWebPart extends BaseClientSideWebPart<ICreateListWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div>
       <h3>Creating a new list dynamically</h3>
       New List Name:<br/><input type='text' id='txtNewListName' /><br/><br/>
       New List Descrption <br/><input type='text' id='txtNewListDescription' /><br/><br/>
       <input type='button' id="btnCreateNewList" value='Create a New List' /><br/>
      </div>`;

      this.bindEvents();
  }

  private bindEvents():void{
    this.domElement.querySelector('#btnCreateNewList').addEventListener('click',()=>{
      this.createNewList();
    });
  }

  private createNewList():void{
    //we are getting values from Ui for list name and description
    var newListName=document.getElementById('txtNewListName')["value"];
    var newListDescription=document.getElementById('txtNewListDescription')["value"];

    //we are checking weather same list exist on not on  sharepoint
    const listUrl:string=this.context.pageContext.web.absoluteUrl+"/_api/web/lists/GetByTitle('"+newListName+"')";

    this.context.spHttpClient.get(listUrl,SPHttpClient.configurations.v1).then((response:SPHttpClientResponse)=>{
      if(response.status===200){
        alert("A list already exits with same name.");
        return;
      }
      //if list is not then create list name provided by the user
      if(response.status===404)
      {
        //api url to create new list on sharepoint
        const url:string=this.context.pageContext.web.absoluteUrl+"/_api/web/lists";

        //request we are creating to send to sharepoint server to create new list
        const listdefination:any={
          "Title":newListName,
          "Description":newListDescription,
          "AllowContentTypes":true,
          "BaseTemplate":105,
          "ContentTypesEnabled":true
        }

        const sphttpclienetoptions:ISPHttpClientOptions={
          "body":JSON.stringify(listdefination)
        }
        this.context.spHttpClient.post(url,SPHttpClient.configurations.v1,sphttpclienetoptions).then((reponse:SPHttpClientResponse)=>{
          if(response.status===201){
            alert("a new list has been created");
          }
          else{
            alert("error message"+response.status+" "+response.statusText);
          }
        });

      }
      else{
        alert("Error mesage");
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
