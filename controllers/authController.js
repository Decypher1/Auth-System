//login
//controller function for authenctiation

const signup = (req, res) => {
    const payload = req.body;
    if (!payload.username || !payload.password) {
        res.status(400).send('username and password are required')
    }
    if (payload) {
        
    }
    
}