function initializeLocalStorage() {
  if (!localStorage.getItem("notes")) {
    localStorage.setItem("notes", "[]");
  }
  
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
  }
}

export default initializeLocalStorage;