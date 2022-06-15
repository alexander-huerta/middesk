import '../App.css';

const StatusBar = ({status}) => {

  let openStyling = {};
  let pendindStyling = {};
  let inAuditStyling = {};
  let inReviewStyling = {};

  if(!status) openStyling = {backgroundColor: "green"}
  if(status === 'open') openStyling = {backgroundColor: "green"}
  if(status === 'pending') pendindStyling = {backgroundColor: "green"}
  if(status === 'in_audit') inAuditStyling = {backgroundColor: "green"}
  if(status === 'in_review') inReviewStyling = {backgroundColor: "green"}

  return (
    <div className="statusBar">

      <div className="open" style = {openStyling}>
      open
      </div>

      <div className="pending" style = {pendindStyling}>
      pending
      </div>

      <div className="in_audit" style = {inAuditStyling}>
      in_audit
      </div>

      <div className="in_review" style = {inReviewStyling}>
      in_review
      </div>

    </div>
  );
}

export default StatusBar;
