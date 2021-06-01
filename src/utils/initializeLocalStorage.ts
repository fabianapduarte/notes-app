function initializeLocalStorage() {
  if (!localStorage.getItem("notes")) {
    localStorage.setItem("notes", "[]");
  }
  
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
  }

  if (!localStorage.getItem("color")) {
    localStorage.setItem("color", "purple");
  }
}

export default initializeLocalStorage;