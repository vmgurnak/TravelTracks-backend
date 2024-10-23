const notFoundHundler = (req, res) => {
  res.status(404).json({ message: 'Route not found' });
};

export default notFoundHundler;
