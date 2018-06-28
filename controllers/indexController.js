exports. homepage = (req, res, next) =>{
    res.render('index', { title: 'Portfolio', message: 'hello world', });
  };

  exports. project = (req, res, next) =>{
    res.render('project', { title: 'Project', message: 'hello world', });
  };

  exports. service = (req, res, next) =>{
    res.render('service', { title: 'service', message: 'hello world', });
  };

  exports. contact = (req, res, next) =>{
    res.render('contact', { title: 'Contact', message: 'hello world', });
  };