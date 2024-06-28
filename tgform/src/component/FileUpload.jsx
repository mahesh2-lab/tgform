import React from 'react';

const FileUploadComponent = ({ handleFileChange, index, type, DocName , required }) => {
  return (
    <div className="w-full h-14 border mt-2 rounded-xl">
      <div className="w-full flex h-full items-center justify-between ms-8">
        <span className="w-2/4">{DocName ? DocName : "No document selected"}</span>
        <span className="sr-only">Choose document</span>
        <input
          type="file"
          name="domacile"
          onChange={(e) => handleFileChange(e, index, type)}
          required={required}
          className="flex cursor-pointer file:cursor-pointer text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        />
      </div>
    </div>
  );
};


export default FileUploadComponent;
