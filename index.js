const reqCategorias = fetch(`http://localhost:8087/categorias`).then((resp)=> {
  resp.json().then((data)=>{

    const listaCategoria = document.getElementById('listaCategoria')
   
    data.map(({id, nombreCategoria})=>{


      const li = document.createElement('li')
      li.innerHTML = `id: ${id} nombre: ${nombreCategoria}`
      listaCategoria.appendChild(li)
    })
  })
}).catch(console.warn)
