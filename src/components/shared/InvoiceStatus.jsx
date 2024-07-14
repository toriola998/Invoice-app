import { getStatusStyles } from '../../utils/statusColor';

const InvoiceStatus = ({ status }) => {
   const styles = getStatusStyles(status);

   return (
      <div className="status" style={styles.container}>
         <span
            className="bold-15"
            style={{ '--indicator-color': styles.indicator }}
         >
            {status}
         </span>
      </div>
   );
};

export default InvoiceStatus;
