const Test= require('../models/test')

// create test
exports.createTest =async (req, res) => {
    try {
        const test = await Test.create(req.body);
        res.status(201).json(test);
    } catch (error) {
        console.error('Error creating test:', error);
        res.status(500).json({ error: 'Error creating test' });
    }
}



// Get all test
exports.getAllTest = async (req, res) => {
    try {
        const test = await Test.findAll();
        res.status(200).json(test);
    } catch (error) {
        console.error('Error fetching tests:', error);
        res.status(500).json({ error: 'Error fetching tests' });
    }
}

// Get test by ID
exports.getTestid =async (req, res) => {
    const testId = req.params.test_id;
    
    try {
        const test= await Test.findByPk(testId);
        if (!test) {
            return res.status(404).json({ error: 'test not found' });
        }
        res.status(200).json(test);
    } catch (error) {
        console.error('Error fetching test:', error);
        res.status(500).json({ error: 'Error fetching test' });
    }
};
/// Update a test
exports.updateTest = async (req, res) => {
    const testId = req.params.test_id;
     
    try {
        const test = await Test.findByPk(testId);
        if (!test) {
            return res.status(404).json({ error: 'test not found' });
        }
        await test.update(req.body);
        res.status(200).json({ message: 'test updated successfully' });
    } catch (error) {
        console.error('Error updating test:', error);
        res.status(500).json({ error: 'Error updating test' });
    }
};

// Delete a test
exports.deleteTest =async (req, res) => {
    const testId = req.params.test_id;
    //console.log(req.params.test_id,"this  is id")
    try {
        const test= await Test.findByPk(testId);
        if (!test) {
            return res.status(404).json({ error: 'test not found' });
        }
        await test.destroy();
        res.status(200).json({ message: 'test deleted successfully' });
    } catch (error) {
        console.error('Error deleting test:', error);
        res.status(500).json({ error: 'Error deleting test' });
    }
};