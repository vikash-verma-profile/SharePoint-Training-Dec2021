import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';

export interface IHelloWorldWebPartProps {
  description: string;
  productname:string;
  productdescription:string;
  productcost:number;
  quantity:number;
  billamount:number;
  discount:number;
  netbillamount:number;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {


  protected onInit(): Promise<void> {
      return new Promise<void>((resolve,_reject)=>
      {
        this.properties.productname="Mouse";
        this.properties.productdescription="Mouse description";
        this.properties.productcost=1000;
        this.properties.quantity=200;
        resolve(undefined);
      });
  }


  public render(): void {
    this.domElement.innerHTML = `
      <table>
      <tr>
      <td>Product Name</td>
       <td>${this.properties.productname}</td>
      </tr>

      <tr>
      <td>Product Description</td>
       <td>${this.properties.productdescription}</td>
      </tr>


      <tr>
      <td>Product Cost</td>
       <td>${this.properties.productcost}</td>
      </tr>

      <tr>
      <td>Product quantity</td>
       <td>${this.properties.quantity}</td>
      </tr>
      <tr>
      <td>Bill  Amount</td>
       <td>${this.properties.billamount=this.properties.productcost*this.properties.quantity}</td>
      </tr>
      <tr>
      <td>Discount</td>
       <td>${this.properties.discount=this.properties.billamount*10/100}</td>
      </tr>
      <tr>
      <td>Net Bill Amount</td>
       <td>${this.properties.netbillamount=this.properties.billamount-this.properties.discount}</td>
      </tr>
      </table>
      `;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected get disableReactivePropertyChanges(): boolean {
      return true;
  }
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          groups: [
            {
              groupName: "Product Details",
              groupFields: [
                PropertyPaneTextField('productname', {
                  label: "Product Name",
                  multiline:false,
                  resizable:false,
                  deferredValidationTime:5000,
                  placeholder:"Please enter product name","description":"Name property field"
                }),

                PropertyPaneTextField('productdescription', {
                  label: "Product Description",
                  multiline:true,
                  resizable:false,
                  deferredValidationTime:5000,
                  placeholder:"Please enter product description","description":"Name property field"
                }),
                PropertyPaneTextField('productcost', {
                  label: "Product Cost",
                  multiline:false,
                  resizable:false,
                  deferredValidationTime:5000,
                  placeholder:"Please enter product cost","description":"Number property field"
                }),
                PropertyPaneTextField('quantity', {
                  label: "Product Quantity",
                  multiline:false,
                  resizable:false,
                  deferredValidationTime:5000,
                  placeholder:"Please enter product quantity","description":"Number property field"
                })

              ]
            }
          ]
        }
      ]
    };
  }
}
