const TestCharge = require('../models/testCharge')

// create testcharge
exports.createTestCharge =async (req, res) => {
    try {
        const testcharge = await TestCharge.create(req.body);
        res.status(201).json(testcharge);
    } catch (error) {
        console.error('Error creating testcharge:', error);
        res.status(500).json({ error: 'Error creating testcharge' });
    }
}



// Get all testcharge
exports.getAllTestCharge = async (req, res) => {
    try {
        const testcharge = await TestCharge.findAll();
        res.status(200).json(testcharge);
    } catch (error) {
        console.error('Error fetching testcharges:', error);
        res.status(500).json({ error: 'Error fetching testcharges' });
    }
}

// Get testcharge by ID
exports.getTestChargeId =async (req, res) => {
    const testchargeId = req.params.path_lab_id;
    
    try {
        const testcharge= await TestCharge.findByPk(testchargeId);
        if (!testcharge) {
            return res.status(404).json({ error: 'testcharge not found' });
        }
        res.status(200).json(testcharge);
    } catch (error) {
        console.error('Error fetching testcharge:', error);
        res.status(500).json({ error: 'Error fetching testcharge' });
    }
};
/// Update a testcharge
exports.updateTestCharge = async (req, res) => {
    const testchargeId = req.params.path_lab_id;
     
    try {
        const testcharge = await TestCharge.findByPk(testchargeId);
        if (!testcharge) {
            return res.status(404).json({ error: 'testcharge not found' });
        }
        await testcharge.update(req.body);
        res.status(200).json({ message: 'testcharge updated successfully' });
    } catch (error) {
        console.error('Error updating testcharge:', error);
        res.status(500).json({ error: 'Error updating testcharge' });
    }
};

// Delete a testcharge
exports.deleteTestCharge=async (req, res) => {
    const testchargeId = req.params.path_lab_id;
    console.log(req.params.path_lab_id,"this is is id")
    try {
        const testcharge = await TestCharge.findByPk(testchargeId);
        if (!testcharge) {
            return res.status(404).json({ error: 'testcharge not found' });
        }
        await testcharge.destroy();
        res.status(200).json({ message: 'testcharge deleted successfully' });
    } catch (error) {
        console.error('Error deleting testcharge:', error);
        res.status(500).json({ error: 'Error deleting testcharge' });
    }
};
