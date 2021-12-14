import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle,
  PropertyPaneSlider,
  PropertyPaneChoiceGroup,
  PropertyPaneDropdown,
  PropertyPaneCheckbox,
  PropertyPaneHorizontalRule,
  PropertyPaneLink,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./HelloWorldWebPart.module.scss";
import * as strings from "HelloWorldWebPartStrings";

export interface IHelloWorldWebPartProps {
  description: string;
  productname: string;
  productdescription: string;
  productcost: number;
  quantity: number;
  billamount: number;
  discount: number;
  netbillamount: number;
  IsCertified: boolean;
  Rating: number;
  processortype: string;
  newprocessortype: string;
  discountcoupen: boolean;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  protected onInit(): Promise<void> {
    return new Promise<void>((resolve, _reject) => {
      this.properties.productname = "Mouse";
      this.properties.productdescription = "Mouse description";
      this.properties.productcost = 1000;
      this.properties.quantity = 200;
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
       <td>${(this.properties.billamount =
         this.properties.productcost * this.properties.quantity)}</td>
      </tr>
      <tr>
      <td>Discount</td>
       <td>${(this.properties.discount =
         (this.properties.billamount * 10) / 100)}</td>
      </tr>
      <tr>
      <td>Net Bill Amount</td>
       <td>${(this.properties.netbillamount =
         this.properties.billamount - this.properties.discount)}</td>
      </tr>
      <tr>
      <td>Is Certified</td>
       <td>${this.properties.IsCertified}</td>
      </tr>
      <tr>
      <td>Rating</td>
       <td>${this.properties.Rating}</td>
      </tr>
      <tr>
      <td>Processor type</td>
       <td>${this.properties.processortype}</td>
      </tr>
      <tr>
      <td>New Processor type</td>
       <td>${this.properties.newprocessortype}</td>
      </tr>
      <tr>
      <td>Discount Coupen</td>
       <td>${this.properties.discountcoupen}</td>
      </tr>
      </table>
      `;
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
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
                PropertyPaneTextField("productname", {
                  label: "Product Name",
                  multiline: false,
                  resizable: false,
                  deferredValidationTime: 5000,
                  placeholder: "Please enter product name",
                  description: "Name property field",
                }),

                PropertyPaneTextField("productdescription", {
                  label: "Product Description",
                  multiline: true,
                  resizable: false,
                  deferredValidationTime: 5000,
                  placeholder: "Please enter product description",
                  description: "Name property field",
                }),
                PropertyPaneTextField("productcost", {
                  label: "Product Cost",
                  multiline: false,
                  resizable: false,
                  deferredValidationTime: 5000,
                  placeholder: "Please enter product cost",
                  description: "Number property field",
                }),
                PropertyPaneTextField("quantity", {
                  label: "Product Quantity",
                  multiline: false,
                  resizable: false,
                  deferredValidationTime: 5000,
                  placeholder: "Please enter product quantity",
                  description: "Number property field",
                }),
                PropertyPaneToggle("IsCertified", {
                  label: "Is Certified",
                  key: "IsCertified",
                  onText: "ISI Certified",
                  offText: "Not an ISI Certified Product",
                }),
                PropertyPaneSlider("Rating", {
                  label: "Rating",
                  max: 10,
                  min: 1,
                  step: 1,
                  showValue: true,
                  value: 1,
                }),
                PropertyPaneChoiceGroup("processortype", {
                  label: "Choices",
                  options: [
                    { key: "I5", text: "Intel I5" },
                    { key: "I7", text: "Intel I7", checked: true },
                    { key: "I9", text: "Intel I9" },
                  ],
                }),
                PropertyPaneDropdown("newprocessortype", {
                  label: "New Processor Types",
                  options: [
                    { key: "I5", text: "Intel I5" },
                    { key: "I7", text: "Intel I7" },
                    { key: "I9", text: "Intel I9" },
                  ],
                }),
                PropertyPaneCheckbox("discountcoupen", {
                  text: "Do you want to have a Discount Coupen",
                  checked: false,
                  disabled: false,
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneLink("", {
                  href: "https://www.amazon.in/",
                  text: "Buy Intel Processor from best seller",
                  target: "_blank",
                  popupWindowProps: {
                    height: 500,
                    width: 500,
                    positionWindowPosition: 2,
                    title: "Amazon",
                  },
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
