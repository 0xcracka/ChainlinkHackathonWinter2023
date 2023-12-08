import React, { useState, ChangeEvent, FormEvent } from "react";

interface DatasetForm {
  name: string;
  description: string;
  creator: string;
  size: string;
  domain: string;
}

const DatasetMetadataForm: React.FC = () => {
  const [formData, setFormData] = useState<DatasetForm>({
    name: "",
    description: "",
    creator: "",
    size: "",
    domain: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4 space-y-4">
      <InputField
        label="Dataset Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextAreaField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <InputField
        label="Creator"
        name="creator"
        value={formData.creator}
        onChange={handleChange}
      />
      <InputField
        label="Size"
        name="size"
        value={formData.size}
        onChange={handleChange}
      />
      <InputField
        label="Domain"
        name="domain"
        value={formData.domain}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
};
const InputField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, name, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type="text"
      name={name}
      className="mt-1 block w-full rounded-md border-2 border-gray-400 bg-white text-gray-700 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
      value={value}
      onChange={onChange}
    />
  </div>
);

const TextAreaField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}> = ({ label, name, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <textarea
      name={name}
      className="mt-1 block w-full rounded-md border-2 border-gray-400 bg-white text-gray-700 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
      value={value}
      onChange={onChange}
    ></textarea>
  </div>
);

export default DatasetMetadataForm;
