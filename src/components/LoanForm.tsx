import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoanForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      amount: "",
      tenure: "",
      purpose: "",
    },
    validationSchema: Yup.object({
      amount: Yup.number()
        .required("Amount is required")
        .min(1, "Must be greater than 0"),
      tenure: Yup.number()
        .required("Tenure is required")
        .min(1, "Must be at least 1 month"),
      purpose: Yup.string().required("Purpose is required"),
    }),
    onSubmit: (values) => {
      console.log("Loan Request Submitted:", values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-4 bg-white shadow rounded"
    >
      <h2 className="text-xl font-bold">Request a New Loan</h2>
      <div className="mt-4">
        <label htmlFor="amount" className="block font-medium">
          Loan Amount
        </label>
        <input
          id="amount"
          name="amount"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.amount}
          className="w-full mt-2 p-2 border rounded"
        />
        {formik.errors.amount ? (
          <p className="text-red-500">{formik.errors.amount}</p>
        ) : null}
      </div>
      <div className="mt-4">
        <label htmlFor="tenure" className="block font-medium">
          Tenure (Months)
        </label>
        <input
          id="tenure"
          name="tenure"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.tenure}
          className="w-full mt-2 p-2 border rounded"
        />
        {formik.errors.tenure ? (
          <p className="text-red-500">{formik.errors.tenure}</p>
        ) : null}
      </div>
      <div className="mt-4">
        <label htmlFor="purpose" className="block font-medium">
          Purpose
        </label>
        <input
          id="purpose"
          name="purpose"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.purpose}
          className="w-full mt-2 p-2 border rounded"
        />
        {formik.errors.purpose ? (
          <p className="text-red-500">{formik.errors.purpose}</p>
        ) : null}
      </div>
      <button
        type="submit"
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default LoanForm;
