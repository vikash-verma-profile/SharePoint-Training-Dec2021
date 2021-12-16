import * as React from 'react';
import styles from './ReactDemo.module.scss';
import { IReactDemoProps } from './IReactDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jquery from 'jquery';


export interface IRShowListsWPState{
  listiteams:[
    {
      "Title":"",
      "ID":"",
      "SoftwareName":""
    }
  ]
}

export default class ReactDemo extends React.Component<IReactDemoProps, IRShowListsWPState> 
{
  static siteurl:string="";
  public constructor(props:IReactDemoProps,state:IRShowListsWPState){
    super(props);
    this.state={
      listiteams:[
        {
        "Title":"",
        "ID":"",
        "SoftwareName":""
      }]
    };
    ReactDemo.siteurl=this.props.websiteUrl;
  }
public componentDidMount(): void {
    let reactcontexthandler=this;
    jquery.ajax({
      url:`${ReactDemo.siteurl}/_api/web/lists/getbytitle('MicrosoftSofwares')/items`,
      type:"GET",
      headers:{'Accept':'application/json;odata=verbose;'},
      success:function(resultData){
        reactcontexthandler.setState({
          listiteams:resultData.d.results
        });
      },
      error:function(jqXHR,textStatus,errorThrown){

      }
    });
}

  public render(): React.ReactElement<IReactDemoProps> {
    return (
      <div className={ styles.reactDemo }>
       <table className={styles.row}>
      {
        this.state.listiteams.map(function (listitem,listitemkey) {
          let fullurl=`${ReactDemo.siteurl}/lists/MicrosoftSoftwares/DispForm.aspx?ID=${listitem.ID}`;
          return (
            <tr>
              <td>
                <a className='{styles.label}' href={fullurl}>{listitem.Title}</a>
              </td>
              <td>
                <a className='{styles.label}' >{listitem.ID}</a>
              </td>
              <td>
                <a className='{styles.label}' >{listitem.SoftwareName}</a>
              </td>
            </tr>
          );
        })
      }
       </table>

       <ol>

         {
           this.state.listiteams.map(function (listitem,listitemkey) {
            let fullurl=`${ReactDemo.siteurl}/lists/MicrosoftSoftwares/DispForm.aspx?ID=${listitem.ID}`;
            return (
             <li>
                  <a className='{styles.label}' href={fullurl}>
                    <span>{listitem.Title}</span>,<span>{listitem.ID}</span>,<span>{listitem.SoftwareName}</span>
                  </a>
            </li>
            );
          })
         }
       </ol>
      </div>
    );
  }
}
