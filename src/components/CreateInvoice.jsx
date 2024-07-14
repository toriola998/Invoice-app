import { useSelector, useDispatch } from 'react-redux';
import { addInvoiceToList } from '../store/invoiceSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import InvoiceLayout from './layout/InvoiceLayout';
import InputField from './shared/InputField';
import SelectDropdown from './shared/SelectDropdown';
import schemas from '../schema/index';

export default function CreateInvoice({ onSuccess }) {
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
   });

   const { fields, append, remove } = useFieldArray({
      name: 'items',
      control,
   });
   const items = watch('items');

   function onSubmit(formData) {
      console.log(formData);
   }

   const generateUniqueId = () => {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const randomAlphabet =
         alphabet[Math.floor(Math.random() * alphabet.length)] +
         alphabet[Math.floor(Math.random() * alphabet.length)];
      const randomNumber = Math.floor(1000 + Math.random() * 9000); // ensures a 4-digit number
      return `${randomAlphabet}${randomNumber}`;
   };

   function onSaveAsDraft() {
      const draftData = getValues();
      const updatedItems = draftData.items.map((item) => ({
         ...item,
         total: item.quantity * item.price,
      }));

      const totalSum = updatedItems.reduce((sum, item) => sum + item.total, 0);

      const newInvoice = {
         id: generateUniqueId(),
         status: 'Pending',
         ...draftData,
         items: updatedItems,
         totalSum,
      };

      dispatch(addInvoiceToList(newInvoice));
      onSuccess(true);
      console.log(draftData, invoiceList);
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
            <p className="font-bold text-2xl">New Invoice</p>
            <div className="mb-9">
               <p className="invoice-title">Bill From</p>

               <div className="grid gap-4 bills-from">
                  <InputField
                     label="Street Address"
                     fieldName={register('streetAddress')}
                     errorMessage={errors.streetAddress?.message}
                  />
                  <InputField
                     label="City"
                     fieldName={register('city')}
                     errorMessage={errors.city?.message}
                  />
                  <InputField
                     type="number"
                     label="Post Code"
                     fieldName={register('postCode')}
                     errorMessage={errors.postCode?.message}
                  />
                  <InputField
                     label="Country"
                     fieldName={register('country')}
                     errorMessage={errors.country?.message}
                  />
               </div>

               <p className="invoice-title">Bill To</p>
               <div className="grid gap-4 bills-to">
                  <InputField
                     label="Client's Name"
                     fieldName={register('clientName')}
                     errorMessage={errors.clientName?.message}
                  />
                  <InputField
                     label="Client Email"
                     fieldName={register('clientEmail')}
                     errorMessage={errors.clientEmail?.message}
                  />
                  <InputField
                     label="Street Address"
                     fieldName={register('clientStreetAddress')}
                     errorMessage={errors.clientStreetAddress?.message}
                  />
                  <InputField
                     label="City"
                     fieldName={register('clientCity')}
                     errorMessage={errors.clientCity?.message}
                  />
                  <InputField
                     type="number"
                     label=" Post Code"
                     fieldName={register('clientPostCode')}
                     errorMessage={errors.clientPostCode?.message}
                  />
                  <InputField
                     label="Country"
                     fieldName={register('clientCountry')}
                     errorMessage={errors.clientCountry?.message}
                  />
                  <InputField
                     label="Invoice date"
                     type="date"
                     fieldName={register('invoiceDate')}
                     errorMessage={errors.invoiceDate?.message}
                  />

                  <Controller
                     name="paymentTerms"
                     control={control}
                     // defaultValue={{
                     //    label: modeOfDelivery,
                     //    value: modeOfDelivery,
                     // }}
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
                  />

                  <InputField
                     fieldName={register(`items.${index}.quantity`)}
                     errorMessage={errors.items?.[index]?.quantity}
                     type="number"
                  />
                  <InputField
                     fieldName={register(`items.${index}.price`)}
                     errorMessage={errors.items?.[index]?.price}
                     type="number"
                  />
                  <p>
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
               <div className="flex justify-between control-btn">
                  <button className="bg-light-2 text-grey-2" type="button">
                     Discard
                  </button>
                  <div className="flex gap-2 ">
                     <button
                        className="text-grey bg-black-6"
                        type="button"
                        onClick={onSaveAsDraft}
                     >
                        Save as Draft
                     </button>

                     <button
                        className={` ${isValid ? 'bg-blue' : 'bg-gray-200 text-gray-400'}`}
                        disabled={isValid}
                     >
                        <span>Save & Send</span>
                     </button>
                  </div>
               </div>
            </div>
         </form>
      </InvoiceLayout>
   );
}
