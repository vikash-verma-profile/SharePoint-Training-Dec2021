import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './CrudWithPnpWebPart.module.scss';
import * as strings from 'CrudWithPnpWebPartStrings';

import * as pnp from 'sp-pnp-js';

export interface ICrudWithPnpWebPartProps {
  description: string;
}

export default class CrudWithPnpWebPart extends BaseClientSideWebPart<ICrudWithPnpWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `
    <div>
    <table border='5' bgcolor='aqua'>
      <tr>
      <td>Please Enter Software ID</td>
      <td><input type='text' id='txtid' /></td>
      <td><input type='submit' id='btnRead' value='Read Details' /></td>
      </tr>
      <tr>
      <td>Please Enter Software Title</td>
      <td><input type='text' id='txtSoftwareTitle' /></td>
      </tr>
      <tr>
      <td>Please Enter Software Name</td>
      <td><input type='text' id='txtSoftwareName' /></td>
      </tr>
      <tr>
      <td>Please enter Software Vendor</td>
      <td><select  id='txtSoftwareVendor'>
            <option value='Microsoft'>Microsoft</option>
            <option value='Sun'>Sun</option>
            <option value='Oracle'>Oracle</option>
          </select>
      </td>
      </tr>
      <tr>
      <td>Please Enter Software Description</td>
      <td><input type='text' id='txtSoftwareDescription' /></td>
      </tr>
      <tr>
      <td colspan='2' align='center'>
      <input type='submit' value='Insert Item' id='btnSubmit' />
      <input type='submit' value='Update Item' id='btnUpdate' />
      <input type='submit' value='Delete Item' id='btnDelete' />
      </td>
      </tr>
    </table>
    </div>
    <div id="divstatus">
    </div>
      `;
    this._bindEvents();
    this.readAllItems();
  }
  private _bindEvents(): void {
    this.domElement
      .querySelector("#btnSubmit")
      .addEventListener("click", () => {
        this.addListItem();
      });
    this.domElement.querySelector("#btnRead").addEventListener("click", () => {
      this.readListItem();
    });
    this.domElement
      .querySelector("#btnUpdate")
      .addEventListener("click", () => {
        this.updateListItem();
      });
    this.domElement
      .querySelector("#btnDelete")
      .addEventListener("click", () => {
        this.deleteListItem();
      });
  }

  private readListItem(): void {
    let id = document.getElementById("txtid")["value"];
   pnp.sp.web.lists.getByTitle("SoftwareCatalog").items.getById(id).get().then((item:any)=>{
    document.getElementById("txtSoftwareTitle")["value"] = item["Title"];
    document.getElementById("txtSoftwareVendor")["value"] = item["SoftwareVendor"];
    document.getElementById("txtSoftwareDescription")["value"] = item["SoftwareDescription"];
    document.getElementById("txtSoftwareName")["value"] = item["SoftwareName"];
   });
  }

  private addListItem(): void {
    var softwaretitle = document.getElementById("txtSoftwareTitle")["value"];
    var softwarename = document.getElementById("txtSoftwareName")["value"];
    var softwarevendor = document.getElementById("txtSoftwareVendor")["value"];
    var softwaredescription = document.getElementById("txtSoftwareDescription")["value"];
    pnp.sp.web.lists.getByTitle("SoftwareCatalog").items.add({
      Title: softwaretitle,
      SoftwareName: softwarename,
      SoftwareVendor: softwarevendor,
      SoftwareDescription: softwaredescription,
    }).then(r=>{
      alert("Success");
    });
  }

  private readAllItems(): void {
    let html: string =
      '<table border=1 width=100% style="border-collapase:collapse;">';
    html += "<th>Title</th><th>Vendor</th><th>Descrption</th><th>Name</th>";
    pnp.sp.web.lists
      .getByTitle("SoftwareCatalog")
      .items.get()
      .then((items: any[]) => {
        items.forEach(function(item){
          html += `<tr>
     <td>${item["Title"]}</td>
     <td>${item["SoftwareName"]}</td>
     <td>${item["SoftwareDescription"]}</td>
     <td>${item["SoftwareVendor"]}</td>
     </tr>`;
        });
        html += "</table>";
        const listcontainer: Element =
          this.domElement.querySelector("#divstatus");
        listcontainer.innerHTML = html;
      });
  }
  private updateListItem(): void {
    var softwaretitle = document.getElementById("txtSoftwareTitle")["value"];
    var softwarename = document.getElementById("txtSoftwareName")["value"];
    var softwarevendor = document.getElementById("txtSoftwareVendor")["value"];
    var softwaredescription = document.getElementById("txtSoftwareDescription")["value"];
    var id= document.getElementById("txtid")["value"];
    pnp.sp.web.lists.getByTitle("SoftwareCatalog").items.getById(id).update({
      Title: softwaretitle,
      SoftwareName: softwarename,
      SoftwareVendor: softwarevendor,
      SoftwareDescription: softwaredescription,
    }).then(r=>{
      alert("Details Updated");
    });
  }
  private deleteListItem(): void {
    var id = document.getElementById("txtid")["value"];
    pnp.sp.web.lists.getByTitle("SoftwareCatalog").items.getById(id).delete();
    alert("list item is deleted");
  }
  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
