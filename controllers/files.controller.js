import multer from 'multer';
import fs from 'fs';
import path from 'path';


async function deleteLocalFolder(folderPath) {
  try {
    await fs.promises.rmdir(folderPath, { recursive: true });
    console.log(`Local folder "${folderPath}" deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting local folder "${folderPath}":`, error);
  }
}


export const uploadFiles = (req, res) => {
  const prefix = req.user._id.toHexString();
  const destinationPath = `./temp/${prefix}`;

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {

      fs.mkdir(destinationPath, { recursive: true }, (err) => {
        if (err) {
          return cb(err); // Pass any error to Multer
        }
        cb(null, destinationPath); // Call the callback with the destination path
      });
    },
    filename: function (req, file, cb) {
      return cb(null, file.originalname);
    }
  });

  const upload = multer({ storage: storage });

  upload.array('files')(req, res, async (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ msg: "Error uploading file" });
    }
    res.status(201).json({ msg: "File uploaded" });

    // const fileNames = req.files.map((file) => file.originalname);
    // console.log(fileNames);
    // await createAndUploadPDFs(prefix, destinationPath ,fileNames);
    // deleteLocalFolder(destinationPath);
  });
 
  

};

export const downloadFile = (req, res) => {
  const prefix = req.user._id.toHexString();
  const fileName = req.params.fileName;

  const currentFileUrl = new URL(import.meta.url);
  const currentDir = path.dirname(currentFileUrl.pathname);
  const filePath = path.join(currentDir, `../temp/${prefix}`, fileName);


  if (fs.existsSync(filePath)) {
    res.attachment(fileName);
    res.sendFile(filePath);
  } else {
    res.status(404).send(filePath);
  }
};

export const stdFile = (req, res) => {
  const fileName = req.params.fileName;
  const idname = req.params.idname;

  const currentFileUrl = new URL(import.meta.url);
  const currentDir = path.dirname(currentFileUrl.pathname);

    const filePath = path.join(currentDir, `../temp/${idname}`, fileName);
 

  if (fs.existsSync(filePath)) {
    res.attachment(fileName);
    res.sendFile(filePath);
  } else {
    res.status(404).send(filePath);
  }
};
