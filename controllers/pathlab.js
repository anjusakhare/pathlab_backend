const Pathlab = require('../models/pathlab')

// create pathlab
exports.createPathlab =async (req, res) => {
    try {
        const pathlab = await Pathlab.create(req.body);
        res.status(201).json(pathlab);
    } catch (error) {
        console.error('Error creating pathlab:', error);
        res.status(500).json({ error: 'Error creating pathlab' });
    }
}



// Get all pathlab
exports.getAllPathlab = async (req, res) => {
    try {
        const pathlab = await Pathlab.findAll();
        res.status(200).json(pathlab);
    } catch (error) {
        console.error('Error fetching pathlabs:', error);
        res.status(500).json({ error: 'Error fetching pathlabs' });
    }
}

// Get pathlab by ID
exports.getPathlabid =async (req, res) => {
    const pathlabId = req.params.path_lab_id;
    
    try {
        const pathlab = await Pathlab.findByPk(pathlabId);
        if (!pathlab) {
            return res.status(404).json({ error: 'pathlab not found' });
        }
        res.status(200).json(pathlab);
    } catch (error) {
        console.error('Error fetching pathlab:', error);
        res.status(500).json({ error: 'Error fetching pathlab' });
    }
};
/// Update a pathlab
exports.updatePathlab = async (req, res) => {
    const pathlabId = req.params.path_lab_id;
     
    try {
        const pathlab = await Pathlab.findByPk(pathlabId);
        if (!pathlab) {
            return res.status(404).json({ error: 'pathlab not found' });
        }
        await pathlab.update(req.body);
        res.status(200).json({ message: 'pathlab updated successfully' });
    } catch (error) {
        console.error('Error updating pathlab:', error);
        res.status(500).json({ error: 'Error updating pathlab' });
    }
};

// Delete a pathlab
exports.deletePathlab =async (req, res) => {
    const pathlabId = req.params.path_lab_id;
    console.log(req.params.pathlab_id,"this is is id")
    try {
        const pathlab = await Pathlab.findByPk(pathlabId);
        if (!pathlab) {
            return res.status(404).json({ error: 'pathlab not found' });
        }
        await pathlab.destroy();
        res.status(200).json({ message: 'pathlab deleted successfully' });
    } catch (error) {
        console.error('Error deleting pathlab:', error);
        res.status(500).json({ error: 'Error deleting pathlab' });
    }
};
