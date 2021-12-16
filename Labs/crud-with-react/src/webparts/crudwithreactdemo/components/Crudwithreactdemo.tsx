import * as React from 'react';
import styles from './Crudwithreactdemo.module.scss';
import { ICrudwithreactdemoProps } from './ICrudwithreactdemoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ISoftwareListItem } from './ISoftwareListItem';
import { ICrudWithReactState } from './ICrudWithReactState';
import {ISPHttpClientOptions,SPHttpClient,SPHttpClientResponse} from '@microsoft/sp-http';
import{
  TextField,
  PrimaryButton,
  IDropdownStyles
} from 'office-ui-fabric-react'
import { ITextFieldStyles } from '@microsoft/office-ui-fabric-react-bundle';

let _softwareListColumn=[
  {Key:'ID',
  Name:"ID",
  fieldName:"ID",
  minwidth:50,
  maxwidth:100,
  isResizable:true    
},
{Key:'Title',
Name:"Title",
fieldName:"Title",
minwidth:50,
maxwidth:100,
isResizable:true    
},
{Key:'SoftwareName',
Name:"SoftwareName",
fieldName:"SoftwareName",
minwidth:50,
maxwidth:100,
isResizable:true    
},
{Key:'SoftwareVendor',
Name:"SoftwareVendor",
fieldName:"SoftwareVendor",
minwidth:50,
maxwidth:100,
isResizable:true    
},
{Key:'SoftwareDescription',
Name:"SoftwareDescription",
fieldName:"SoftwareDescription",
minwidth:50,
maxwidth:100,
isResizable:true    
}
];


const textFieldStyles:Partial<ITextFieldStyles>={fieldGroup:{width:300}};
const narrowTextFieldStyles:Partial<ITextFieldStyles>={fieldGroup:{width:300}};
const narrowDropdownStyles:Partial<IDropdownStyles>={dropdown:{width:300}};


export default class Crudwithreactdemo extends React.Component<ICrudwithreactdemoProps, {}> {
  
  private _selection:Selection;

  private _onItemsSelectionChanged=()=>{

    this.setState({
      SoftwareListItem:(this._selection.getSelection()[0] as ISoftwareListItem)
    });
  }
  constructor(props:ICrudwithreactdemoProps,state:ICrudWithReactState){
    super(props);
    this.state={
      status:'Ready',
      SoftwareListItems:[],
      SofwareListItem:{
        Id:0,
        Title:"",
        SoftwareName:"",
        SoftwareDescription:"",
        SoftwareVendor:""
      }
    }

    this._selection=new Selection({
      onSelectionChanged:this._onItemsSelectionChanged,
    });
  }
  private _getListItems():Promise<ISoftwareListItem[]>{
    const url:string=this.props.siteUrl+"/_api/web/lists/getbytitle('SoftwareCatalog')/items";
    return this.props.context.spHttpClient.get(url,SPHttpClient.configurations.v1).then(Response=>{
      return Response.json();
    }).then(json=>{
      return json.value;
    }) as Promise<ISoftwareListItem[]>;
  }
  public bindDetailsList(messsage:String){
    this._getListItems().then(listitems=>{
      this.setState({SoftwareListItems:listitems,status:messsage})
    })
  }
  public componentDidMount(): void {
      this.bindDetailsList("All recotds have been loaded succefully");
  }
  
]
  }
}
