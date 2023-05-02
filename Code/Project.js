class Project {
  constructor(name, link, code, content) {
    this.name = name;
    this.link = link;
    this.code = code;
    this.content = content;
  }
  
  getProjectName() {
    return this.name;
  }
  
  getProjectCode() {
    return this.code;
  }
  
  getProjectLink() {
    return this.link;
  }

  getProjectContent() {
    return this.content;
  }
}