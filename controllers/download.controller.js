import fs from 'fs';
import path from 'path';


export const download = () => {
  const id = req.user._id;
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, `./temp/${id}`, fileName); // Assuming files are stored in 'uploads' directory

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    res.attachment(fileName);
  } else {
    res.status(404).send('File not found');
  }
}

