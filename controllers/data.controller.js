import Data from '../models/data.model.js';

export const sendData = async (req, res) => {
    try {
        const data = req.body;
        const senderId = req.user._id;

        const existingData = await Data.findOne({ senderId });
        if (existingData) {
            const updatedData = await Data.findByIdAndUpdate(existingData._id, {
                $set: {
                    ...data,
                }
            }, { returnDocument: 'after' });
            if (updatedData) {
                res.status(201).json(updatedData);
            }
        } else {
            const newData = await Data.create({
                ...data,
                senderId,
            });
            if (newData) {
                await newData.save();
                res.status(201).json(newData);
            }
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
        console.log("error in createData", error);
    }
}

export const getData = async (req, res) => {
    try {
        const senderId = req.user._id;
        const existingData = await Data.findOne({ senderId });
        if (!existingData) {
            return res.status(404).json({ error: "Data not found" });
        }
        return res.status(200).json(existingData);
    } catch (error) {
        console.log("error in getData ", error);
        return res.status(500).json({ error: error.data });
    }
};

export const UpdateStatus = async (req, res) => {
    try {
        const id = req.body.id;
        const status = req.body.status;


        const updatedDoc = await Data.findOneAndUpdate(
            { _id: id }, 
            { $set: { status: status } }, 
            { new: true } 
          );

        if (!updatedDoc) {
            console.log('Document not found');
            return;
        }

        

        // await doc.save();
        console.log('Value updated successfully:', updatedDoc);
        return res.status(200).json(updatedDoc);
    } catch (error) {
        console.error('Error updating value:', error);
        return res.status(500).json({ msg: error.message });
    }
}