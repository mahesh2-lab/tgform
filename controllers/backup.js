import Data from '../models/data.model.js';
import User from '../models/user.model.js';
import Admin from '../models/admin.model.js';

import fs from 'fs';

async function backupData() {
    try {
        const data1 = await Data.find({});
        const data2 = await User.find({});
        const data3 = await Admin.find({});

        const data = { ...data1, ...data2, ...data3 };

        const jsonData = JSON.stringify(data, null, 2);

        const currentDate = new Date();
        const formattedDate = currentDate.toISOString();
        const backupFileName = `../Backkup/backup_${formattedDate}.json`;

        fs.writeFileSync(backupFileName, jsonData, 'utf8');


        console.log('Backup successful');
    } catch (error) {
        console.error('Error backing up data:', error);
        throw error;
    }
}




export default backupData
