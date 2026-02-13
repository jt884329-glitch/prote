function filtrar(categoria) {
  const productos = document.querySelectorAll('.card');

  productos.forEach(producto => {
    if (categoria === 'todos') {
      producto.style.display = 'block';
    } else {
      if (producto.classList.contains(categoria)) {
        producto.style.display = 'block';
      } else {
        producto.style.display = 'none';
      }
    }
  });
}
