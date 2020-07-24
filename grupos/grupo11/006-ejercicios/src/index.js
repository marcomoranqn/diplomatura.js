//document.getElementById('app').innerHTML = 'Hello World!';

//console.log('inicio');
const app = document.getElementById('app');

function generarTabla(tipo) {
  const tabla = document.createElement('table');
  tabla.setAttribute('border', '2');
  const tblBody = document.createElement('tbody');
  const txtEncName = document.createTextNode('Name');
  const txtEncHeight = document.createTextNode('Height');
  const txtEncPlace = document.createTextNode('Place');
  const encabezado = document.createElement('tr');
  const encabezadoName = document.createElement('th');

  encabezadoName.appendChild(txtEncName);
  encabezado.appendChild(encabezadoName);
  const encabezadoHeight = document.createElement('th');

  encabezadoHeight.appendChild(txtEncHeight);
  encabezado.appendChild(encabezadoHeight);
  const encabezadoPlace = document.createElement('th');

  encabezadoPlace.appendChild(txtEncPlace);
  encabezado.appendChild(encabezadoPlace);
  if (tipo != 0) {
    txtEncName.textContent = 'Nombre';
    txtEncHeight.textContent = 'Altura';
    txtEncPlace.textContent = 'Lugar';
  }

  tblBody.appendChild(encabezado);

  const mountains = [
    { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
    { name: 'Everest', height: 8848, place: 'Nepal' },
    { name: 'Mount Fuji', height: 3776, place: 'Japan' },
    { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
    { name: 'Denali', height: 6168, place: 'United States' },
    { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
    { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
  ];

  for (let i = 0; i < mountains.length; i++) {
    const fila = document.createElement('tr');

    const celdaName = document.createElement('td');
    const txtCeldaName = document.createTextNode(mountains[i].name);
    celdaName.appendChild(txtCeldaName);
    fila.appendChild(celdaName);
    //    console.log('celda name ' + celdaName);

    const celdaHeight = document.createElement('td');
    const txtCeldaHeight = document.createTextNode(mountains[i].height);
    celdaHeight.appendChild(txtCeldaHeight);
    fila.appendChild(celdaHeight);
    //    console.log('celda height ' + celdaHeight);

    const celdaPlace = document.createElement('td');
    const txtCeldaPlace = document.createTextNode(mountains[i].place);
    celdaPlace.appendChild(txtCeldaPlace);
    fila.appendChild(celdaPlace);
    //    console.log('celda Place ' + celdaPlace);

    tblBody.appendChild(fila);
  }
  tabla.appendChild(tblBody);
  app.appendChild(tabla);
}
if (app) {
  //document.getElementById('app').appendChild(tabla);
  botonGN = document.createElement('button');
  botonGN.innerHTML = 'Generate Now!';
  botonGN.addEventListener('click', () => {
    generarTabla(0);
  });
  app.appendChild(botonGN);

  botonGA = document.createElement('button');
  botonGA.innerHTML = 'Generar Ahora!';
  botonGA.addEventListener('click', () => {
    generarTabla(1);
  });
  app.appendChild(botonGA);
}

// Ejercicio 3 crear lista no ordenada
const app3 = document.getElementById('app3');
if (app3) {
  const TODO = ['Queso', 'Tomates', 'Zanahorias', 'Toalla'];

  const ul = document.createElement('ul');
  for (let i = 0; i < TODO.length; i++) {
    const li = document.createElement('li');
    txtLi = document.createTextNode(TODO[i]);
    li.appendChild(txtLi);

    btnEliminar = document.createElement('button');
    btnEliminar.innerHTML = 'Eliminar';
    btnEliminar.addEventListener('click', () => {
      console.log('innerHTML ' + li.innerHTML);
      console.log('innerTeext ' + li.innerText);
      eliminarElemento(li);
    });
    li.appendChild(btnEliminar);
    ul.appendChild(li);
  }
  app3.appendChild(ul);

  function eliminarElemento(elementoLista) {
    ul.removeChild(elementoLista);
  }

  input = document.createElement('input');
  agregar = document.createElement('button');
  agregar.innerHTML = 'Agregar';
  agregar.addEventListener('click', () => {
    //console.log('value ' + input.value);
    //console.log('inner');
    agregarLista(input.value);
  });
  app3.appendChild(input);
  app3.appendChild(agregar);

  function agregarLista(txtLista) {
    const li = document.createElement('li');
    txtLi = document.createTextNode(txtLista);
    li.appendChild(txtLi);

    btnEliminar = document.createElement('button');
    btnEliminar.innerHTML = 'Eliminar';
    btnEliminar.addEventListener('click', () => {
      console.log('innerHTML ' + li.innerHTML);
      console.log('innerTeext ' + li.innerText);
      eliminarElemento(li);
    });
    li.appendChild(btnEliminar);

    ul.appendChild(li);
  }
}

// Ejercicio 4 globos
app4 = document.getElementById('app4');
if (app4) {
  const cantidad = Math.floor(Math.random() * (30 - 10)) + 10;
  console.log(cantidad);
  colores = ['red', 'blue', 'yellow'];
  for (let i = 0; i < cantidad; i++) {
    divGlobo = document.createElement('div');
    divGlobo.style.backgroundColor = colores[Math.floor(Math.random() * 3)];
    divGlobo.className = 'globo';
    divGlobo.style.width = '100px';
    divGlobo.style.height = '100px';
    divGlobo.style.border = '10px';
    divGlobo.style.display = 'inline-block';
    divGlobo.style.borderRadius = '50%';
    divGlobo.id = 'globo' + i;
    divGlobo.innerHTML = i;
    divGlobo.addEventListener('click', (event) => {
      //console.log(globo);
      eliminarGlobo(i);
      event.stopPropagation();
      event.preventDefault();
    });
    app4.appendChild(divGlobo);
  }

  //divGlobo.addEventListener('click',eliminarGlobo(divGlobo));

  function eliminarGlobo(id) {
    globo = document.getElementById('globo' + id);
    app4.removeChild(globo); //(app4.lastElementChild);
    if (!app4.lastElementChild) {
      console.log('no hay mas elementos');
      alert('GANASTE!');
    }
  }
}
