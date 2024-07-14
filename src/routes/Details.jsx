import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteInvoice, markInvoiceAsPaid } from '../store/invoiceSlice';
import PageLayout from '../components/layout/PageLayout';
import OrderSummary from '../components/OrderSummary';
import GoBack from '../components/shared/GoBack';
import DeleteModal from '../components/shared/DeleteModal';
import DATE from '../utils/date';
import InvoiceStatus from '../components/shared/InvoiceStatus';
import EditInvoice from '../components/EditInvoice';

export default function Details() {
   const { id } = useParams();
   const dispatch = useDispatch();
   const invoiceList = useSelector((state) => state.invoice.invoiceList);
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [showEditInvoice, setShowEditInvoice] = useState(false);
   const navigate = useNavigate();
   const invoice = invoiceList.find((item) => item.id === id);
   console.log(invoice, 'my need');

   function delete_Invoice() {
      dispatch(deleteInvoice(invoice.id));
      navigate('/');
   }
   return (
      <>
         <PageLayout>
            <div className="relative">
               <GoBack />
               <div className="flex-center justify-between rounded-lg p-6 bg-black md:justify-start md:gap-5">
                  <p className="medium-13">Status</p>
                  <InvoiceStatus status={invoice?.status} />
               </div>

               <div className="my-4 rounded-lg p-6 bg-black">
                  <div className="md:flex justify-between">
                     <div>
                        <p className="bold-15">
                           <span className="text-grey-2">#</span>
                           <span className="text-white">{invoice?.id}</span>
                        </p>
                        <p className="medium-13 md:mt-2"></p>
                     </div>
                     <p className="medium-13 leading-5 my-[31px] md:mt-0 md:text-right">
                        <span>{invoice?.authorAddress}</span>
                        <br />
                        <span>{invoice?.authorCity}</span>
                        <br />
                        <span>{invoice?.authorPostCode}</span>
                        <br />
                        <span>{invoice?.authorCountry}</span>
                     </p>
                  </div>

                  <div className="details relative md:mb-12">
                     <div className="flex-center gap-x-16 md:gap-x-[119px]">
                        <p>
                           <span>Invoice Date</span>
                           <br></br>
                           <span>{DATE.formatDate(invoice?.invoiceDate)}</span>
                        </p>

                        <p>
                           <span>Bill To</span>
                           <br></br>
                           <span>{invoice?.clientName}</span>
                        </p>
                     </div>

                     <div className="flex items-end gap-x-16 md:gap-x-[119px]">
                        <p>
                           <span>Payment Due</span>
                           <br></br>
                           <span>21 Aug 2021</span>
                        </p>
                        <p className="medium-13 leading-5 address mt-2">
                           <span>{invoice?.clientAddress}</span>
                           <br />
                           <span>{invoice?.clientCity}</span>
                           <br />
                           <span>{invoice?.clientPostCode}</span>
                           <br />
                           <span>{invoice?.clientCountry}</span>
                        </p>
                     </div>
                     <p className="mb-[35px] mt-[38px] md:my-0 md:absolute top-0 right-16 lg:right-36">
                        <span>Sent to</span>
                        <br></br>
                        <span>{invoice?.projectDescription}</span>
                     </p>
                  </div>
                  {invoice?.items.length !== 0 && (
                     <OrderSummary
                        total={invoice?.totalSum}
                        itemsList={invoice?.items}
                     />
                  )}
               </div>

               <div className="px-6 py-[22px] bg-black md:bg-transparent md:absolute top-[5.5rem] md:right-12 lg:right-0">
                  <div className="flex justify-center gap-2 control-links">
                     <button
                        className="bg-black-2 text-grey"
                        onClick={() => {
                           setShowEditInvoice(true);
                        }}
                     >
                        Edit
                     </button>
                     <button
                        className="bg-orange"
                        onClick={() => {
                           setShowDeleteModal(true);
                        }}
                     >
                        Delete
                     </button>
                     <button
                        className="bg-blue"
                        onClick={() => {
                           dispatch(markInvoiceAsPaid(invoice?.id));
                        }}
                     >
                        Mark as Paid
                     </button>
                  </div>
               </div>
            </div>
         </PageLayout>
         {showDeleteModal && (
            <DeleteModal
               closeModal={() => {
                  setShowDeleteModal(false);
               }}
               invoiceId={invoice?.id}
               deleteInvoice={delete_Invoice}
            />
         )}
         {showEditInvoice && (
            <EditInvoice
               closeModal={() => {
                  setShowEditInvoice(false);
               }}
               invoice={invoice}
            />
         )}
      </>
   );
}
