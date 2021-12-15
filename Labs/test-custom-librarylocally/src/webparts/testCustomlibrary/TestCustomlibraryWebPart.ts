import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './TestCustomlibraryWebPart.module.scss';
import * as strings from 'TestCustomlibraryWebPartStrings';

import * as dummy from 'custom-library';

export interface ITestCustomlibraryWebPartProps {
  description: string;
}

export default class TestCustomlibraryWebPart extends BaseClientSideWebPart<ITestCustomlibraryWebPartProps> {

  
  public render(): void {

    const Myinstance= new dummy.CustomLibraryLibrary();

    this.domElement.innerHTML = `
      <div class="${ styles.testCustomlibrary }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
             
              <p>Calling Library function</p>
              <p>${Myinstance.getCurrentTime()}</p>
            </div>
          </div>
        </div>
      </div>`;
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
