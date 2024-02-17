const Doctor = require('../models/doctor')

// create Doctor
exports.createDoctor =async (req, res) => {
    try {
        const doctor = await Doctor.create(req.body);
        res.status(201).json(doctor);
    } catch (error) {
        console.error('Error creating doctor:', error);
        res.status(500).json({ error: 'Error creating doctor' });
    }
}



// Get all Doctor
exports.getAllDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findAll();
        res.status(200).json(doctor);
    } catch (error) {
        console.error('Error fetching doctors:', error);
        res.status(500).json({ error: 'Error fetching doctors' });
    }
}

// Get Doctor by ID
exports.getdoctorid =async (req, res) => {
    const doctorId = req.params.doctor_id;
    
    try {
        const doctor= await Doctor.findByPk(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'doctor not found' });
        }
        res.status(200).json(doctor);
    } catch (error) {
        console.error('Error fetching doctor:', error);
        res.status(500).json({ error: 'Error fetching doctor' });
    }
};
/// Update a Doctor
exports.updateDoctor = async (req, res) => {
    const doctorId = req.params.doctor_id;
     
    try {
        const doctor = await Doctor.findByPk(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'doctor not found' });
        }
        await doctor.update(req.body);
        res.status(200).json({ message: 'doctor updated successfully' });
    } catch (error) {
        console.error('Error updating doctor:', error);
        res.status(500).json({ error: 'Error updating doctor' });
    }
};

// Delete a Doctor
exports.deleteDoctor =async (req, res) => {
    const doctorId = req.params.doctor_id;
    //console.log(req.params.doctor_id,"this  is id")
    try {
        const doctor = await Doctor.findByPk(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'doctor not found' });
        }
        await doctor.destroy();
        res.status(200).json({ message: 'doctor deleted successfully' });
    } catch (error) {
        console.error('Error deleting doctor:', error);
        res.status(500).json({ error: 'Error deleting doctor' });
    }
};