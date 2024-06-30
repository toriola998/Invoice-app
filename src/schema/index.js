import * as yup from 'yup';
const invoiceSchema = yup.object().shape({
   streetAddress: yup.string().required('Enter Address'),
   city: yup.string().required('Enter city'),
   postCode: yup.string().required('Enter Post code'),
   country: yup.string().required('Enter city'),
   clientName: yup.string().required('Enter name'),
   clientEmail: yup
      .string()
      .email('Email is invalid')
      .required("Can't be empty"),
   clientStreetAddress: yup.string().required('Enter Address'),
   clientCity: yup.string().required('Enter city'),
   clientPostCode: yup.string().required('Enter Post code'),
   clientCountry: yup.string().required('Enter city'),
   invoiceDate: yup.string().required('Enter Date'),
   paymentTerms: yup.object().required('Enter Payment Terms'),
   projectDescription: yup.string().required('Enter description'),
});
const schemas = {
   invoiceSchema,
};

export default schemas;
