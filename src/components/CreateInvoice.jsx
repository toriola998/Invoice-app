import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import InvoiceLayout from './layout/InvoiceLayout';
import InputField from './shared/InputField';
import SelectDropdown from './shared/SelectDropdown';
import schemas from '../schema/index';

export default function CreateInvoice() {
   const {
      register,
      handleSubmit,
      control,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schemas.invoiceSchema),
   });

   function onSubmit(formData) {
      console.log(formData);
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

            <div className="bottom-btns">
               <div className="flex justify-between control-btn">
                  <button className="bg-light-2 text-grey-2">Discard</button>
                  <div className="flex gap-2 ">
                     <button className="text-grey bg-black-6">
                        Save as Draft
                     </button>

                     <button className="bg-blue">
                        <span>Save & Send</span>
                     </button>
                  </div>
               </div>
            </div>
         </form>
      </InvoiceLayout>
   );
}
