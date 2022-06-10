import '../App.css';


const StatusBar = ({status}) => {


    return (

      <div className="statusBar">

        <div className="statusOpen">
        Open
        </div>

        <div className="statusPending">
        Pending
        </div>

        <div className="statusInAudit">
        in_audit
        </div>

      </div>
    );

}

export default StatusBar;
