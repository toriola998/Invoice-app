import { useSelector, useDispatch } from 'react-redux';
import { addInvoiceToList, editAndSaveInvoice } from '../store/invoiceSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import InvoiceLayout from './layout/InvoiceLayout';
import InputField from './shared/InputField';
import SelectDropdown from './shared/SelectDropdown';
import schemas from '../schema/index';

export default function EditInvoice({ onSuccess, closeModal, invoice }) {
   const invoiceList = useSelector((state) => state.invoice.invoiceList);
   const dispatch = useDispatch();

   const {
      register,
      handleSubmit,
      control,
      getValues,
      watch,
      formState: { errors, isValid },
   } = useForm({
      resolver: yupResolver(schemas.invoiceSchema),
      defaultValues: {
         items: invoice?.items || [],
         // streetAddress: invoice?.streetAddress || '',
         // city: invoice?.city || '',
         // postCode: invoice?.postCode || '',
         // country: invoice?.country || '',
         // clientName: invoice?.clientName || '',
         // clientEmail: invoice?.clientEmail || '',
         // clientStreetAddress: invoice?.clientStreetAddress || '',
         // clientCity: invoice?.clientCity || '',
         // clientPostCode: invoice?.clientPostCode || '',
         // clientCountry: invoice?.clientCountry || '',
         // invoiceDate: invoice?.invoiceDate || '',
         // paymentTerms: invoice?.paymentTerms || { value: '', label: '' },
         // projectDescription: invoice?.projectDescription || '',
      },
   });

   const { fields, append, remove } = useFieldArray({
      name: 'items',
      control,
   });
   const items = watch('items');

   function onSubmit(formData) {
      console.log(formData);
   }

   function saveChanges() {
      const draftData = getValues();
      const updatedItems = draftData.items.map((item) => ({
         ...item,
         total: item.quantity * item.price,
      }));

      const totalSum = updatedItems.reduce((sum, item) => sum + item.total, 0);
      const newInvoice = {
         id: invoice?.id, // Assuming you are editing an existing invoice
         status: invoice?.status,
         ...draftData,
         items: updatedItems,
         totalSum,
      };

      dispatch(editAndSaveInvoice(newInvoice));
      onSuccess(true);
   }

   const paymentTermOptions = [
      { value: '1 day', label: 'Net 1 day' },
      { value: '7-days', label: 'Net 7 days' },
      { value: '14-days', label: 'Net 14 days' },
      { value: '30-days', label: 'Net 30 days' },
   ];

   return (
      <InvoiceLayout>
         <form onSubmit={handleSubmit(onSubmit)}>
            <p className="font-bold text-2xl text-white">
               Edit
               <span className="text-grey-1 pl-2">#</span>
               {invoice?.id}
            </p>
            <div className="mb-9">
               <p className="invoice-title">Bill From</p>

               <div className="grid gap-4 bills-from">
                  <InputField
                     label="Street Address"
                     fieldName={register('streetAddress')}
                     errorMessage={errors.streetAddress?.message}
                     defaultValue={invoice?.streetAddress}
                  />
                  <InputField
                     label="City"
                     fieldName={register('city')}
                     errorMessage={errors.city?.message}
                     defaultValue={invoice?.city}
                  />
                  <InputField
                     type="number"
                     label="Post Code"
                     fieldName={register('postCode')}
                     errorMessage={errors.postCode?.message}
                     defaultValue={invoice?.postCode}
                  />
                  <InputField
                     label="Country"
                     fieldName={register('country')}
                     errorMessage={errors.country?.message}
                     defaultValue={invoice?.country}
                  />
               </div>

               <p className="invoice-title">Bill To</p>
               <div className="grid gap-4 bills-to">
                  <InputField
                     label="Client's Name"
                     fieldName={register('clientName')}
                     errorMessage={errors.clientName?.message}
                     defaultValue={invoice?.clientName}
                  />
                  <InputField
                     label="Client Email"
                     fieldName={register('clientEmail')}
                     errorMessage={errors.clientEmail?.message}
                     defaultValue={invoice?.clientEmail}
                  />
                  <InputField
                     label="Street Address"
                     fieldName={register('clientStreetAddress')}
                     errorMessage={errors.clientStreetAddress?.message}
                     defaultValue={invoice?.clientStreetAddress}
                  />
                  <InputField
                     label="City"
                     fieldName={register('clientCity')}
                     errorMessage={errors.clientCity?.message}
                     defaultValue={invoice?.clientCity}
                  />
                  <InputField
                     type="number"
                     label=" Post Code"
                     fieldName={register('clientPostCode')}
                     errorMessage={errors.clientPostCode?.message}
                     defaultValue={invoice?.clientPostCode}
                  />
                  <InputField
                     label="Country"
                     fieldName={register('clientCountry')}
                     errorMessage={errors.clientCountry?.message}
                     defaultValue={invoice?.clientCountry}
                  />
                  <InputField
                     label="Invoice date"
                     type="date"
                     fieldName={register('invoiceDate')}
                     errorMessage={errors.invoiceDate?.message}
                     defaultValue={invoice?.invoiceDate}
                  />

                  <Controller
                     name="paymentTerms"
                     control={control}
                     defaultValue={{
                        label: invoice?.paymentTerms?.label,
                        value: invoice?.paymentTerms?.value,
                     }}
                     render={({ field }) => (
                        <SelectDropdown
                           label="Payment Terms"
                           options={paymentTermOptions}
                           field={field}
                           errorMessage={errors?.paymentTerms?.message}
                           onChange={(selectedOption) =>
                              field.onChange(selectedOption)
                           }
                        />
                     )}
                  />
                  <InputField
                     label="Project Description"
                     fieldName={register('projectDescription')}
                     errorMessage={errors.projectDescription?.message}
                     defaultValue={invoice?.projectDescription}
                  />
               </div>
            </div>

            <div className="flex justify-around group-input-labels">
               <p className="w-[150px]">Item Name</p>
               <p>Qty.</p>
               <p>Price</p>
               <p>Total</p>
               <p></p>
            </div>
            {fields.map((field, index) => (
               <div
                  key={field.id}
                  className="group-inputs grid gap-x-5 items-center"
               >
                  <InputField
                     fieldName={register(`items.${index}.itemName`)}
                     errorMessage={errors.items?.[index]?.itemName}
                     defaultValue={invoice?.items?.[index]?.itemName}
                  />

                  <InputField
                     fieldName={register(`items.${index}.quantity`)}
                     errorMessage={errors.items?.[index]?.quantity}
                     defaultValue={invoice?.items?.[index]?.quantity}
                     type="number"
                  />
                  <InputField
                     fieldName={register(`items.${index}.price`)}
                     errorMessage={errors.items?.[index]?.price}
                     defaultValue={invoice?.items?.[index]?.price}
                     type="number"
                  />
                  <p className="text-white">
                     {items?.[index]?.quantity && items?.[index]?.price
                        ? items[index].quantity * items[index].price
                        : 0}
                  </p>
                  <button type="button" onClick={() => remove(index)}>
                     <img src="../assets/icons/icon-delete.png" alt="" />
                  </button>
               </div>
            ))}
            <button
               type="button"
               onClick={() => append({ itemName: '', quantity: '', price: '' })}
               className="bg-black-2 rounded-full font-bold w-full text-grey py-3 mt-5"
            >
               + Add New Item
            </button>

            <div className="bottom-btns">
               <div className="flex justify-end control-btn gap-2">
                  <button
                     className="bg-black-2 text-grey-5"
                     type="button"
                     onClick={closeModal}
                  >
                     Cancel
                  </button>
                  <button
                     className="text-white bg-blue"
                     type="button"
                     onClick={saveChanges}
                  >
                     Save Changes
                  </button>
               </div>
            </div>
         </form>
      </InvoiceLayout>
   );
}
