exports.login = (req, res) => {
    const { username, password } = req.body;
  
    if (username === 'admin' && password === 'password') {
      return res.json({ message: 'Login successful', token: 'fake-jwt-token' });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  };
  