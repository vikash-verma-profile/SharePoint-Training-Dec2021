import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./CrudWithListWebPart.module.scss";
import * as strings from "CrudWithListWebPartStrings";

export interface ICrudWithListWebPartProps {
  description: string;
}

export default class CrudWithListWebPart extends BaseClientSideWebPart<ICrudWithListWebPartProps> {
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
      `;
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